// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/',
//   params: {
//     destination: 'LED',
//     origin: 'MOW'
//   },
//   headers: {
//     'X-Access-Token': '<REQUIRED>',
//     'X-RapidAPI-Key': '725fb5b942msh802001ec5ca8863p134943jsnec754daad71f',
//     'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
//   }
// };

// try {
// 	const response =  axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/',
  headers: {
    'X-RapidAPI-Key': '725fb5b942msh802001ec5ca8863p134943jsnec754daad71f',
    'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();