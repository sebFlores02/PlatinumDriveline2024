import Image from "next/image";
import CardProduct from "../../components/CardProduct";
import Productos from "../../components/Productos";
import CardDownload from "../../components/ContentConsumingCard";

function page() {
  let quality = 60;

  return (
    <main>
      <h1 className="my-12">Nuevas Integraciones</h1>

      <section className="flex justify-center flex-wrap gap-10 px-24">
        <CardProduct
          image={"FD105-03.jpeg"}
          title={"TY06-250HLX-01"}
          texto={[
            "Ford FIGO",
            "L3. 1.5 L. TIVCT 121 HP. 19-22",
            "3 Cilindros",
            "Sin CSC",
          ]}
        />
        <CardProduct
          image={"FD105-03.jpeg"}
          title={"FD105-03"}
          texto={[
            "Ford FIGO",
            "L3. 1.5 L. TIVCT 121 HP. 19-22",
            "3 Cilindros",
            "Sin CSC",
          ]}
        />
        <CardProduct
          image={"FD105-03.jpeg"}
          title={"FD105-03"}
          texto={[
            "Ford FIGO",
            "L3. 1.5 L. TIVCT 121 HP. 19-22",
            "3 Cilindros",
            "Sin CSC",
          ]}
        />
      </section>

      <section className="px-6 lg:px-10 xl:px-12 bg-gray-200 my-20 py-12">
        <h1>Accede a Nuestro Contenido</h1>
        <section className="mt-28 flex flex-col md:flex-row justify-center gap-18 sm:gap-4 md:gap-8 lg:gap-6 xl:gap-10">
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

          <CardDownload
            title={"Catálogo Electrónico"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            image={"CajaDelphi.png"}
          />
        </section>
      </section>

      <Productos />
    </main>
  );
}

export default page;
