import Image from "next/image";
import { Children } from "react";

function CardProduct({ image, title, texto }) {
  return (
    <article className="flex flex-col items-center bg-gray-200 text-center rounded-[20px] w-[360px] pb-6">
      <Image
        quality={60}
        src={`/${image}`}
        alt="Kit"
        width={360}
        height={300}
        className="rounded-t-[20px] w-full"
      />
      <h2 className="text-[32px] pt-6 pb-4">{title}</h2>
      <ul className="leading-8">
        {texto.map((text) => {
          return <li>{text}</li>;
        })}
      </ul>
    </article>
  );
}

export default CardProduct;
