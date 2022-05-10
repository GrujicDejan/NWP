var express = require('express')
var router = express.Router();

const products = [
  {
    id: 1,
    name: "Dog food",
    imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
    price: 300,
    isOnSale: true,
    quantity: 0
  },
  {
    id: 2,
    name: "Dog food 2",
    imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
    price: 500,
    isOnSale: false,
    quantity: 0
  },
  {
    id: 3,
    name: "Dog food 3",
    imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
    price: 400,
    isOnSale: true,
    quantity: 0
  }
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundProducts = products.filter(
      (product) => product.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundProducts);
  }
  return res.status(200).json(products);
});

router.post('/', (req, res) => {
  let product = req.body;

  if (product.id) {
    return res.status(400)
        .json({msg: 'Product seems to already have an id assigned'});
  }

  product.id = products.length + 1;
  product.quantity = 0;
  products.push(product);
  return res.status(200).json(product);
});

router.put('/:id', (req, res) => {
  let productId = req.params.id;
  const foundProduct = products.find((product) => product.id == productId);
  if (foundProduct) {
    let changeInQuantity = req.body.changeInQuantity;
    foundProduct.quantity += changeInQuantity;
    return res.status(200).json({msg: 'Successfully updated cart'});
  }
  return res.status(400).json({msg: 'Product with id ' + productId + ' not found.'});
});

module.exports = router;