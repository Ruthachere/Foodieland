import Image from "next/image";
import foodieLogo from "./../../public/images/Foodieland.png";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        className="logo"
        src={foodieLogo}
        alt="Foodieland logo"
        width={50}
        height={30}
      />
    </div>
  );
};

export default Logo;
