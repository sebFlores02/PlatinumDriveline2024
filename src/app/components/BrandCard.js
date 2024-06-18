import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandCard = ({ image, text, brand, link, text_button }) => {
  return (
    <article className="border border-slate-300 rounded-lg shadow flex flex-col flex-grow mb-10 md:mb-20">
      <Image
        width={400}
        height={400}
        alt="marca"
        className="h-[300px] p-4 mx-auto"
        src={image}
      />
      <section className="px-10 py-6 border-t-2 bg-slate-200 flex flex-col flex-grow">
        <p className="text-black text-4xl my-4 flex-grow">{text}</p>
        <p className="font-bold text-azul_delphi">{brand}</p>
        <Link href={`/${link}`}>
          <button className="rounded-lg bg-azul_delphi w-full py-4 mt-8 text-white hover:bg-blue-500">
            {text_button}
          </button>
        </Link>
      </section>
    </article>
  );
};

export default BrandCard;
