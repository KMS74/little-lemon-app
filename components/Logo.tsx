import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        width={200}
        height={75}
        src="/assets/Logo .svg"
        alt="little-lemon"
      />
    </Link>
  );
};

export default Logo;
