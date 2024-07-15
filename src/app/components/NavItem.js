import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavItem = ({ href = "", text, icon, isActive }) => {
  if (text === "Otros Productos") {
    return (
      <li
        className={`gap-3 text-base font-light text-center flex ${
          isActive ? "border-b-2 border-naranja" : ""
        }`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-row gap-4 justify-between items-center">
            {text}
            <Image
              quality={60}
              src="/icons/arrowDown.png"
              alt="dropdown arrow"
              width={24}
              height={24}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/delphi" passHref>
                Delphi
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/pastillas" passHref>
                Pastillas de Freno
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    );
  }

  return (
    <li
      className={`gap-3 text-base font-light text-center ${
        isActive ? "border-b-2 border-naranja" : ""
      }`}
    >
      <Link href={href} passHref className="flex flex-row items-center gap-3">
        {text}
        <Image
          quality={60}
          src={isActive ? `/icons/active-${icon}` : `/icons/${icon}`}
          alt="menu icon"
          width={24}
          height={24}
          className="float-end nav2:hidden ml-3"
        />
      </Link>
    </li>
  );
};

export default NavItem;
