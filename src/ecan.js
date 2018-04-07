const express = require('express'),
                app = express(),
                port = process.env.PORT || 3000,
                mongoose = require('mongoose'),
                Organization = require('../models/organiztionModel')