import Image from "next/image";

function BoletinCardDelphi({ img, title, description }) {
  return (
    <main className="rounded-xl border border-black w-full sm:w-[48%] lg:w-[31%] lg:min-h-[600px] mb-8">
      <Image
        quality={60}
        src={`/${img}`}
        alt="Kit"
        width={200}
        height={200}
        className="border-b border-black w-full rounded-t-xl"
      />
      <section className="px-5 py-4">
        <h5 className="font-medium text-[24px]">{title}</h5>
        <p className="mt-4 mb-4 leading-7">{description}</p>
      </section>
    </main>
  );
}

export default BoletinCardDelphi;
