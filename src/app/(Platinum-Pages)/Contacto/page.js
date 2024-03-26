"use client";

export default function Contacto() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="py-6 lg:py-12">Llene el formulario de Contacto</h1>

      <form className="px-5 w-full lg:w-4/6">
        <fieldset className="flex flex-col ">
          <label className="font-semibold uppercase">Nombre</label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="text"
            placeholder="Tu Nombre"
            id="nombre"
            name="name"
            // required
          />

          <label className="font-semibold uppercase">E-mail</label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="email"
            placeholder="Tu Email"
            id="email"
            name="email"
            // required
          />

          <label className="font-semibold uppercase">Teléfono</label>
          <input
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[10px] mb-[20px]"
            type="tel"
            placeholder="Tu Teléfono"
            id="telefono"
            name="phone"
            // required
          />

          <label className="font-semibold uppercase">Mensaje:</label>
          <textarea
            className="border border-gray-400 p-3 rounded-[10px] outline-none mt-[15px] mb-[25px] h-[180px]"
            id="mensaje"
            name="mensaje"
            placeholder="Ingresa tu mensaje..."
            // required
          ></textarea>
        </fieldset>
        <div>
          <input
            type="submit"
            value="Enviar"
            className="bg-naranja font-medium py-4 px-20 rounded-full text-white"
            onClick={async () => {
              const res = await fetch("api/send", {
                method: "POST",
              });
              const data = await res.json();
              console.log(data);
            }}
          />
        </div>
      </form>
    </main>
  );
}
