"use client";

import { useState } from "react";

export default function Contacto() {
  const [state, setState] = useState();
  const [alert, setAlert] = useState(true);
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
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const alertLogic = () => {};

  return (
    <main className="flex flex-col items-center">
      <h1 className="py-6 lg:py-12">Llene el formulario de Contacto</h1>
      <form className="px-5 w-full lg:w-4/6" onSubmit={handleOnSubmit}>
        {alert && (
          <section className="bg-green-300 py-4 rounded-2xl px-10">
            Gracias por llenar el formulario
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
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[15px] mb-[25px] h-[180px]"
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
    </main>
  );
}
