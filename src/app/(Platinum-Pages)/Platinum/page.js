import Image from "next/image";
import CardProduct from "../../components/CardProduct";
import Productos from "../../components/Productos";
import CardDownload from "../../components/ContentConsumingCard";

function page() {
  let quality = 60;

  return (
    <main>
      <h1 className="py-6 lg:py-12">Nuevas Integraciones</h1>

      <section className="flex justify-center flex-wrap gap-5 px-8 md:px-5 xl:px-24 2xl:px-60">
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
            type={"download"}
            href={"/download/Cedula-1.pdf"}
          />
        </section>
        <section className="mt-28 flex flex-col md:flex-row justify-center gap-24 sm:gap-4 md:gap-8 lg:gap-6 xl:gap-10">
          <CardDownload
            title={"Catálogo Diesel"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"download"}
            href={"/download/Cedula-1.pdf"}
          />
          <CardDownload
            title={"Catálogo Volantes"}
            content={
              "With a presence in more than 150 countries, and a global network of over 2,750 service centers, Delphi provides."
            }
            type={"download"}
            href={"/download/Cedula-1.pdf"}
          />
        </section>
      </section>

      <Productos />
    </main>
  );
}

export default page;
