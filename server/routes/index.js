const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialeController = require('../controllers/testimonialeController');

module.exports = function() {
    router.get('/', homeController.consultasHome);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarUnViaje);

    router.get('/testimoniales', testimonialeController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialeController.mostrarTestimoniales);
    return router;
}