var express = require('express');
var router = express.Router();
var fs = require("fs");
var https=require('https');
var async = require("async");
var request=require('request');

// home.ejs
router.get('/', function(req, res, next){
    res.render("index");
});

router.get('/home', function(req, res, next){
    res.render("index");
});

router.get('/blog', function(req, res, next){
    res.render("index");
});

router.get('/apps', function(req, res, next){
    res.render("index");
});

router.get('/skills', function(req, res, next){
    res.render("index");
});

router.get('/about', function(req, res, next){
    res.render("index");
});

router.get('/blog/angular1vs2', function(req, res, next){
    res.render("index");
});

router.get('/blog/reactvsangular2', function(req, res, next){
    res.render("index");
});

router.get('/allblog', function(req, res, next){
    fs.readFile('./data/blog.json', function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
});

router.get('/allapps', function(req, res, next){
    fs.readFile('./data/apps.json', function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
});

router.get('/booking', function(req, res, next) {
    res.render('booking', { title: 'Eat Booking System' });
});

router.get('/booking/contactinfo', function(req, res, next) {
    res.render('booking', { title: 'Eat Booking System' });
});

router.post('/complete/reserve', function(req, res, next){
    res.status(200).send("OK");
});

module.exports = router;
