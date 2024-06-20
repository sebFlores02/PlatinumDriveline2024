import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1>La página no se ha encontrado</h1>
      <video width={600} src="/notFound.mp4" autoPlay loop />
      <Link
        className="bg-naranja rounded-lg px-6 py-4 font-medium text-lg"
        href="/"
      >
        Regresar a Inicio
      </Link>
    </div>
  );
}
