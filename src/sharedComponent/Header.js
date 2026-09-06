import Logo from "./../../public/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-start px-4 sm:h-16 sm:px-6 md:h-[72px] md:px-8">
        <a href="/" aria-label="HarGharSolar home">
          <Image
            src={Logo}
            alt="HarGharSolar logo"
            width={283}
            height={100}
            className="h-auto w-[150px] sm:w-[180px] md:w-[214px]"
            priority
          />
        </a>
      </div>
    </header>
  );
}
