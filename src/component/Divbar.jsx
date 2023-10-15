import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getName } from "./API/createAPI";

function Divbar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    getName()
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="lg:flex md:block max-w-7xl my-24 lg:ml-36 gap-7 md:mr-4  ">
      <div className="m-6 sx:w-11/12 sx:mx-auto">
        <div className=" max-w-xl">
          <div className="">
            <h1 className="text-6xl font-bold font-poppins leading-tight">
              Find{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
                Partners
              </span>{" "}
              (CAs) available online
            </h1>
            <p className=" text-lg text-gray-600 ">
              <span className="font-semibold">CONNECT</span> with us where your
              services are listed and visible to a myraid of businesses seeking
              CA's for compliance support
            </p>
          </div>
        </div>
        <div className="flex mt-20 min-w-full">
          <input
            className="border-2 w-3/4"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <Link
            to={`/${search}`}
            class=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-4 border border-blue-700 rounded-lg w-1/4 -ml-4"
          >
            <button>SEARCH</button>
          </Link>
        </div>
        <div className="my-6">
          <span className="font-bold">Search result: </span>
          {result.map((el,index) => {
            return <Link to={`/${el}`} ><span key={index}>{el}, </span></Link>;
          })}
        </div>
      </div>
      <div className=" sx:w-11/12 sx:mx-auto">
        <img className="md:w-11/12" src="./image/left.png" alt="" />
      </div>
    </div>
  );
}

export default Divbar;
