import Image from "next/image";
import Boletin from "../../components/BoletinCardPlatinum";

function page() {
  let quality = 10;

  return (
    <main className="px-5 xl:px-40">
      <h1 className="py-6 lg:py-12">Nuestros Boletines</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        <Boletin
          img={"BoletinVersa.jpeg"}
          title={"Boletín 1"}
          description={"Boletín técnico aplicación Nissan Versa"}
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"Instalacion.jpeg"}
          title={"Boletín 2"}
          description={"Guia de instalación"}
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"Garantia.jpeg"}
          title={"Boletín 3"}
          description={"Garantía"}
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"FallaSoluciones1.jpeg"}
          title={"Boletín 4"}
          description={
            "Parte 1 Procedimiento para revision de fallas y soluciones del embrague"
          }
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"Fallas2.jpeg"}
          title={"Boletín 5"}
          description={
            "Parte 2 Procedimiento para revision de fallas y soluciones del embrague"
          }
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"BoletinA1A2A3.jpeg"}
          title={"Boletín 6"}
          description={
            "Boletin tecnico aplicaciones vehiculos VW linea A1, A2, A3"
          }
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"BoletinNissan.jpeg"}
          title={"Boletín 7"}
          description={
            " Boletín de aplicaciones para vehiculos Nissan 2.5 LTS gasolina y diesel"
          }
          href={"/download/Cedula-1.pdf"}
        />
        <Boletin
          img={"Fallas2.jpeg"}
          title={"Boletín 8"}
          description={"Especificaciones para rectificado de volantes"}
          href={"/download/Cedula-1.pdf"}
        />
      </section>
    </main>
  );
}

export default page;
