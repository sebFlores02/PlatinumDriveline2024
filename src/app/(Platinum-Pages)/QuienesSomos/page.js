import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <main className="px-20">
      <h1 className="mt-20">Conoce Sobre Nosotros</h1>

      <section className="flex gap-14 mt-10">
        <section className="basis-2/5">
          {/* <Image
            quality={60}
            src=  "/PlatinumHQ.png"
            alt="Boletin #1"
            width={360}
            height={300}
            className="w-full rounded-sm"
          /> */}
          <video src="/Platinum.mp4" autoPlay loop />
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/imRvb8pWkDQ"
          ></iframe> */}
        </section>

        <section className="basis-3/5 text-justify">
          <p>
            Platinum Driveline, Inc. fue fundado en 2012 por Bob Insalaco,
            anterior Gerente General de AMS Automotive y Art Lottes III, Ex
            Presidente de Carquest Auto Parts. Su amplio conocimiento en la
            industria automotriz, combinado con una profunda experiencia, es
            respaldado por un equipo dedicado de profesionales en el mercado.
          </p>
          <br />
          <p>
            Enero de 2018, Platinum Driveline, Inc. decide establecerse en
            México con el fin de distribuir su gama de productos, que incluye
            Volantes Motrices, Kits de Embrague, Sistemas hidráulicos de
            Embrague y su línea de Embragues para Servicio Pesado. ¿La meta?
            Ofrecer al mercado mexicano una amplia gama de números de parte, de
            primera calidad y con precios competitivos, así como excelencia en
            el servicio al cliente.
          </p>
          <br />
          <p>
            Platinum Driveline, Inc. distribuye una gran variedad de productos a
            través de todo Norte América y son elaborados por los fabricantes
            más renombrados en la Industria Automotriz, los Juegos de Embrague
            son ensamblados en nuestro almacén de San Luis, Missouri en los
            Estados Unidos.{" "}
            <Link href="https://www.platinumdriveline.com" target="_blank">
              <span className="text-[#5397DC]">
                (Haz click para ver la pagina de Estados Unidos)
              </span>
            </Link>
          </p>
          <br />
          <p>
            Además de productos de alta calidad, también nos dedicamos a ofrecer
            un Servicio Personalizado, mientras continuamos desarrollando
            mejoras en nuestras operaciones. Nos esforzamos con el fin de poder
            proveer a nuestros clientes el producto correcto, con el mejor
            precio y en un tiempo oportuno.
          </p>
        </section>
      </section>

      <h1 className="mt-20 mb-10">Mas Sobre Nosotros</h1>
      <section className="flex gap-20 text-justify leading-8">
        <article className="flex flex-col items-center basis-1/3">
          <Image
            quality={60}
            src="/philosophy.png"
            alt="philosophy"
            width={90}
            height={90}
          />
          <h3 className="text-center text-[30px] font-light my-8">Filosofía</h3>
          <p>
            Comprometernos a ofrecer lo mejor de nosotros a través de altos
            principios de ética y respeto con nuestros colaboradores,
            proveedores, clientes y medio ambiente.
          </p>
        </article>
        <div className="border border-naranja h-[150px] mt-20"></div>
        <article className="flex flex-col items-center basis-1/3">
          <Image
            quality={50}
            src="/target.png"
            alt="target"
            width={90}
            height={90}
          />
          <h3 className="text-center text-[30px] font-light my-8">Misión</h3>
          <p>
            Satisfacer las necesidades de nuestros proveedores y clientes
            ofreciendo productos de calidad con precio justo y buen servicio
            para así crear una relación permanente.
          </p>
        </article>
        <div className="border border-naranja h-[150px] mt-20"></div>
        <article className="flex flex-col items-center basis-1/3">
          <Image
            quality={60}
            src="/opportunity.png"
            alt="opportunity"
            width={90}
            height={90}
          />
          <h3 className="text-[30px] font-light my-8">Visión</h3>
          <p>
            Que el comprar nuestros productos sea una experiencia de calidad
            para el cliente y su automóvil. Posicionarnos como una marca líder.
          </p>
        </article>
      </section>
    </main>
  );
}

export default page;
