import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const SiteHeader = () => {
  const [isHidden, setHidden] = useState<boolean>(true);
  return (
    <header className="sticky top-0 border bg-white border-yellow-500 z-50">
      <div className="container">
        <div>
          <div className="flex justify-between items-center py-3">
            <a className="text-2xl text-yellow-500" href="/">
              RETFLIX
            </a>
            <nav>
              <ul className="flex gap-10 text-xl text-yellow-500">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/trendingMovies">Trending</Link>
                </li>

                <li className="p-0 flex items-center gap-2">
                  <Link to="/discover">Discover</Link>
                  <div className="relative inline-block text-left">
                    <svg
                      role="button"
                      className="w-7"
                      onMouseOver={() => setHidden(false)}
                      onMouseOut={() => setHidden(true)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.38a.75.75 0 01-1.06 0L5.21 8.25a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <div
                      id="dropdownMenu"
                      className={
                        isHidden
                          ? "hidden"
                          : "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
                      }
                    >
                      <div
                        className="py-1 text-sm"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="dropdownButton"
                      >
                        <Link
                          to="/popular"
                          className="block px-4 py-2 text-yellow-500 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Popular
                        </Link>
                        <Link
                          to="/upcoming"
                          className="block px-4 py-2 text-yellow-500 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Upcoming
                        </Link>
                        <Link
                          to="/topRated"
                          className="block px-4 py-2 text-yellow-500 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Top Rated
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link to="/trendingSeries">TV Shows</Link>
                </li>
                <li>
                  <Link to="/people">People</Link>
                </li>
                <li>
                  <Link to="/genres">Genres</Link>
                </li>
                <li>
                  <Link to="/favourites">Favourites</Link>
                </li>
              </ul>
            </nav>

            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
