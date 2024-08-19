import { ArrowLeftCircle, ArrowRightCircle, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { playFilm } from "../redux/reducers/filmSLice";

interface SliderChildren {
  backgroundImage: string;
  poster: string;
  content: string;
  imdbId: number;
  rating: number;
  plot: string;
  id: number;
}

const SliderHero: React.FC = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data } = useMovies();
  const [slides, setSlides] = useState<SliderChildren[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const newSlides = data.slice(0, 9).map((movie, index) => ({
        backgroundImage: `${imageUrl + movie.backdrop_path}`,
        poster: `${imageUrl + movie.poster_path}`,
        content: movie.title,
        imdbId: movie.id,
        rating: movie.vote_average,
        id: index,
        plot: movie.overview,
      }));
      setSlides(newSlides);
    }
  }, [data]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex items-center justify-center h-screen"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="backdrop-brightness-[.4] w-full h-full flex items-center justify-center p-20">
              <div className="flex w-full items-center justify-between text-white space-x-8 px-10">
                <div className="max-w-lg">
                  <h1 className="text-4xl font-bold mb-4">{slide.content}</h1>
                  <p className="flex items-center gap-2 mb-4">
                    <Star fill="yellow" color="yellow" className="inline" />
                    {slide.rating} Rating
                  </p>
                  <p className="mb-8">{slide.plot}</p>
                  <Link
                    className="inline-block bg-yellow-500 py-3 px-5 rounded-md"
                    to="/watch"
                    onClick={() => dispatch(playFilm(slide.imdbId))}
                  >
                    View more
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={slide.poster}
                    alt={`${slide.content} Poster`}
                    className="rounded-lg shadow-lg max-h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
        onClick={prevSlide}
      >
        <ArrowLeftCircle />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
        onClick={nextSlide}
      >
        <ArrowRightCircle />
      </button>
    </div>
  );
};

export default SliderHero;
