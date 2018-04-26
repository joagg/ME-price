const express = require('express');
const router = express.Router();
const emoji = require('node-emoji');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Deals fetched'
  });
});

router.post('/', (req, res, next) => {
  const deal = {
    articleId: req.body.articleId,
    quantity: req.body.quantity
  };

  res.status(201).json({
    message: 'Deal created',
    deal: deal
  });
});

router.post('/:dealId', (req, res, next) => {
  res.status(201).json({
    message: 'Deal details.. løø',
    dealId: req.params.dealId
  });
  console.log('====================================================');
  console.log('Prisjustering mottatt for vare: ' + req.params.dealId);
  console.log('====================================================');
  console.log('Tilbudet starter: ' +req.body.from_date);
  console.log('Tilbudet varer til: '+req.body.to_date);
  console.log('Pris i tilbudsperioden: ' + req.body.price + " kr");
  console.log('Nedprising utført ' + emoji.emojify(':money_with_wings:')+ emoji.emojify(':money_with_wings:')+ emoji.emojify(':money_with_wings:'));
  console.log('====================================================');
});

module.exports = router;
