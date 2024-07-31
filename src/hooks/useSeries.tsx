import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../api/api-client";
import { Movies } from "./useMovies";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDA3NWEwNjFjZjJiMTM1ZjQyZjBhMDFmM2VhM2I0NiIsIm5iZiI6MTcyMjI3ODYwOC45MjMzNjYsInN1YiI6IjY2M2Q5OGJmYjQ0N2EzZWRkN2M3NzRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2JsIUNIc8O7l7wbi9ezpHm_I-rxJ-UFIw2BbKFgZTs";
const apiClient = new APIClient("https://api.themoviedb.org/3", token);

export function useSeries() {
  return useQuery<Movies[], Error>({
    queryKey: ["discover", "tv"],
    queryFn: async () => apiClient.getTv("/discover/tv?api_key=YOUR_API_KEY"),
  });
}
