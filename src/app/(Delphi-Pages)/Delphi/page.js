import Image from "next/image";
import CardDownload from "../../components/ContentConsumingCard";
import BoletinCard from "../../components/BoletinCardDelphi";

function page() {
  return (
    <main>
      <section className="bg-azul_delphi p-6 xl:px-40 mb-20 pb-16">
        <a href="/">
          <button className="flex border rounded-full px-6 py-2 gap-3 mb-7">
            <Image
              src="/icons/left-arrow.png"
              width={24}
              height={24}
              alt="Icon regresar"
            />
            <p className="text-white">Regresar</p>
          </button>
        </a>
        <Image
          quality={60}
          src="/Delphi_logo.png"
          alt="Kit"
          width={200}
          height={200}
        />
        <article className="flex flex-col md:flex-row bg-white rounded-2xl rounded-t-2xl mt-7">
          <section className="bg-[#bcbcbc] rounded-t-2xl md:rounded-r-none md:rounded-l-2xl basis-2/6 flex flex-col items-center justify-center">
            <Image
              quality={60}
              src="/CajaDelphi.png"
              alt="Kit"
              width={400}
              height={400}
            />
          </section>
          <p className="basis-4/6 text-justify p-8 lg:p-16 leading-10 flex flex-col items-center justify-center">
            With a presence in more than 150 countries, and a global network of
            over 2,750 service centers, Delphi provides OE specification
            end-to-end solutions. With a wide-ranging portfolio including
            gasoline fuel systems, diesel fuel systems, maintenance solutions,
            engine management and vehicle electronics, backed by OE-level
            diagnostic and test equipment, training and technical information,
            Delphi enables garages to service and repair vehicles right the
            first time.
          </p>
        </article>
      </section>
      <section className="px-6 lg:px-12 xl:px-40">
        <h1>Accede a Nuestro Contenido</h1>
        <section className="mt-28 flex flex-col sm:flex-row justify-center gap-28 sm:gap-4 md:gap-8 lg:gap-6 xl:gap-10">
          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            image={"CajaDelphi.png"}
          />
          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            image={"CajaDelphi.png"}
          />
        </section>
        <section className="bg-[#c4c4c4] mt-10 mb-40 p-4 md:p-10 text-center rounded-2xl">
          <h3 className="font-medium text-2xl py-3 lg:py-6">
            Nuestros Boletines
          </h3>
          <section className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-3 lg:mt-6">
            <BoletinCard
              img={"BoletinVersa.jpeg"}
              title={"Boletín técnico aplicación Nissan Versa"}
            />
            <BoletinCard
              img={"BoletinVersa.jpeg"}
              title={"Boletín técnico aplicación Nissan Versa"}
            />
            <BoletinCard
              img={"BoletinVersa.jpeg"}
              title={"Boletín técnico aplicación Nissan Versa"}
            />
          </section>
        </section>
      </section>
    </main>
  );
}

export default page;
