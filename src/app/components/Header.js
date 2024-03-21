import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <main className="bg-gris_oscuro flex justify-between items-center px-14 mb-14">
      <section className="basis-[15%]">
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
      <ul className="text-white flex gap-7 font-medium basis-[70%] text-center justify-center ml-auto">
        <Link href="/Platinum">Inicio</Link>
        <Link href="/QuienesSomos">¿Quiénes Somos?</Link>
        {/* <Link href="/Catalogo">Catálogo</Link> */}
        <Link href="/Productos">Producto</Link>
        <Link href="/Boletines">Boletines</Link>
        <Link href="/Galeria">Galería</Link>
        <Link href="/Contacto">Contacto</Link>
      </ul>
      <section className="basis-[15%]">
        <Image
          quality={60}
          src="/facebookNaranja.png"
          alt="Kit"
          width={25}
          height={25}
          className="float-end"
        />
      </section>
    </main>
  );
}

export default Header;
