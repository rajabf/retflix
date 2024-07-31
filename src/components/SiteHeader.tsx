import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <div className="sticky top-0  border bg-white border-yellow-500 z-50">
      <div className="container">
        <div className="flex justify-between py-5">
          <a className="text-2xl text-yellow-500" href="/">
            RETFLIX
          </a>
          <nav>
            <ul className="flex gap-10 text-2xl text-yellow-500">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/trendingMovies">MOVIES</Link>
              </li>
              <li>
                <Link to="/trendingSeries">SERIES</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
