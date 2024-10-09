import { Link } from "react-router-dom";

export default function FullScreenNav({
  show,
  toggleNavScreen,
}: {
  show: boolean;
  toggleNavScreen: () => void;
}) {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } fixed bg-[#191f25] z-40 left-0 right-0 bottom-0 h-full items-center justify-center`}
    >
      <div className="w-full px-10">
        {/* <div>
          <input
            type="text"
            className="bg-white py-3 px-5 shadow-sm rounded-md w-full"
            placeholder="Search your favorite food"
          />
        </div> */}
        <ul className="text-center mb-20">
          <li className="mb-4">
            <Link
              onClick={() => toggleNavScreen()}
              to="/"
              className="text-xl font-semibold text-white hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              onClick={() => toggleNavScreen()}
              to="/location"
              className="text-xl font-semibold text-white hover:text-primary"
            >
              Location
            </Link>
          </li>
          <li className="mb-4">
            <Link
              onClick={() => toggleNavScreen()}
              to="/menu"
              className="text-xl font-semibold text-white hover:text-primary"
            >
              Menu
            </Link>
          </li>
          <li className="mb-4">
            <Link
              onClick={() => toggleNavScreen()}
              to="/about"
              className="text-xl font-semibold text-white hover:text-primary"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="text-center">
          <Link
            to={"/reservation"}
            className="px-5 py-3 rounded-md text-white bg-primary hover:opacity-90 hover:text-white font-medium"
            onClick={() => toggleNavScreen()}
          >
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}
