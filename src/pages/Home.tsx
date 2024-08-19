import React from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import { useHighRated } from "../hooks/useHighRated";
import { useDispatch } from "react-redux";
import { playFilm } from "../redux/reducers/filmSLice";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import Upcoming from "./Upcoming";

const Home: React.FC = () => {
  const { data, error, isLoading } = useHighRated();

  const dispatch = useDispatch();

  if (isLoading) return <LoadingAnimation />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <HeroSlider />
      <div className="my-10 container">
        <div className="px-10">
          <Upcoming />
          <h2 className="text-3xl font-bold mt-20 mb-5">
            Top Rated Movies
            <span className="ml-3 text-2xl text-yellow-500 font-bold">
              &#62;
            </span>
          </h2>
          <ul className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
            {data?.slice(0, 10).map((movie) => (
              <li key={movie.id} className="">
                <Link to="/watch" onClick={() => dispatch(playFilm(movie.id))}>
                  <img
                    className="rounded-md"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
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
      </div>
    </div>
  );
};

export default Home;
