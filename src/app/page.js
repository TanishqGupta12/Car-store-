'use client'

export default function Home() {

  async function api () {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {model: 'corolla'},
      headers: {
        'X-RapidAPI-Key': '5773404b06mshedcfecac51f4cd6p1c5e5bjsnfa3624b2d41b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {api()}
      
    </main>
  )
}
