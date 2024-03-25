import Image from "next/image";

function ContentConsumingCard({ title, content, image }) {
  return (
    <main className="bg-[#c4c4c4] text-center w-full rounded-2xl px-6 2xl:px-32 pb-12">
      <section className="bg-[#e7e7e7] rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]">
        <Image
          quality={60}
          src={`/${image}`}
          alt="Kit"
          width={200}
          height={200}
        />
      </section>
      <h3 className="font-medium text-2xl py-6">{title}</h3>
      <p className="leading-9 text-[#656565]">{content}</p>
    </main>
  );
}

export default ContentConsumingCard;
