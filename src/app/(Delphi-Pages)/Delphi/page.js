import Image from "next/image";
import CardDownload from "../../components/ContentConsumingCard";
import BoletinCard from "../../components/BoletinCardDelphi";

function page() {
  return (
    <main>
      <section className="bg-azul_delphi p-20 mb-20">
        <Image
          quality={60}
          src="/Delphi_logo.png"
          alt="Kit"
          width={200}
          height={200}
        />
        <article className="bg-white rounded-2xl mt-10 flex">
          <section className="bg-[#bcbcbc] rounded-l-2xl basis-2/6 flex flex-col items-center justify-center">
            <Image
              quality={60}
              src="/CajaDelphi.png"
              alt="Kit"
              width={400}
              height={400}
            />
          </section>
          <p className="basis-4/6 text-justify px-20 py-16 leading-10 flex flex-col items-center justify-center">
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
      <section className="px-60">
        <h1>Accede a Nuestro Contenido</h1>
        <section className="mt-28 flex justify-center gap-20">
          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
          />
          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
          />
        </section>
        <section className="bg-[#c4c4c4] mt-10 mb-40 p-10 text-center rounded-2xl">
          <h3 className="font-medium text-2xl py-6">Nuestros Boletines</h3>
          <section className="flex justify-center gap-8 mt-6">
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
