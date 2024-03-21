import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/Background.png')] bg-cover w-full h-[100vh] text-white flex flex-col justify-between pb-14">
      <nav className="flex justify-between px-20">
        <Image
          src="/LOGOPlatinum.png"
          width={200}
          height={200}
          alt="Logo Mel Abogados"
        />
        <ul className="flex justify-between items-center font-medium text-white text-[16px] gap-10  underline-offset-4">
          <Link className="hover:underline" href="/QuienesSomos">
            Sobre Nosotros
          </Link>
          <Link className="hover:underline" href="/Contacto">
            Contacto
          </Link>
        </ul>
      </nav>
      <section className="flex">
        <article className="basis-1/2 flex flex-col items-center">
          <h3 className="text-[40px]">Clutches</h3>
          <Image
            quality={50}
            src="/CajaPlatinum.png"
            width={550}
            height={550}
            alt="Logo Mel Abogados"
            className="py-[40px]"
          />
          <Link href="/Platinum">
            <button className="border border-white rounded-lg px-9 py-3 hover:border-naranja hover:text-naranja">
              Conoce Más
            </button>
          </Link>
        </article>
        <article className="basis-1/2 flex flex-col items-center">
          <h3 className="text-[40px]">Suspensión</h3>
          <Image
            quality={50}
            src="/CajaDelphi.png"
            width={550}
            height={550}
            alt="Logo Mel Abogados"
            className="py-[40px]"
          />
          <Link href="/Delphi">
            <button className="border border-white rounded-lg px-9 py-3 hover:border-naranja hover:text-naranja">
              Conoce Más
            </button>
          </Link>
        </article>
      </section>
      <section className="flex justify-center gap-8">
        <Link
          href="https://www.facebook.com/PlatinumDrivelineMx/"
          target="_blank"
        >
          <Image
            src="/facebook.png"
            width={35}
            height={35}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </Link>
        {/* <img className='social_media_icon' src={insta} /> */}
        <Link href="https://wa.me/4423455370" target="_blank">
          <Image
            src="/whatsapp.png"
            width={35}
            height={35}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </Link>
      </section>
    </main>
  );
}
