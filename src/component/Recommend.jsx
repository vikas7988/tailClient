import { AiTwotoneStar } from "react-icons/ai";
function Recommend() {
  return (
    <div>
      <div className="text-lg border">
        <img src="./image/second.png" alt="" />
        <div className="p-4 ">
          <div className="font-bold flex justify-between">
            <h1>Michael Jackson</h1>
            <p>Rs 4000</p>
          </div>
          <p>I will do bissiness evaluation and coporate services</p>
          <div className=" flex my-6">
            <span className=" text-blue-500 mt-1  ">
              {" "}
              <AiTwotoneStar />
            </span>
            <span className="text-blue-400 font-bold mx-2">4.8 </span>(89)
          </div>



          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold  p-2  border border-blue-700 rounded-lg w-11/12 mx-3 ">
            View Services
          </button>

        </div>
      </div>
    </div>
  );
}

export default Recommend;
