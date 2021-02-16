const e = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Publi White Medellín'})
})

router.get('/quienes-somos-publiwhite', (req, res) => {
    res.render('about.html', {title: 'Quienes somos - Publi White Medellín'})
})

router.get('/servicios-publiwhite', (req, res) => {
    res.render('services.html', {title: 'Servicios - Publi White Medellín'})
})

router.get('/contacto-publiwhite', (req, res) => {
    res.render('contact.html', {title: 'Contacto - Publi White Medellín'})
})

module.exports = router