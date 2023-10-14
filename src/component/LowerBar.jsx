function LowerBar() {
  return (
    <div className="my-36 sx:w-11/12 sx:mx-auto">
      <div className="lg:flex lg:max-w-6xl sx:11/12 m-auto ">
        <div className="lg:w-2/3 sx:11/12 sx:mx-auto lg:-mr-8">
          <div>
            <h1 className="text-6xl font-bold font-poppins leading-tight ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">ALL-in-One</span> platform that Makes Easier
            </h1>
            <p className="w-9/12 mt-12 text-2xl">
              We are more than a platform; We are your success partner.
              Discover our services to achieve your bissiness and educational
              goals
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-12 w-10/12 mt-12 ">
            <div className="flex gap-2">
              <img className="w-14 h-14" src="./image/search.png" alt="" />
              <p className="w-32">
                <span className="font-bold">SEARCH </span>vital company
                information
              </p>
            </div>
            <div className="flex gap-2">
              <img className="w-14 h-14" src="./image/connect.png" alt="" />
              <p className="w-36">
                <span className="font-bold">CONNECT </span>with the resources to
                meet your business needs
              </p>
            </div>
            <div className="flex gap-2">
              <img className="w-14 h-14" src="./image/research.png" alt="" />
              <p className="w-32">
                <span className="font-bold">RESEARCH </span>and generate reports
                that drive growth
              </p>
            </div>
            <div className="flex gap-2">
              <img className="w-14 h-14" src="./image/academy.png" alt="" />
              <p className="w-40">
                <span className="font-bold">ACADEMY </span>to give you the
                skills for success in your career
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl lg:m-0 md:mx-32 md:my-10  ">
          <div className="flex  ">
            <div className="mt-10  ">
              <div className=" text-xs">
                <p className="bg-custompink w-52 p-1  rounded-lg ml-auto my-2">
                  Hey, check out loreumipsum services.
                </p>
                <p className="bg-custompink w-60  p-1 ml-auto rounded-lg my-2 ">
                  I learned from their videos, got my first job.
                </p>
                <p className="bg-custompink w-64 p-1 ml-auto rounded-lg my-2">
                  You won't be disappointed with their services.
                </p>
              </div>
              <div className="text-xs text-left mt-8 ">
                <h1 className="bg-customblue w-64 absolute text-left  ml-4 p-1  rounded-lg ">
                  I got a perfect analysis report from them too
                </h1>
                <p className="bg-customblue absolute w-24 p-1 ml-40 mt-8 rounded-lg ">oh, thats's great.</p>
              </div>
            </div>
            <div>
              <img className="   " src="./image/Student.png" alt="" />
            </div>
          </div>
          <div className="flex">
            <img  className="  sm:-mt-10  md:-mt-2  xl:-mt-24  lg:-mt-16" src="./image/Teacher.png"  alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerBar;
