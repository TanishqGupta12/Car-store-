import axios from 'axios';

export class Products {
  async productList() {
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: { model: 'corolla' },
      headers: {
        'X-RapidAPI-Key': '5773404b06mshedcfecac51f4cd6p1c5e5bjsnfa3624b2d41b',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);


      return (response.data)
    } catch (error) {
      console.error(error);
    }
  }
}

