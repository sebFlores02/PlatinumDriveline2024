import Image from "next/image";
import CardDownload from "../../components/ContentConsumingCard";

function page() {
  return (
    <main>
      <section className="bg-azul_pastillas p-6 xl:px-40 mb-20 pb-16 pt-10">
        <a href="/">
          <button className="flex border rounded-full px-6 py-2 gap-3">
            <Image
              src="/icons/left-arrow.png"
              width={24}
              height={24}
              alt="Icon regresar"
            />
            <p className="text-white">Regresar</p>
          </button>
        </a>
        <h2 className="font-bold text-white text-5xl mt-12">
          Pastillas de Freno
        </h2>
        <p className="font-bold text-[#dbdddd] mt-5 mb-10">
          PLATINUM DRIVELINE
        </p>

        <article className="flex flex-col md:flex-row bg-white rounded-2xl rounded-t-2xl mt-7">
          <section className="bg-[#e5e2e2] rounded-t-2xl md:rounded-r-none md:rounded-l-2xl basis-2/6 flex flex-col items-center justify-center">
            <Image
              quality={60}
              src="/images/cajas/CajaPastilla.png"
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
      <section className="px-6 lg:px-12 xl:px-40 mb-20">
        <h1>Visita Nuestro Catálogo</h1>
        <section className="mt-28 flex flex-col sm:flex-row justify-center gap-28 sm:gap-4 md:gap-8 lg:gap-6 xl:gap-10">
          <CardDownload
            page={"pastillas"}
            title={"Catálogo Pastillas de Freno"}
            content={
              "Explora el catálogo de pastillas de freno de Platinum Driveline. Conoce nuestra línea de productos desarrollados para garantizar una frenada eficiente y segura."
            }
            type={"download"}
            href={""}
            volantes={true}
          />
        </section>
      </section>
      <section className="bg-azul_pastillas px-5 lg:px-16 xl:px-28">
        <h1 className="text-center py-16 text-white text-[32px] font-medium">
          Mas Información
        </h1>
        <section className="md:flex gap-5 pb-20">
          <article className="bg-white rounded-2xl rounded-t-2xl p-7 w-full lg:w-3/5 mb-8 md:mb-0">
            <h3 className="font-bold text-2xl mb-5">Características:</h3>
            <ul className="list-disc space-y-5 px-4 text-justify">
              <li>
                Fabricadas bajo altos estandares de equipo original. Con
                aprobacion SAE-J661
              </li>
              <li>Frenado eficiente y seguro para su vehiculo.</li>
              <li>Excelente duracion.</li>
              <li>Alta resistencia a la temperatura.</li>
              <li>No genera ruidos ni vibraciones.</li>
              <li>No abrasivas con los discos.</li>
              <li>Calidad competitiva a precios atractivos.</li>
              <li>
                Marcado con lote de fabricacion, coeficiente de friccion y
                numero de parte, para control de calidad.
              </li>
              <li>
                Producto garantizado por parte de Platinum Driveline y su red de
                distribuidores, aplicable a defectos de fabricacion y/o
                materiales. Sujeta a revision tecnica.
              </li>
            </ul>
          </article>
          <article className="bg-white rounded-2xl rounded-t-2xl p-8 w-full lg:w-2/5">
            <h3 className="font-bold text-2xl mb-3">Garantía:</h3>
            <h4 className="font-bold mb-4">
              Garantia de 6 meses o 10,000 km, lo que ocurra primero
            </h4>
            <p className="leading-10 text-justify">
              La garantía de ruido y frenado no tiene vigencia, ya que siempre
              deben hacerlo, hasta los 3mm de espesor mínimo que es cuando ya se
              deben reemplazar las pastillas para que la garantía de desgaste
              proceda, se debe tener un desgaste regular en las 4 pastillas,
              digamos parejo, ya que lo común es que se presente solo en 1
              pastilla (que se quedó pegada) o las de un eje, o desgaste en
              forma de cuña, que esto también no aplica.
            </p>
          </article>
        </section>
      </section>
      <section className="px-6 lg:px-12 xl:px-40">
        <section className="bg-gris_oscuro text-white mt-10 mb-10 lg:mb-20 p-4 md:p-10 text-center rounded-2xl">
          <h3 className="text-3xl py-3 lg:py-5">Nuestros Boletines</h3>
          <section className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-3 lg:mt-6">
            <Image
              quality={60}
              src="/gifs/proximamente.gif"
              alt="Kit"
              width={400}
              height={400}
            />
          </section>
        </section>
      </section>
    </main>
  );
}

export default page;
