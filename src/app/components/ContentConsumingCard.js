import Image from "next/image";

function ContentConsumingCard({ title, content, type, href }) {
  const linkProps = {};
  if (type === "web") {
    linkProps.target = "_blank";
  } else {
    linkProps.download = true;
  }

  return (
    <main className="bg-[#d1c9c9] text-center w-full rounded-2xl px-6 2xl:px-32 pb-12">
      <a href={href} {...linkProps}>
        <section className="bg-[#e7e7e7] rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]">
          <Image
            quality={60}
            src={type === "web" ? "/icons/domain.png" : "/icons/download.png"}
            alt="accion"
            width={80}
            height={80}
          />
        </section>
        <h3 className="font-medium text-2xl py-6">{title}</h3>
        <p className="leading-9 text-[#656565]">{content}</p>
      </a>
    </main>
  );
}

export default ContentConsumingCard;
