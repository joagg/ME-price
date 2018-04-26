const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get requests to /products'
  })
});

router.post('/', (req, res, next) => {

  const product = {
      name: req.body.name,
      price: req.body.price
  };

  res.status(201).json({
    message: 'Handling POST requests to /products',
    createdProduct: product
  })
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
      message: 'Å lø'
    });
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product updated'
  });
})

module.exports = router;
