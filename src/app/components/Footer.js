import Image from "next/image";

function Footer() {
  return (
    <main className="bg-gris_oscuro flex justify-between items-center py-7 px-16 mt-10">
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

      <section className="flex justify-center gap-20 basis-1/3 text-center text-gris_ligero">
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

      <h6 className="basis-1/3 text-gris_ligero text-end text-sm">
        @ 2021 Platinum Driveline All rights reserved
      </h6>
    </main>
  );
}

export default Footer;
