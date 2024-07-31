import React from "react";
import { useMovies } from "../hooks/useMovies";
import LoadingAnimation from "../components/LoadingAnimation";

const TrendingMovies: React.FC = () => {
  const { data, error, isLoading } = useMovies();

  if (isLoading) return <LoadingAnimation />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container my-10">
      <h2 className="text-xl mb-5">
        TRENDING MOVIES FOR YOU
        <span className="ml-3 text-2xl text-yellow-500 font-bold">&#62;</span>
      </h2>
      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data?.map((movie) => (
          <li key={movie.id} className="shadow-md border border-yellow-500">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-3">
              <h2 className="text-lg my-2">{movie.title}</h2>
              <p className="mb-2">
                {movie.vote_average}
                <span className="ml-2 text-yellow-500">&#9733;</span>
              </p>
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
