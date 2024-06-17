import Image from "next/image";

function page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="py-6 lg:py-12">Videos</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/imRvb8pWkDQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ABXHRfTgDOU?si=Kn0lX2jKooj54Pxu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6i1dhcKdP-U?si=v9tL7_2WPW6m83m8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SH-GiPDDGrY?si=Jf8r1yQqIbpYJGMw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/85rNBTLvRSI?si=cX3zdOy9v860guL_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <iframe
            className="w-full h-[400px] object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TD-hNRmhbQU?si=g49Oy7DOz6M-nqhI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
      </section>

      <h1 className="py-6 lg:py-12">Imágenes</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EquipoStand.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/productos_display.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/mecanicos.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/estandExpo.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/equipoPlatinum.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/testCalidad.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EstandPlatinum2.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EquipoPlatinum2.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/ProductoEstand.jpeg"
            width={700}
            height={500}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>
      </section>
    </main>
  );
}

export default page;
