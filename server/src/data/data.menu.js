const mongoose = require("mongoose");

const menu = [
    // Generico
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Ensalada Caesar",
      "picture": "path/to/ensalada_caesar.jpg",
      "ingredients": "Lechuga, pollo a la parrilla, queso parmesano, crutones, aderezo Caesar",
      "price": 9.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Sopa de Tomate",
      "picture": "path/to/sopa_tomate.jpg",
      "ingredients": "Tomates, cebolla, ajo, albahaca, crema",
      "price": 7.49
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Tacos de Carnitas",
      "picture": "path/to/tacos_carnitas.jpg",
      "ingredients": "Carnitas, tortillas de maíz, cebolla, cilantro, salsa",
      "price": 8.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pan de Ajo",
      "picture": "path/to/pan_ajo.jpg",
      "ingredients": "Pan, ajo, mantequilla, perejil",
      "price": 5.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Quesadillas",
      "picture": "path/to/quesadillas.jpg",
      "ingredients": "Tortillas, queso, pollo o carne",
      "price": 6.99
    },
  
    // Hamburguesas
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Hamburguesa Clásica",
      "picture": "path/to/hamburguesa_clasica.jpg",
      "ingredients": "Carne de res, pan de hamburguesa, lechuga, tomate, cebolla, queso, ketchup",
      "price": 11.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Hamburguesa BBQ",
      "picture": "path/to/hamburguesa_bbq.jpg",
      "ingredients": "Carne de res, pan de hamburguesa, cebolla caramelizada, queso cheddar, salsa BBQ",
      "price": 12.49
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Hamburguesa Veggie",
      "picture": "path/to/hamburguesa_veggie.jpg",
      "ingredients": "Hamburguesa de vegetales, pan de hamburguesa, lechuga, tomate, cebolla, mayonesa vegana",
      "price": 10.99
    },
  
    // Pizzas
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pizza Margherita",
      "picture": "path/to/pizza_margherita.jpg",
      "ingredients": "Masa de pizza, salsa de tomate, mozzarella, albahaca",
      "price": 13.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pizza Pepperoni",
      "picture": "path/to/pizza_pepperoni.jpg",
      "ingredients": "Masa de pizza, salsa de tomate, mozzarella, pepperoni",
      "price": 14.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pizza Cuatro Quesos",
      "picture": "path/to/pizza_cuatro_quesos.jpg",
      "ingredients": "Masa de pizza, salsa de tomate, mozzarella, queso cheddar, queso azul, queso parmesano",
      "price": 15.49
    },
  
    // Montaditos
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Montadito de Jamón",
      "picture": "path/to/montadito_jamon.jpg",
      "ingredients": "Pan, jamón ibérico, tomate, aceite de oliva",
      "price": 6.49
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Montadito de Queso Manchego",
      "picture": "path/to/montadito_queso.jpg",
      "ingredients": "Pan, queso manchego, membrillo, nueces",
      "price": 6.99
    },
  
    // Comida en General
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Paella Mixta",
      "picture": "path/to/paella_mixta.jpg",
      "ingredients": "Arroz, mariscos, pollo, verduras, azafrán",
      "price": 18.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Lasaña Boloñesa",
      "picture": "path/to/lasana_bolonesa.jpg",
      "ingredients": "Pasta, carne molida, salsa de tomate, bechamel, queso",
      "price": 16.49
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Ratatouille",
      "picture": "path/to/ratatouille.jpg",
      "ingredients": "Berenjena, calabacín, pimiento, tomate, cebolla, hierbas",
      "price": 14.99
    },
  
    // Pollo
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pollo al Curry",
      "picture": "path/to/pollo_curry.jpg",
      "ingredients": "Pollo, curry, leche de coco, arroz basmati",
      "price": 15.49
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Pollo a la Parrilla",
      "picture": "path/to/pollo_parrilla.jpg",
      "ingredients": "Pollo, especias, guarnición de vegetales",
      "price": 14.99
    },
  
    // Bebidas
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Coca-Cola",
      "picture": "path/to/coca_cola.jpg",
      "ingredients": "Refresco de cola",
      "price": 2.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Agua Mineral",
      "picture": "path/to/agua_mineral.jpg",
      "ingredients": "Agua",
      "price": 1.99
    },
  
    // Postres
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Tarta de Chocolate",
      "picture": "path/to/tarta_chocolate.jpg",
      "ingredients": "Chocolate, harina, azúcar, huevos, mantequilla",
      "price": 5.99
    },
    {
      "restaurantId": "66d19f4bc28098e68585d6af",
      "name": "Helado de Vainilla",
      "picture": "path/to/helado_vainilla.jpg",
      "ingredients": "Leche, crema, vainilla, azúcar",
      "price": 4.49
    }
  ]
  
  module.exports = { menu };
