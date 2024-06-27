require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min/vs' }});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        document.getElementById('auth').style.display = 'none';
        initEditor();
    } else {
        alert('Login failed');
    }
});

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Signup successful, please log in');
    } else {
        alert('Signup failed');
    }
});

function initEditor() {
    require(['vs/editor/editor.main'], function() {
        const editor = monaco.editor.create(document.getElementById('editor'), {
            value: [
                'function x() {',
                '\tconsole.log("Hello, world!");',
                '}'
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark'
        });

        // WebSocket connection for real-time collaboration
        const socket = new WebSocket('ws://localhost:3000');
        
        // Listen for changes from other users
        socket.onmessage = function(event) {
            const data = JSON.parse(event.data);
            if (data.content) {
                editor.setValue(data.content);
            }
        };

        // Send changes to the server
        editor.onDidChangeModelContent(() => {
            const content = editor.getValue();
            socket.send(JSON.stringify({ content }));
        });
    });
}
