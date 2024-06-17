"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Contacto() {
  const [state, setState] = useState();
  const [alert, setAlert] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  async function handleOnSubmit(e) {
    e.preventDefault();

    setState("loading");

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setState("ready");

    setFormData({
      firstName: "",
      email: "",
      telefono: "",
      mensaje: "",
    });

    setAlert(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="py-6 lg:py-12">Llene el formulario de Contacto</h1>
      <section className="md:flex w-full justify-between gap-4 px-5 md:px-10">
        <section className="lg:w-1/3 bg-slate-100 border rounded-xl p-8 mb-10 md:mb-32">
          <h2 className="font-bold text-2xl md:text-3xl">
            Información de Contacto
          </h2>
          <p className="my-5 font-semibold text-lg">Soporte Técnico:</p>
          <div className="flex items-center space-x-3">
            <Image
              quality={60}
              src="/icons/whatsappJet.png"
              alt="Kit"
              width={30}
              height={30}
            />
            <p className="font-medium text-lg">442-231-4471</p>
          </div>
          <Separator className="border border-slate-200 mt-5" />
          <p className="my-5 font-semibold text-lg">Ventas:</p>
          <div className="flex items-center space-x-3">
            <Image
              quality={60}
              src="/icons/whatsappJet.png"
              alt="Kit"
              width={30}
              height={30}
            />
            <p className="font-medium text-lg">442-231-4471</p>
          </div>
          <Separator className="border border-slate-200 mt-5" />
          <p className="my-5 font-semibold text-lg">Correo Electrónico:</p>
          <div className="flex items-center space-x-3">
            <Image
              quality={60}
              src="/icons/email.png"
              alt="Kit"
              width={30}
              height={30}
            />
            <p className="font-medium text-lg">sefasf2015@gmail.com</p>
          </div>
          <Separator className="border border-slate-200 mt-5" />
          <p className="my-5 font-semibold text-lg">Ubicación:</p>
          <div className="flex items-center space-x-3">
            <Image
              quality={60}
              src="/icons/location.png"
              alt="Kit"
              width={30}
              height={30}
            />
            <p className="font-medium text-lg">Santiago de Querétaro</p>
          </div>
        </section>
        <form className="px-5 w-full lg:w-4/6 pb-12" onSubmit={handleOnSubmit}>
          {alert && (
            <section className="bg-[#E7FFEC] border border-[#ACD2BC] text-[#06842E] py-4 rounded-2xl px-10 mb-8 flex flex-col sm:flex-row gap-3 md:gap-6 items-center text-center">
              <Image
                src="/icons/correct.png"
                width={24}
                height={24}
                alt="Icon regresar"
              />
              <p>
                <span className="font-bold">Exito!</span> Tu mensaje ha sido
                enviado exitosamente.
              </p>
            </section>
          )}
          <fieldset className="flex flex-col ">
            <label htmlFor="firstName" className="font-semibold uppercase">
              Nombre
            </label>
            <input
              className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
              type="text"
              placeholder="Tu Nombre"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email" className="font-semibold uppercase">
              E-mail
            </label>
            <input
              className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
              type="email"
              placeholder="Tu Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="telefono" className="font-semibold uppercase">
              Teléfono
            </label>
            <input
              className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
              type="tel"
              placeholder="Tu Teléfono"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="mensaje" className="font-semibold uppercase">
              Mensaje:
            </label>
            <textarea
              className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[15px] mb-[25px] h-[210px]"
              id="mensaje"
              name="mensaje"
              placeholder="Ingresa tu mensaje..."
              value={formData.mensaje}
              onChange={handleInputChange}
              required
            ></textarea>
          </fieldset>
          <div>
            <input
              type="submit"
              value="Enviar"
              className="bg-naranja font-medium py-4 px-20 rounded-full text-white"
              disabled={state === "loading"}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
