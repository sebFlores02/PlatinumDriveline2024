import Image from "next/image";

function Productos() {
  let quality = 80;

  return (
    <main>
      <h1>Nuestros Productos</h1>

      <section className="bg-gray-100 flex flex-col items-center text-center mt-6">
        <a href="/Productos/Kit">
          <h2 className="text-[35px] font-medium mt-9">Kits + CSC</h2>
          <p className="text-[#5397DC] font-regular text-lg mt-4 hover:underline">
            Mas información
          </p>
          <section className="flex flex-col md:flex-row gap-12 mb-20 mt-12">
            <Image
              quality={`${quality}`}
              src="/VW03-2.png"
              alt="Boletin #1"
              width={300}
              height={300}
            />
            <Image
              quality={`${quality}`}
              src="/VW03-2.png"
              alt="Boletin #1"
              width={300}
              height={300}
            />
          </section>
        </a>
      </section>

      <h1 className="my-14 p-0">Nuestros Componentes</h1>

      <section className="flex flex-col md:flex-row justify-between gap-6">
        <article className="bg-gray-100 basis-1/2 flex flex-col items-center text-center py-2">
          <a href="/Productos/Plato">
            <h2 className="text-[35px] font-medium mt-9">Plato</h2>
            <p className="text-[#5397DC] font-regular text-lg mt-1 mb-5 hover:underline">
              Mas información
            </p>
            <Image
              quality={`${quality}`}
              src="/NS73-3.png"
              alt="Boletin #1"
              width={360}
              height={300}
              className="mb-12"
            />
          </a>
        </article>

        <article className="bg-gray-100 basis-1/2 flex flex-col items-center text-center py-2">
          <a href="/Productos/Disco">
            <h2 className="text-[35px] font-medium mt-9">Disco</h2>
            <p className="text-[#5397DC] font-regular text-lg mt-1 mb-5 hover:underline">
              Mas información
            </p>
            <Image
              quality={`${quality}`}
              src="/VW03-2.png"
              alt="Kit NS73-3"
              width={360}
              height={300}
              className="mb-12"
            />
          </a>
        </article>
      </section>
    </main>
  );
}

export default Productos;
