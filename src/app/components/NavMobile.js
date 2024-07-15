import { menuItems } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const NavMobile = ({ toggleMenu }) => {
  return (
    <main className="min-h-screen">
      <section className="bg-white flex flex-col justify-between pt-8 text-black font-medium nav2:hidden px-6 min-h-screen">
        <ul className="flex flex-col justify-center gap-7 bg-gris_oscuro text-white rounded-2xl py-7 px-7">
          {menuItems.map((item, index) => (
            <article
              onClick={toggleMenu}
              className="flex justify-between py-4"
              key={index}
            >
              <NavItem key={index} {...item} />
            </article>
          ))}
          <Link href="https://catalogoplatinumdriveline.com" target="_blank">
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
            <Image src="/icons/email.png" width={24} height={24} alt="email" />
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
              src="/icons/whatsappnaranja.png"
              width={24}
              height={24}
              alt="whatsapp"
            />
          </a>
        </section>
      </section>
    </main>
  );
};

export default NavMobile;
