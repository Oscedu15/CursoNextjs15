"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaFileInvoice, FaUser } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const links = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: FaHome,
  },
  {
    id: 2,
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: FaFileInvoice,
  },
  {
    id: 3,
    name: "Customers",
    href: "/dashboard/customers",
    icon: FaUser,
  },
];

const NavLink = () => {
  const pahtname = usePathname();
  //Usepathname nos da el valor de la url donde nos encontremos
  return (
    <>
      {links?.map((x) => {
        const LinIcon = x.icon;
        return (
          //Usando Link, hace que no se recargue la pagina completa, sino solamente el componente necesario para mostrar la nueva pagina
          <Link
            key={x.id}
            href={x.href}
            className={twMerge(
              //?twMerge es una funcion, donde declaramos las clases por defectos y luego la condicionante
              "flex h-[48px] items-center justify-center gap-2 rouned-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none      md:justify-start md:p-2 md:px-3 grow rounded-xl",
              pahtname === x.href && "bg-slate-500"
            )}
          >
            {/* grow hace que mantenga un espacio */}

            <LinIcon className="w-6" />
            <p className="hidden md:block">{x.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLink;
