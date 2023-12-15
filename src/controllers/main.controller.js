module.exports = {
    home: (req, res) => {
        res.render('index', {
            title: "Home"
        });
    },
    contact: (req, res) => res.send('Esta es la vista de contacto'),
    about: (req, res) => res.send('Esta es la vista sobre nosotros'),
    faqs: (req, res) => res.send('Esta es la vista de preguntas frecuentes')    
}

