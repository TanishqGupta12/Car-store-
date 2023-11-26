import React from "react";
import Img from "../../public/img/Car_Website.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero">
      <div className="Image">
        <Image src={Img} alt="Picture of the author" />
      </div>

      <div className="flex-1 pt-50 padding-x">
        <h1 className="hero_title" >Find , Book , rent a car-Quick and Super Easy</h1>
        <p className="hero_subtitle" >
          Streamline your Car rental Experience with our Efforless Booking
          Process
        </p>
      </div>
    </div>
  );
}
