import Logo from "./Logo";
import { FaPowerOff } from "react-icons/fa";
import NavLink from "./NavLink";
import { signOut } from "@/auth";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/dashboard"
        className="mb-2 flex h-20 items-center justify-center p-4 bg-slate-900 rounded-xl md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div
        className="flex grow flex-row justify-between
    space-x-2 md:flex-col md:space-x-0 md:space-y-2"
      >
        <NavLink />
        <div className="hidden h-auto w-full grow md:block"></div>
        <form
          action={async () => {
            "use server";
            //Hacemos un llamado a signOut que borrara las cockies de autenticacion y nos enviara a la pagina principal
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-500 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 w-full"
          >
            <FaPowerOff className="w-6" />
            <p className="hidden md:block">Logout</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
