import Image from "next/image";

function BoletinCardDelphi({ img, title, href }) {
  return (
    <a
      href={`${href}`}
      download
      className="bg-white rounded-xl flex flex-col items-center "
    >
      <section className="">
        <Image
          quality={50}
          src={`/${img}`}
          alt="Kit"
          width={550}
          height={400}
          className="rounded-t-xl object-cover border-b-2 h-[400px]"
        />
      </section>
      <h5 className="p-4 lg:p-6 text-center flex-grow flex flex-col justify-center text-black">
        {title}
      </h5>
    </a>
  );
}

export default BoletinCardDelphi;
