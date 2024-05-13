import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/Background.png')] sm:bg-[url('/Background.png')] bg-cover w-full min-h-[100vh] text-white flex flex-col justify-between pb-14">
      <nav className="flex justify-between px-4 md:px-12 lg:px-20">
        <Image
          src="/LOGOPlatinum.png"
          width={200}
          height={200}
          alt="Logo Mel Abogados"
          className="w-[40%] max-w-[200px] sm:w-full"
        />
        <ul className="flex justify-between items-center font-medium text-white text-sm sm:text-[16px] gap-4 sm:gap-10 underline-offset-4">
          <Link className="hover:underline" href="/QuienesSomos">
            Sobre Nosotros
          </Link>
          <Link className="hover:underline" href="/Contacto">
            Contacto
          </Link>
        </ul>
      </nav>
      <section className="flex flex-col sm:flex-row px-10">
        <article className="basis-1/2 flex flex-col items-center">
          <h3 className="text-[40px] mt-8 sm:mt-0">Embrague</h3>
          <Image
            quality={50}
            src="/images/TestPlatinumPortada.png"
            width={450}
            height={450}
            alt="imagen platinum"
            className="py-[55px]"
          />
          <Link href="/Platinum">
            <button className="border border-white rounded-lg px-9 py-3 hover:border-naranja hover:text-naranja">
              Conoce Más
            </button>
          </Link>
        </article>
        <article className="basis-1/2 flex flex-col items-center justify-between">
          <h3 className="text-[40px] mt-20 sm:mt-0">Suspensión</h3>
          <Image
            quality={50}
            src="/CajaDelphi.png"
            width={550}
            height={550}
            alt="imagen delphi"
            className="py-[55px]"
          />
          <Link href="/Delphi">
            <button className="border border-white rounded-lg px-9 py-3 hover:border-naranja hover:text-naranja">
              Conoce Más
            </button>
          </Link>
        </article>
      </section>
      <section className="flex justify-center items-center gap-8 mt-20 sm:mt-0">
        <Link
          href="https://www.facebook.com/PlatinumDrivelineMx/"
          target="_blank"
        >
          <Image
            src="/facebook.png"
            width={25}
            height={25}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </Link>
        <Link href="https://wa.me/4423455370" target="_blank">
          <Image
            src="/whatsapp.png"
            width={25}
            height={25}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </Link>
        <Link href="mailto:seb.flores2002@gmail.com">
          <Image
            src="/icons/emailWhiteNonCircular.png"
            width={25}
            height={25}
            alt="Logo Mel Abogados"
            className="cursor-pointer"
          />
        </Link>
      </section>
    </main>
  );
}
