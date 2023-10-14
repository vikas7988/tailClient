import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <>
      <div className="font-poppins">
        <div class=" md:flex sm:block sx:flex justify-between max-w-6xl mx-auto px-4 ">
          <div className="flex">
            <ul className="flex  text-black  font-bold  text-lg font-poppin " >
              <li className="py-4 -ml-2 ">
                <img className="sm:h-11 " src="./image/image1.png" alt="" />
              </li>
              <li className="py-6 sx:hidden px-6 sm:flex ">
                Solutions{" "}
                <span className="m-1 text-blue-500  ">
                  <MdKeyboardArrowDown />
                </span>{" "}
              </li>
              <li className="py-6 sx:hidden   sm:flex">
                Features{" "}
                <span className="m-1 text-blue-500">
                  <MdKeyboardArrowDown />
                </span>{" "}
              </li>
              <li className="py-6 sx:hidden sm:block px-3 ">Blogs </li>
              <li className="py-6 px-5 sx:hidden  sm:flex ">
                About{" "}
                <span className="m-1 text-blue-500">
                  <MdKeyboardArrowDown />
                </span>{" "}
              </li>
            </ul>
          </div>
          <div class="flex items-center space-x-4 ml-14">
            <button class="bg-transparent hover:bg-blue-500 text-blue-800  hover:text-white py-2 px-4 border-2 font-bold  border-blue-500 hover:border-transparent rounded-lg w-28">
              Login
            </button>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
