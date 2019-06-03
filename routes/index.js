var express = require('express');
var router = express.Router();

//Require controller modules
var atualizabase_controller = require('../controller/atualizabaseController');
var cards_controller = require('../controller/cardsController');

/// BOOK ROUTES ///
//GET catalog home page
router.get('/', atualizabase_controller.index);

//GET request to update base itens
router.get('/cards', cards_controller.card_list);

//GET request to update base itens
router.get('/poporingAllCards', atualizabase_controller.poporingAllCards);


module.exports = router;
