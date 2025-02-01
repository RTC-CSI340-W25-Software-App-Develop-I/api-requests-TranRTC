// prepare data for sending to server
const restaurant = {
  id: 6,
  name: "Bella Bistro",
  address: "456 Oak Avenue, Portland, OR",
  phone: "555-6789",
  cuisine: "Italian",
  rating: 4.7,
  hours: {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM",
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "11:00 AM - 11:00 PM",
    sunday: "12:00 PM - 9:00 PM",
  },
  menu: [
    { item: "Margherita Pizza", price: 13.99 },
    { item: "Penne Alfredo", price: 14.99 },
    { item: "Tiramisu", price: 6.99 },
  ],
};

// define method which uses the Fetch API to send a GET request and process the response
const getData = async () => {
  const res = await fetch("http://localhost:3000/restaurants");
  const data = await res.json();
  console.log(data); // check in the browser console to see the response data which is list of 5 restaurants sent from back-end: Array[5]
};


// send get request and process response
getData();


// define method which use Fetch API to send post request and process the response
const postData = async () => {
  const res = await fetch("http://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant), // prepare data of restaurant 6 to send to back-end
  });
  console.log(res.body); // check the browser console to see the data being sent in the request.body: ReadableStream
  const data = await res.json();
  console.log(data); // check the browser console to see data object being sent (restaurant 6): Object
  getData(); // check the browser console to see the update list of 6 restaurant from back-end. 5 from back-end + 1 sent from front-end to back-end: Array[6]
};

// send post request and process the response
postData();
