// import the libraries and data source

import express from 'express'
import cors from 'cors'
import {restaurants} from './data.js'


// config an app server using express
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());



// method handling http GET request
app.get('/restaurants', (req, res) => {
    res.json(restaurants);
  });



// method handling http POS request
app.post('/restaurants', (req, res) => {
    const newRestaurant = {      // create new restaurant which is sent from from end
      id: restaurants.length + 1,
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      cuisine: req.body.cuisine,
      rating: req.body.rating,
      hours:req.body.hours,
      menu: req.body.menu
    };
  
    restaurants.push(newRestaurant); // add newly created restaurant to the list of restaurant at back-end
    res.status(201).json(newRestaurant);
  });



 // check the app server is running 
app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
});
