import Image from "next/image";

function BoletinCardDelphi({ img, title }) {
  return (
    <main className="bg-[#e7e7e7] rounded-xl">
      <Image
        quality={60}
        src={`/${img}`}
        alt="Kit"
        width={200}
        height={200}
        className="w-full rounded-t-xl"
      />
      <h5 className="p-4 lg:p-8">{title}</h5>
    </main>
  );
}

export default BoletinCardDelphi;
