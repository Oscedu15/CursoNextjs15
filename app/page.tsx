import { BsArrowRight } from "react-icons/bs";
import Header from "./components/Header";
import { bebas_Neue } from "./ui/font";

export default function Home() {
  return (
    //   <>
    //    <h1 className={`text-center p-10
    //   bg-yellow-100 text-2xl ${bebas_Neue.className}`}>
    //     {/* Usamos una funte de especial de letra, para el titulo */}
    //   Comenzando la app
    //  </h1>
    //  <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius alias dolorem reprehenderit totam mollitia provident molestiae, quos corporis quidem?</p>
    //   </>
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5">
           {/* Lado izquierdo de la pantalla */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${bebas_Neue.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to AnjrotDev</strong> Tutorial Next Js
          </p>
          <a
            href="#"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>loging</span>{" "}
            <BsArrowRight className="translate-x-0 hover:translate-x-3 duration-150" />
          </a>
        </div>
        {/* Lado derecho de la pantalla */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
         {/* Version Desktop */}
          <img
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard"
            width={1000}
            height={700}
            className="hidden md:block"
          />
          {/* Version Mobile */}
          <img
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard mobile"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
