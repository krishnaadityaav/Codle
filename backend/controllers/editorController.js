const Document = require('../models/documentModel');

exports.saveDocument = async (req, res) => {
    const { content } = req.body;
    const document = new Document({ content });
    await document.save();
    res.status(201).send({ message: 'Document saved' });
};
