import React from "react";
import BrandCard from "./BrandCard";
import PLATINUMBOX from "../../../public/CajaConCSC.png";
import DELPHIBOX from "../../../public/images/cajaDelphiLogo.png";
import BRAKEPADSBOX from "../../../public/CajaPastilla.png";

const Marcas = () => {
  return (
    <div className="bg-gris_oscuro px-3 md:px-6 lg:px-10 xl:px-20">
      <h1 className="py-6 lg:py-12 text-white">Nuestros Productos</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-10">
        <BrandCard
          image={BRAKEPADSBOX}
          text={"Pastilla de Freno"}
          brand={"PLATINUM DRIVELINE"}
          link={"pastillas"}
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
          link={"delphi"}
          text_button={"Visitar"}
        />
      </div>
    </div>
  );
};

export default Marcas;
