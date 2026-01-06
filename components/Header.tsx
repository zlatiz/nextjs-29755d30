import React from "react";
import Image from "next/image";

export default function Header(): JSX.Element {
  const logoSrc = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logoSrc);

  return (
    <header className="w-full border-b border-border bg-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" aria-label="Home">
          <div className="h-12 w-auto">
            <Image src={safeSrc} alt="Garber Bros logo" width={180} height={60} unoptimized />
          </div>
        </a>
        <ul className="hidden md:flex gap-6 text-sm text-gray-700">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/lock-status">Lock Status</a></li>
          <li><a href="/vessels">Vessels</a></li>
          <li><a href="/barges">Barges</a></li>
          <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="md:hidden px-6 pb-4 text-sm text-gray-700">
        <div className="flex gap-4">
          <a href="/about">About</a>
          <a href="/vessels">Vessels</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
