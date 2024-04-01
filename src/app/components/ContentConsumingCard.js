import Image from "next/image";

function ContentConsumingCard({ title, content, type, href, page, volantes }) {
  const linkProps = {};
  if (type === "web") {
    linkProps.target = "_blank";
  } else {
    linkProps.download = true;
  }

  return (
    <main className="bg-[#F4F4F4] text-center w-full rounded-2xl">
      {!volantes ? (
        <a href={href} {...linkProps}>
          <section
            className={
              page === "delphi"
                ? `bg-azul_delphi rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]`
                : `bg-naranja rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]`
            }
          >
            <Image
              quality={60}
              src={
                type === "web" ? "/icons/webWhite.png" : "/icons/downloads.png"
              }
              alt="accion"
              width={50}
              height={50}
            />
          </section>
          <h3 className="font-medium text-2xl py-6 px-6 2xl:px-32">{title}</h3>
          <p className="leading-9 text-[#4C4C4C] pb-10 px-6 2xl:px-32">
            {content}
          </p>
        </a>
      ) : (
        <>
          <section
            className={
              page === "delphi"
                ? `bg-azul_delphi rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]`
                : `bg-naranja rounded-2xl w-[145px] h-[116px] flex flex-col items-center justify-center mx-auto mt-[-70px]`
            }
          >
            <Image
              quality={60}
              src={
                type === "web" ? "/icons/webWhite.png" : "/icons/downloads.png"
              }
              alt="accion"
              width={50}
              height={50}
            />
          </section>
          <h3 className="font-medium text-2xl py-6 px-6 2xl:px-32">{title}</h3>
          <p className="leading-9 text-[#4C4C4C] pb-10 px-6 2xl:px-32">
            {content}
          </p>
          {volantes && (
            <section className="bg-naranja rounded-b-2xl text-white uppercase py-2 font-bold">
              <p>Proximamente</p>
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default ContentConsumingCard;
