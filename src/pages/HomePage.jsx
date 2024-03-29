import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
import { Link } from "react-router-dom";

import shimp from "../assets/Cats/ไข่กุ้ง.jpg";
import Img05 from "../assets/Foods/Img05.jpg";
import Bobby from "../assets/Cats/bobby - boy.jpg";

function HomePage() {
  return (
    // ========== Start ========== //
    <div
      className=""
      style={{
        backgroundSize: "2000px 2000px",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
      }}
    >
      <br />
      <LogoCat />
      {/* // ========== IMG ========== // */}
      <div className="flex justify-center p-16 space-x-12 ">
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/cat">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={shimp}
            alt="image description"
          />

            <button className="flex justify-center items-center bg-pink-400 text-white font-bold w-full ">
              Cats
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 2 ========== // */}
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/food">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Img05}
            alt="image description"
          />


            <button className="flex justify-center items-center bg-pink-400 text-white font-bold w-full">
              Food
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 3 ========== // */}
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/queue">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Bobby}
            alt="image description"
          />


            <button className=" flex justify-center items-center bg-pink-400 text-white font-bold w-full">
              Queue
            </button>
          </Link>
        </div>
      </div>
      <br />

      {/* // ========== End ========== // */}
      <Footer />
    </div>
  );
}
export default HomePage;
