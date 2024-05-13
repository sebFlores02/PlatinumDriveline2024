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
        className="float-end nav2:hidden"
      />
    </Link>
  </li>
);

function Header() {
  const menuItems = [
    { href: "/", text: "Inicio", icon: "icons/next.png" },
    { href: "Platinum", text: "Embrague", icon: "icons/next.png" },
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
    <main>
      <section className="hidden nav2:flex bg-naranja px-[50px] 2xl:px-[100px] py-2 justify-between items-center">
        <section className="flex gap-4">
          <Link
            href="https://www.facebook.com/PlatinumDrivelineMx/"
            target="_blank"
          >
            <Image
              quality={60}
              src="/icons/facebookWhite.png"
              alt="facebook"
              width={29}
              height={29}
            />
          </Link>
          <Link href="https://wa.me/4423455370" target="_blank">
            <Image
              quality={60}
              src="/icons/whatsappWhite.png"
              alt="whatsapp"
              width={29}
              height={29}
            />
          </Link>
          <Link href="mailto:seb.flores2002@gmail.com">
            <Image
              quality={60}
              src="/icons/emailWhite.png"
              alt="email"
              width={29}
              height={29}
            />
          </Link>
        </section>
        <section>
          <section className="flex gap-5 text-[#edeaea]">
            <Link href="https://catalogoplatinumdriveline.com/" target="_blank">
              <article className=" flex items-center px-5 gap-3 rounded-lg hover:underline">
                <Image
                  quality={60}
                  src="/icons/web.png"
                  alt="email"
                  width={30}
                  height={30}
                />
                <p>Visita el Catálogo Electrónico</p>
              </article>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1VALiPiPlFG4SzS6s9B8Z4U9d5ZjGhgHf/view?usp=sharing"
              download
            >
              <article className=" flex items-center px-5 gap-3 rounded-lg hover:underline">
                <Image
                  quality={60}
                  src="/icons/web.png"
                  alt="email"
                  width={30}
                  height={30}
                />
                <p>Descarga el Catálogo Ligero</p>
              </article>
            </Link>
          </section>
        </section>
      </section>
      <nav
        className={`${
          isVisible
            ? "fixed inset-0 overflow-y-auto w-full flex flex-col z-10"
            : ""
        }`}
      >
        <section
          className={`${
            isVisible ? "bg-white" : "bg-gris_oscuro"
          } flex justify-between items-center md:pl-10 pr-7 md:pr-20 xl:px-[200px] h-[10vh] py-12`}
        >
          <section className="flex gap-4 items-center">
            <Link href="/">
              <Image
                quality={60}
                src="/LOGOPlatinum.png"
                alt="Kit"
                width={200}
                height={130}
                className="min-h-[130px] min-w-[200px]"
              />
            </Link>
          </section>
          <Image
            onClick={toggleMenu}
            quality={60}
            src={isVisible ? "/icons/close.png" : "/icons/menu.png"}
            alt={"burger menu"}
            width={25}
            height={25}
            className="float-end nav2:hidden"
          />

          <ul className="hidden nav2:flex gap-10 text-white justify-center">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/Platinum">Embrague</a>
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
        </section>
        {isVisible && (
          <section className="bg-white flex flex-col justify-between pt-6 text-black font-medium nav2:hidden px-6">
            <ul className="flex flex-col justify-center gap-7 bg-[#F4F4F4] rounded-2xl py-7 px-7">
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
              <Link
                href="https://catalogoplatinumdriveline.com"
                target="_blank"
              >
                <article className="bg-naranja flex items-center px-3 py-3 gap-3 rounded-lg">
                  <Image
                    quality={60}
                    src="/icons/webWhite.png"
                    alt="email"
                    width={30}
                    height={30}
                  />
                  <p className="text-white">Visita el Catálogo Electrónico</p>
                </article>
              </Link>
            </ul>
            <section className="md:px-20 xl:px-40 py-10 lg:py-0 flex justify-center lg:justify-start gap-7">
              <a href="mailto:seb.flores2002@gmail.com">
                <Image
                  src="/icons/email.png"
                  width={24}
                  height={24}
                  alt="email"
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
                  alt="facebook"
                />
              </a>
              <a href="https://wa.me/4423455370" target="_blank">
                <Image
                  src="/icons/whatsappNaranja.png"
                  width={24}
                  height={24}
                  alt="whatsapp"
                />
              </a>
            </section>
          </section>
        )}
      </nav>
    </main>
  );
}

export default Header;
