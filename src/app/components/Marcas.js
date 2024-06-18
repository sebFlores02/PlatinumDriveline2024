import React from "react";
import BrandCard from "./BrandCard";
import PLATINUMBOX from "../../../public/CajaConCSC.png";
import DELPHIBOX from "../../../public/images/cajaDelphiLogo.png";
import BRAKEPADSBOX from "../../../public/CajaPastilla.png";

const Marcas = () => {
  return (
    <div className="bg-slate-100 px-3 md:px-6 lg:px-10">
      <h1 className="py-6 lg:py-12 text-black">Nuestros Productos</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <BrandCard
          image={BRAKEPADSBOX}
          text={"Pastilla de Freno"}
          brand={"PLATINUM DRIVELINE"}
          link={"Pastillas"}
          text_button={"Visitar"}
        />
        <BrandCard
          image={PLATINUMBOX}
          text={"Componente Embrague"}
          brand={"PLATINUM DRIVELINE"}
          link={"Productos"}
          text_button={"Conoce Más"}
        />
        <BrandCard
          image={DELPHIBOX}
          text={"Suspensión"}
          brand={"DELPHI"}
          link={"Delphi"}
          text_button={"Visitar"}
        />
      </div>
    </div>
  );
};

export default Marcas;
