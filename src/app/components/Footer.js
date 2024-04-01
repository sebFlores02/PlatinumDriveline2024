import Image from "next/image";

function Footer() {
  return (
    <main className="bg-gris_oscuro flex flex-col nav:flex-row justify-between items-center py-7 px-5 lg:px-16 mt-10">
      <div className="footer__logo basis-1/3">
        <Image
          quality={100}
          src="/LOGOPlatinum.png"
          alt="NS73-3"
          width={200}
          height={200}
          className=""
        />
      </div>

      <section className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-20 basis-1/3 text-center text-gris_ligero">
        <article className="footer__correoIndividual text-sm">
          <h5 className="text-[19px] text-[#d3d3d3] mb-5">Contacto</h5>
          <h6>ventas@platinumdriveline.mx</h6>
          <h6 className="mt-2">
            (442) 674 35<span className="text-naranja">53</span>/
            <span className="text-naranja">55</span>
          </h6>
        </article>
        <article className="footer__correoIndividual text-sm">
          <h5 className="text-[19px] text-[#d3d3d3] mb-5">Soporte</h5>
          <h6>soporte@platinumdriveline.mx</h6>
        </article>
      </section>

      <h6 className="basis-1/3 text-gris_ligero text-center md:text-end text-sm mt-8 nav:mt-0 md:px-10 xl:px-0">
        @ 2024 Platinum Driveline All rights reserved
      </h6>
    </main>
  );
}

export default Footer;
