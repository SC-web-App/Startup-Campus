import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#f4f7fa] flex flex-col justify-center items-center md:py-[50px] py-8 md:px-[100px] px-6 gap-6">
      <div>
        <Image
          src="/Footer-img/Logo.svg"
          alt="Nile Startup Campus Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <nav className="flex gap-12">
        {["About", "Become a lead", "Contact", "Startups"].map((text) => (
          <button
            key={text}
            className="text-[#283646] text-base font-normal font-['DM Sans'] leading-normal"
          >
            {text}
          </button>
        ))}
      </nav>

      <div className="flex gap-5">
        {[
          { href: "#", src: "/Footer-img/facebook.svg", alt: "Facebook" },
          { href: "#", src: "/Footer-img/instagram.svg", alt: "Instagram" },
          { href: "#", src: "/Footer-img/x.svg", alt: "X (formerly Twitter)" },
          { href: "#", src: "/Footer-img/whatsapp.svg", alt: "WhatsApp" },
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={src} alt={alt} width={26} height={26} priority />
          </a>
        ))}
      </div>

      <hr className="w-full border-t border-gray-400 mt-6" />
      <p className="text-sm text-gray-600">
        &copy; Nile Startup Campus {new Date().getFullYear()}
      </p>
    </footer>
  );
};
