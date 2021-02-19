const e = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Lito White Medellín'})
})

router.get('/quienes-somos-publiwhite', (req, res) => {
    res.render('about.html', {title: 'Quienes somos - Lito White Medellín'})
})

router.get('/servicios-publiwhite', (req, res) => {
    res.render('services.html', {title: 'Servicios - Lito White Medellín'})
})

router.get('/contacto-publiwhite', (req, res) => {
    res.render('contact.html', {title: 'Contacto - Lito White Medellín'})
})

module.exports = router