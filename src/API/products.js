import axios from "axios";

export class Products {
  async productList() {
    const options = {
      method: "GET",
      url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
      params: { model: "corolla" },
      headers: {
        "X-RapidAPI-Key": "2908a91aa7mshba37e8507559e2cp1fd5ffjsnb4e11ac2f7ef",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async productinfo() {
    const options = {
      method: "GET",
      url: "https://all-cars-names-image-and-variants-info.p.rapidapi.com/motororchestrator/api/v1/mmv",
      params: {
        vehicle_type: "car",
      },
      headers: {
        "X-RapidAPI-Key": "2908a91aa7mshba37e8507559e2cp1fd5ffjsnb4e11ac2f7ef",
        "X-RapidAPI-Host":
          "all-cars-names-image-and-variants-info.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }
}



