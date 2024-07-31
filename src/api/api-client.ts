import axios from "axios";
import { Movies } from "../hooks/useMovies";

export class APIClient {
  private axiosInstance;

  constructor(baseURL: string, token: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getMovie(endpoint: string): Promise<Movies[]> {
    const response = await this.axiosInstance.get(endpoint);
    return response.data.results;
  }

  async getTv(endpoint: string): Promise<Movies[]> {
    const response = await this.axiosInstance.get(endpoint);
    console.log(response.data.results);
    return response.data.results;
  }
}
