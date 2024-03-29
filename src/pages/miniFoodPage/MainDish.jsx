
import Img03 from "../../assets/Foods/Img03.jpg";
import Img04 from "../../assets/Foods/Img04.jpg";

export default function MainDish() {
  return (
    <div>
      <h1 className="hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
        MAIN DISH
      </h1>
      {/* ========== MAIN DISH 1 ========== */}
      <div className="flex justify-center items-center">
        <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img03} alt="image description" />
        <p className=" font-bold">
          Mix
          Sausages...............................................228
          Baht
          <br />
          Fried Beef & Rice.........................................188
          Baht
          <br />
          Fried Pork & Rice.........................................178
          Baht
          <br />
          Ebiko Cabonara............................................168
          Baht
          <br />
          Smoked Sausage..........................................148
          Baht
          <br />
          Pork Mince Bolognese.................................138 Baht
        </p>
      </div>

      {/* ========== MAIN DISH 2 ========== */}
      <div className="flex justify-center items-center">
        <p className=" font-bold">
          Thai-French Beef
          Lasagna...................198
          Baht
          <br />
          Baked Spinach With
          Cheese...............138 Baht
        </p>
        <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img04} alt="image description" />
      </div>
    </div>
  );
}
