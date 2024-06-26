import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "LU4Qy42qH-ebJfYpJP6dHBw-WuSVgoN9MOiNBziUaA0";

export const getImg = async (input, currentPage) => {
      const response = await axios.get("/search/photos", {
        params:{
          query: input,
          page: currentPage,
          per_page: 9,
          client_id: ACCESS_KEY
        }
      });
    console.log(response.data.results);
    return response.data.results;
    
}
