import Image from "next/image";

function CardProduct({ image, title, texto }) {
  return (
    <article className="flex flex-col items-center shadow border-t text-center rounded-[20px] w-full">
      <Image
        quality={60}
        src={`/images/aplicaciones/${image}`}
        alt="Kit"
        width={300}
        height={300}
        className="rounded-t-[20px] w-full border-b py-8 px-4 md:min-h-[350px] nav:min-h-[280px] lg:min-h-[330px]"
      />
      <section className="bg-gray-100 w-full h-full rounded-b-[20px]">
        <h2 className="text-[25px] xl:text-[32px] font-medium pt-6 pb-3 px-4">
          {title}
        </h2>
        <ul className="leading-8 mb-6">
          {texto.map((text) => {
            return <li className="px-4">{text}</li>;
          })}
        </ul>
      </section>
    </article>
  );
}

export default CardProduct;
