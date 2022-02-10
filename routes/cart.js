const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/', (req, res, next) => {
  res.send('cartPage');
});

cartRouter.put('/cart', (req, res, next) => {
  res.send();
})

cartRouter.post('/cart', (req, res, next) => {

})

cartRouter.delete('/cart', (req, res, next) => {
  res.send();
})

module.exports = cartRouter;
