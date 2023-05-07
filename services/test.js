#! /usr/bin/env node
var karate = require('./karate');
karate.version = '1.3.0';
karate.config.dir = 'services'
karate.exec("-T=5 services");
