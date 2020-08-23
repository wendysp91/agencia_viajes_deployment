const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales: testimoniales
    })
}
exports.crearTestimonial = async (req, res) => {
    let{nombre, correo, mensaje} = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({'mensaje': 'Escribe tu nombre'});
    }
    if (!correo) {
        errores.push({'mensaje': 'Escribe tu correo'});
    }
    if (!mensaje) {
        errores.push({'mensaje': 'Escribe tu mensaje'});
    }

    if (errores.length > 0) {
        const testimonial = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
}