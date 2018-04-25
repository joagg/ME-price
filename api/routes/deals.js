const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Deals fetched'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order created'
  });
});

router.get('/:dealId', (req, res, next) => {
  res.status(200).json({
    message: 'Deal details.. løø',
    dealId: req.params.dealId
  });
});

module.exports = router;
