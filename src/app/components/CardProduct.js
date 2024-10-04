import Image from "next/image";

function CardProduct({ image, title, texto }) {
  return (
    <article className="flex flex-col justify-start gap-0 shadow border-t text-center rounded-[20px] w-full">
      <div className="relative w-full min-h-[300px]">
        <Image
          quality={60}
          src={`/images/aplicaciones/${image}`}
          alt="Kit"
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-t-[20px] border-b px-3 py-5 w-full h-full object-contain"
        />
      </div>
      <section className="bg-gray-100 w-full h-full rounded-b-[20px] flex-grow flex flex-col">
        <h2 className="text-[25px] xl:text-[32px] font-medium pt-6 pb-3 px-4">
          {title}
        </h2>
        <ul className="leading-8 mb-6 px-4">
          {texto.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default CardProduct;
