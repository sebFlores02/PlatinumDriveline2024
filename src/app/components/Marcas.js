import Image from "next/image";
import Link from "next/link";
import React from "react";
import PLATINUMBOX from "../../../public/CajaConCSC.png";
import DELPHIBOX from "../../../public/images/cajaDelphiLogo.png";
import BRAKEPADSBOX from "../../../public/CajaPastilla.png";

const Marcas = () => {
  return (
    <div className="bg-slate-100 px-10">
      <h1 className="py-6 lg:py-12 text-black">Nuestros Productos</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto items-center place-items-center">
        <article className="mb-20 border rounded-lg shadow">
          <Image
            width={400}
            height={400}
            alt="marca"
            className="min-h-[300px] p-4"
            src={DELPHIBOX}
          />
          <section className="px-10 py-6 border-t-2 bg-slate-200">
            <p className="text-black text-4xl my-4">Suspensión</p>
            <p className="font-bold text-azul_delphi">DELPHI</p>
            <Link href="/Delphi">
              <button className="rounded-lg bg-azul_delphi w-full py-4 mt-8 text-white hover:bg-blue-500">
                Visitar
              </button>
            </Link>
          </section>
        </article>
        <article className="mb-20 border rounded-lg shadow h-cover">
          <Image
            width={400}
            height={400}
            alt="marca"
            className="min-h-[300px] p-4"
            src={PLATINUMBOX}
          />
          <section className="px-10 py-6 border-t-2 bg-slate-200">
            <p className="text-black text-4xl my-4">Partes de Embrague</p>
            <p className="font-bold text-naranja">PLATINUM DRIVELINE</p>
            <Link href="/Productos">
              <button className="rounded-lg bg-naranja w-full py-4 mt-8 text-white hover:bg-orange-400">
                Conoce Más
              </button>
            </Link>
          </section>
        </article>
        <article className="mb-20 border rounded-lg shadow">
          <Image
            width={400}
            height={400}
            alt="marca"
            className="min-h-[300px] p-4"
            src={BRAKEPADSBOX}
          />
          <section className="px-10 py-6 border-t-2 bg-slate-200">
            <p className="text-black text-4xl my-4">Pastilla de Freno</p>
            <p className="font-bold text-naranja">PLATINUM DRIVELINE</p>
            <Link href="/Pastillas">
              <button className="rounded-lg bg-azul_delphi w-full py-4 mt-8 text-white hover:bg-blue-500">
                Visitar
              </button>
            </Link>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Marcas;
