"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { menuItems } from "@/data/menuData";
import NavMobile from "./NavMobile";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <main>
      <section className="hidden nav2:flex bg-naranja px-[50px] 2xl:px-[60px] py-3 justify-between items-center">
        <section className="flex gap-5">
          <Link
            href="https://www.facebook.com/PlatinumDrivelineMx/"
            target="_blank"
          >
            <Image
              quality={60}
              src="/icons/facebookWhite.png"
              alt="facebook"
              width={34}
              height={34}
            />
          </Link>
          <Link href="mailto:seb.flores2002@gmail.com">
            <Image
              quality={60}
              src="/icons/emailWhite.png"
              alt="email"
              width={34}
              height={34}
            />
          </Link>
        </section>
        <section>
          <section className="flex gap-5 text-[#edeaea] py-1">
            <Link href="https://catalogoplatinumdriveline.com/" target="_blank">
              <article className="flex items-center px-5 gap-3 rounded-xl bg-white py-2 hover:bg-slate-200">
                <Image
                  quality={60}
                  src="/icons/webBlack.png"
                  alt="email"
                  width={23}
                  height={23}
                />
                <p className="font-medium text-gris_oscuro hover:underline">
                  Visita el Catálogo Electrónico
                </p>
              </article>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1VALiPiPlFG4SzS6s9B8Z4U9d5ZjGhgHf/view?usp=sharing"
              target="_blank"
            >
              <article className="flex items-center px-5 gap-3 rounded-xl bg-white py-2 hover:bg-slate-200">
                <Image
                  quality={60}
                  src="/icons/webBlack.png"
                  alt="email"
                  width={23}
                  height={23}
                />
                <p className="font-medium text-gris_oscuro hover:underline">
                  Visita el Catálogo Ligero
                </p>
              </article>
            </Link>
          </section>
        </section>
      </section>
      <nav
        className={`${
          isVisible
            ? "fixed inset-0 overflow-y-auto w-full flex flex-col z-50"
            : ""
        }`}
      >
        <section
          className={`${
            isVisible ? "bg-white" : "bg-gris_oscuro"
          } flex justify-between items-center md:pl-10 pr-7 md:pr-20 xl:px-[100px] h-[10vh] py-10`}
        >
          <section className="flex gap-4 items-center">
            <Link href="/">
              <Image
                quality={60}
                src="/LOGOPlatinum.png"
                alt="Kit"
                width={200}
                height={200}
                className="min-w-[200px]"
              />
            </Link>
          </section>
          <Image
            onClick={toggleMenu}
            quality={60}
            src={isVisible ? "/icons/close.png" : "/icons/menu.png"}
            alt="burger menu"
            width={25}
            height={25}
            className="float-end nav2:hidden cursor-pointer"
          />
          <ul className="hidden nav2:flex gap-10 text-white justify-end w-[80%] items-center">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                text={item.text}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            ))}
          </ul>
        </section>
        {isVisible && <NavMobile toggleMenu={toggleMenu} />}
      </nav>
    </main>
  );
}

export default Header;
