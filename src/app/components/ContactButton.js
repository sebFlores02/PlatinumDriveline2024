import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactButton = () => {
  return (
    <Link href="https://wa.me/4461385347">
      <section className="bg-naranja flex items-center gap-4 rounded-lg w-[300px] p-3 fixed bottom-2 right-2 z-50">
        <Image
          width={40}
          height={40}
          alt="marca"
          src="/icons/whatsappJet.png"
        />
        <h3 className="hover:underline transition-all">
          Acude al Soporte Técnico
        </h3>
      </section>
    </Link>
  );
};

export default ContactButton;
