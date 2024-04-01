import Image from "next/image";
import { Children } from "react";

function CardProduct({ image, title, texto }) {
  return (
    <article className="flex flex-col items-center border bg-gray-100 text-center rounded-[20px] w-full sm:w-[45%] md:w-[30%] pb-6">
      <Image
        quality={60}
        src={`/${image}`}
        alt="Kit"
        width={360}
        height={300}
        className="rounded-t-[20px] w-full border-b"
      />
      <h2 className="text-[25px] xl:text-[32px] font-medium pt-6 pb-3">
        {title}
      </h2>
      <ul className="leading-8">
        {texto.map((text) => {
          return <li className="px-4">{text}</li>;
        })}
      </ul>
    </article>
  );
}

export default CardProduct;
