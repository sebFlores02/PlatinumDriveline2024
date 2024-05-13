import Image from "next/image";
import CardProduct from "../../components/CardProduct";
import Productos from "../../components/Productos";
import CardDownload from "../../components/ContentConsumingCard";
import Carousel from "../../components/Carousel/Carousel";

function page() {
  let quality = 60;

  return (
    <main>
      <Carousel />
      <h1 className="py-6 lg:py-12">Nuevas Integraciones</h1>

      <section className="flex justify-center flex-wrap gap-5 px-8 md:px-5 xl:px-24 2xl:px-60">
        <CardProduct
          image={"images/aplicaciones/TY07.jpg"}
          title={"TY07-275HCE-01"}
          texto={[
            "Toyota Hiace",
            "V6, 3.5 LTS. 24 V",
            "GASOLINA 227 HP 2019-2023",
            "Con CSC",
          ]}
        />
        <CardProduct
          image={"images/aplicaciones/MB00-03.png"}
          title={"MB00-240SPR-03"}
          texto={[
            "MERCEDES BENZ Sprinter",
            "L4. 2.1, 16 VALV.",
            "Con CSC",
            "240 MM | 26D",
          ]}
        />
        <CardProduct
          image={"images/aplicaciones/HON03.png"}
          title={"HON03-200FIT-01"}
          texto={[
            "FIT L4 1.5 LTS. DOHC 130HP. 15-20",
            "CITY 11-19 SOHC 1.5",
            "FIT 09-19 SOHC 1.5",
            "FIT 4 CIL 1.5L 5 VEL 2009",
          ]}
        />
        <CardProduct
          image={"FD105-03.jpeg"}
          title={"HIN04-300414-01"}
          texto={[
            "414 - 614",
            "L4 4.0 Litros",
            "TURBO DIESEL",
            "5 VEL 2009 A 2019",
          ]}
        />
        <CardProduct
          image={"images/aplicaciones/MB04.png"}
          title={"MB04-430OM460-01"}
          texto={[
            "MULTEGO OC 500",
            "OM457 L6 12L 428HP",
            "L6 12.8L 420HP",
            "MBGO21OM",
          ]}
        />
        <CardProduct
          image={"images/aplicaciones/MB05.png"}
          title={"MB05-BUS457-01"}
          texto={[
            "AUTOBUS MB 447-457",
            "OM447",
            "OM457 Transmisión ZF S6105",
            "430 MM, 10D",
          ]}
        />
      </section>

      <section className="px-6 lg:px-10 xl:px-40 bg-gris_oscuro my-20 py-12">
        <h1 className="text-white">Accede a Nuestro Contenido</h1>
        <section className="mt-28 flex flex-col md:flex-row justify-center gap-24 md:gap-8 lg:gap-6 xl:gap-10">
          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"web"}
            href={"https://catalogoplatinumdriveline.com"}
          />
          <CardDownload
            title={"Catálogo Ligero"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"web"}
            href={
              "https://drive.google.com/file/d/1VALiPiPlFG4SzS6s9B8Z4U9d5ZjGhgHf/view?usp=sharing"
            }
          />
        </section>
        <section className="mt-28 flex flex-col md:flex-row justify-center gap-24 sm:gap-4 md:gap-8 lg:gap-6 xl:gap-10">
          <CardDownload
            title={"Catálogo Diesel"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"download"}
            href={""}
          />
          <CardDownload
            title={"Catálogo Volantes"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"download"}
            href={""}
            volantes={true}
          />
        </section>
      </section>

      <Productos />
    </main>
  );
}

export default page;
