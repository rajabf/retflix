import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../api/api-client";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDA3NWEwNjFjZjJiMTM1ZjQyZjBhMDFmM2VhM2I0NiIsIm5iZiI6MTcyMjI3ODYwOC45MjMzNjYsInN1YiI6IjY2M2Q5OGJmYjQ0N2EzZWRkN2M3NzRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K2JsIUNIc8O7l7wbi9ezpHm_I-rxJ-UFIw2BbKFgZTs";
const apiClient = new APIClient("https://api.themoviedb.org/3", token);

export interface Movies {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  video?: boolean;
  vote_average: number;
}

export function useMovies() {
  return useQuery<Movies[], Error>({
    queryKey: ["discover", "movie"],
    queryFn: async () =>
      apiClient.getMovie("/discover/movie?api_key=YOUR_API_KEY"),
  });
}
