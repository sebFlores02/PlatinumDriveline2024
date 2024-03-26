"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const NavItem = ({ href, text, icon }) => (
  <li className="gap-3 text-lg w-full">
    <Link className="flex flex-row justify-between" href={`/${href}`}>
      {text}
      <Image
        quality={60}
        src={`/${icon}`}
        alt={"burger menu"}
        width={24}
        height={24}
        className="float-end lg:hidden"
      />
    </Link>
  </li>
);

function Header() {
  const menuItems = [
    { href: "Platinum", text: "Inicio", icon: "icons/next.png" },
    { href: "QuienesSomos", text: "¿Quiénes Somos?", icon: "icons/next.png" },
    { href: "Productos", text: "Producto", icon: "icons/next.png" },
    { href: "Boletines", text: "Boletines", icon: "icons/next.png" },
    { href: "Galeria", text: "Galería", icon: "icons/next.png" },
    { href: "Contacto", text: "Contacto", icon: "icons/next.png" },
  ];
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className={`${isVisible ? "fixed w-full flex flex-col" : ""}`}>
      <section
        className={`${
          isVisible ? "bg-white" : "bg-gris_oscuro"
        } flex justify-between items-center md:pl-3 pr-6 h-[10vh]`}
      >
        <section className="flex gap-4 items-center">
          <Link href="/">
            <Image
              quality={60}
              src="/LOGOPlatinum.png"
              alt="Kit"
              width={200}
              height={200}
            />
          </Link>
        </section>
        <section className=" hidden basis-[15%]">
          <Image
            quality={60}
            src="/facebookNaranja.png"
            alt="Kit"
            width={25}
            height={25}
            className="float-end"
          />
        </section>
        <Image
          onClick={toggleMenu}
          quality={60}
          src={isVisible ? "/icons/close.png" : "/icons/menu.png"}
          alt={"burger menu"}
          width={25}
          height={25}
          className="float-end nav:hidden"
        />

        <ul className="hidden nav:flex gap-10 font-semibold text-white">
          <li>
            <a href="/Platinum">Inicio</a>
          </li>
          <li>
            <a href="/QuienesSomos">¿Quiénes Somos?</a>
          </li>
          <li>
            <a href="/Productos">Producto</a>
          </li>
          <li>
            <a href="/Boletines">Boletines</a>
          </li>
          <li>
            <a href="/Galeria">Galería</a>
          </li>
          <li>
            <a href="/Contacto">Contacto</a>
          </li>
        </ul>
        <a
          className="hidden lg:flex"
          href="https://www.facebook.com/PlatinumDrivelineMx/"
          target="_blank"
        >
          <Image
            src="/icons/facebookNaranja.png"
            width={24}
            height={24}
            alt="Logo Twitter"
          />
        </a>
      </section>
      {isVisible && (
        <section className="bg-white h-[90vh] flex flex-col justify-between pt-16 text-black font-medium lg:hidden px-6">
          <ul className="flex flex-col justify-center gap-7 bg-gris_ligero rounded-2xl py-7 px-7">
            {menuItems.map((item, index, icon) => (
              <article
                onClick={toggleMenu}
                className="flex justify-between py-4"
                key={index}
              >
                <NavItem key={index} {...item} image={icon} />

                {/* {index < menuItems.length - 1 && (
                  <div className="w-[200px] border-gray-300 border float-end mt-5"></div>
                )} */}
              </article>
            ))}
          </ul>
          <section className="md:px-20 xl:px-40 py-10 lg:py-0 flex justify-center lg:justify-start gap-7">
            <a href={`mailto:.com`}>
              <Image
                src="/icons/email.png"
                width={24}
                height={24}
                alt="Logo Twitter"
              />
            </a>
            <a
              href="https://www.facebook.com/PlatinumDrivelineMx/"
              target="_blank"
            >
              <Image
                src="/icons/facebookNaranja.png"
                width={24}
                height={24}
                alt="Logo Twitter"
              />
            </a>
          </section>
        </section>
      )}
    </nav>
  );
}

export default Header;
