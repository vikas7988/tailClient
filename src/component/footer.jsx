function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white text-xs ">
      <div >
       
        <div className=" py-8  sm:w-11/12 sm:mx-auto lg:w-11/12">
          <div className="flex max-w-7xl   justify-around mx-4">
            <div className="w-60 sm:block  sx:hidden">
              <img className="w-28" src="./image/logo.png" alt="" />
              <p className=" ">
                India's first platform dedicated to simplifying partner search
              </p>
            </div>
            <div>
              <ul className=" space-y-3">
                <li className=" font-bold">COMPANY</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <ul className=" space-y-3">
                <li className=" font-bold">SOLUTIONS</li>
                <li>Search</li>
                <li>Connect</li>
                <li>Research</li>
                <li>Academy</li>
              </ul>
            </div>
            <div>
              <ul className=" space-y-3">
                <li className=" font-bold">RRESOURCES</li>
                <li>Blogs</li>
                <li>Forms</li>
              </ul>
            </div>
            <div>
              <ul className=" space-y-3">
                <li className=" font-bold">SUPPORT</li>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="mr-10">
              <ul className=" space-y-3">
                <li className=" font-bold">LEGAL</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
          <hr class="border-t-2 max-w-7xl border-white my-6 mx-auto" />

          <div className="md:flex sx:text-center max-w-6xl m-auto justify-between">
            <div>
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </div>
            <div className="flex sx:justify-center space-x-3">
              <img src="./image/facebook.png" alt="" />
              <img src="./image/insta.png" alt="" />
              <img src="./image/linkedin.png" alt="" />
              <img src="./image/whatsap.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-black p-7 text-center">
          <h1>
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
