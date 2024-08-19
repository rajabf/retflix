import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useHighRated } from "../hooks/useHighRated";
import LoadingAnimation from "../components/LoadingAnimation";

const Watch = () => {
  const movieId = useSelector((state: RootState) => state.film.id);
  const { data, isLoading, error } = useHighRated();

  if (isLoading) return <LoadingAnimation />;
  if (error) return <div>Error: {error.message}</div>;

  const selectedMovie = data?.find((movie) => movie.id == movieId);

  if (!selectedMovie) {
    return <div>No movie found for the selected ID - {movieId}.</div>;
  }

  return (
    <div className="container my-10">
      <h2 className="text-xl mb-5">
        About <b>{selectedMovie.title}</b>
        <span className="ml-3 text-2xl text-yellow-500 font-bold">&#62;</span>
      </h2>
      <ul className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <li
          key={selectedMovie.id}
          className="shadow-md border border-yellow-500"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
          <div className="p-3">
            <h2 className="text-lg my-2">{selectedMovie.title}</h2>
            <p className="mb-2">
              {selectedMovie.vote_average}
              <span className="ml-2 text-yellow-500">&#9733;</span>
            </p>
            <p>{selectedMovie.release_date.slice(0, 4)}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Watch;
