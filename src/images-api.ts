import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "LU4Qy42qH-ebJfYpJP6dHBw-WuSVgoN9MOiNBziUaA0";

export interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  }
}

interface PhotoResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

export const getImg = async (input: string, currentPage: number): Promise<Photo[]> => {
      const response = await axios.get<PhotoResponse>("/search/photos", {
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
