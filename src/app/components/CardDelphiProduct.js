import Image from "next/image";

const CardDelphiProduct = ({ image, title }) => {
  return (
    <main className="bg-white rounded-2xl w-full sm:w-[48%] md:w-[31%] flex flex-col items-center flex-growth">
      <section className="bg-[#F4F4F4] m-4 mb-0 rounded-2xl">
        <Image
          quality={60}
          src={`/images/${image}.png`}
          alt="Kit"
          width={500}
          height={240}
          className="rounded-2xl p-4"
        />
      </section>
      <p className="text-center font-medium py-7 my-auto px-4 lg:px-8 text-lg lg:text-2xl">
        {title}
      </p>
    </main>
  );
};

export default CardDelphiProduct;
