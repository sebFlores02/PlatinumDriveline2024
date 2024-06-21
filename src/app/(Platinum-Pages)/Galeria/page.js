import ContactButton from "@/app/components/ContactButton";
import GaleriaVideo from "@/app/components/GaleriaVideo";
import GalleryImage from "@/app/components/GalleryImage";

const GaleriaImagenes = [
  "EquipoStand.jpeg",
  "productos_display.jpeg",
  "mecanicos.jpeg",
  "estandExpo.jpeg",
  "equipoPlatinum.jpeg",
  "EstandPlatinum2.jpeg",
  "EquipoPlatinum2.jpeg",
  "ProductoEstand.jpeg",
  "TestCalidad.jpeg",
];

const GaleriaVideos = [
  "https://www.youtube.com/embed/imRvb8pWkDQ",
  "https://www.youtube.com/embed/ABXHRfTgDOU?si=Kn0lX2jKooj54Pxu",
  "https://www.youtube.com/embed/6i1dhcKdP-U?si=v9tL7_2WPW6m83m8",
  "https://www.youtube.com/embed/SH-GiPDDGrY?si=Jf8r1yQqIbpYJGMw",
  "https://www.youtube.com/embed/85rNBTLvRSI?si=cX3zdOy9v860guL_",
  "https://www.youtube.com/embed/TD-hNRmhbQU?si=g49Oy7DOz6M-nqhI",
];

function page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="py-6 lg:py-12">Videos</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        {GaleriaVideos.map((video) => (
          <GaleriaVideo key={video} link={video} />
        ))}
      </section>

      <h1 className="py-6 lg:py-12">Imágenes</h1>

      <section className="flex flex-wrap justify-evenly mb-5 px-4 gap-2 mx-auto w-full">
        {GaleriaImagenes.map((imagen) => (
          <GalleryImage key={imagen} image={imagen} />
        ))}
      </section>
      <ContactButton />
    </main>
  );
}

export default page;
