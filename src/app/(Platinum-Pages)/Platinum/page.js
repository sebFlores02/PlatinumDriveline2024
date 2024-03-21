import Image from "next/image";
import CardProduct from "../../components/CardProduct";
import Productos from "../../components/Productos";

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

      <section className="bg-gray-100 my-14  text-center py-20">
        <a href="https://catalogoplatinumdriveline.com/" target="_blank">
          <div className="hero-text text-[32px]">
            <p>
              Visita Nuestro
              <span className="text-naranja font-medium ml-2">
                Catálogo en Línea
              </span>
            </p>
            <Image
              quality={60}
              src="/Dispositivos.png"
              alt="Kit"
              width={460}
              height={400}
              className="mx-auto mt-4"
            />
          </div>
        </a>
      </section>

      <Productos />
    </main>
  );
}

export default page;
