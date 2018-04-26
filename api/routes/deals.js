const express = require('express');
const router = express.Router();

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
});

module.exports = router;
