import Image from "next/image";

function page() {
  return (
    <main className="flex flex-col items-center">
      <h1>Videos</h1>

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
            src="https://www.youtube.com/embed/imRvb8pWkDQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </article>
      </section>

      <h1 className="text-[50px] mt-[80px] mb-[50px]">Imágenes</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EquipoStand.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>
        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/productos_display.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/mecanicos.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/estandExpo.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/equipoPlatinum.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/testCalidad.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EstandPlatinum2.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/EquipoPlatinum2.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>

        <article className="w-full sm:w-[48%] lg:w-[31%] mt-3">
          <Image
            src="/ProductoEstand.jpeg"
            width={200}
            height={200}
            alt="Logo Mel Abogados"
            className="w-full h-[500px] object-cover"
          />
        </article>
      </section>
    </main>
  );
}

export default page;
