import React from "react";
import { useDispatch } from "react-redux";
import { playFilm } from "../redux/reducers/filmSLice";
import { Link } from "react-router-dom";
import { useUpcoming } from "../hooks/useUpcoming";

const Upcoming: React.FC = () => {
  const { data } = useUpcoming();

  const dispatch = useDispatch();

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold mb-10">
        Upcoming Movies
        <span className="ml-3 text-2xl text-yellow-500 font-bold">&#62;</span>
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
  );
};

export default Upcoming;
