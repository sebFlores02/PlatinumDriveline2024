import ContactButton from "@/app/components/ContactButton";
import Boletin from "../../components/BoletinCardPlatinum";

const boletines = [
  {
    image: "BoletinVersa.jpeg",
    title: "Boletín 1",
    description: "Boletín técnico aplicación Nissan Versa",
  },
  {
    image: "Instalacion.jpeg",
    title: "Boletín 2",
    description: "Guia de instalación",
  },
  {
    image: "garantiaPlatinum.jpg",
    title: "Boletín 3",
    description: "Garantía",
  },
  {
    image: "FallaSoluciones1.jpeg",
    title: "Boletín 4",
    description:
      "Parte 1 Procedimiento para revision de fallas y soluciones del embrague",
  },
  {
    image: "Fallas2.jpeg",
    title: "Boletín 5",
    description:
      "Parte 2 Procedimiento para revision de fallas y soluciones del embrague",
  },
  {
    image: "BoletinA1A2A3.jpeg",
    title: "Boletín 6",
    description: "Boletin tecnico aplicaciones vehiculos VW linea A1, A2, A3",
  },
  {
    image: "BoletinNissan.jpeg",
    title: "Boletín 7",
    description:
      "Boletín de aplicaciones para vehiculos Nissan 2.5 LTS gasolina y diesel",
  },
  {
    image: "Fallas2.jpeg",
    title: "Boletín 8",
    description: "Especificaciones para rectificado de volantes",
  },
];

function page() {
  return (
    <main className="px-5 xl:px-40">
      <h1 className="py-6 lg:py-12">Nuestros Boletines</h1>
      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        {boletines.map((boletin) => (
          <Boletin
            key={boletin.title}
            img={boletin.image}
            title={boletin.title}
            description={boletin.description}
          />
        ))}
      </section>
      <ContactButton />
    </main>
  );
}

export default page;
