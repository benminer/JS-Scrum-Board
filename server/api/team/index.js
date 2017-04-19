'use strict';

var express = require('express');
var controller = require('./team.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);

router.post('/:id/project', controller.createProject);

router.put('/:id', controller.upsert);
router.put('/:id/addUser', controller.addUser);

router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
