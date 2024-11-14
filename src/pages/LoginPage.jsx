import React from "react";
import LoginForm from '../features/auth/components/LoginForm';
import RegisterContainer from '../features/auth/components/RegisterContainer';
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";

// =============== < Function > =============== //
export default function LoginPage() {
  return (
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
    <div className="max-w-sm mx-auto my-6 rounded-lg p-4 bg-white shadow-lg">
      <LoginForm />
      <hr className="my-11 border" />
      <RegisterContainer />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}