import CardWrapper from "../components/CardWrapper";
import ChartWrapper from "../components/ChartWrapper";
import LatestInvoicesWrapper from "../components/LatestInvoicesWrapper";
import { bebas_Neue } from "../ui/font";

//Hacemos el fetch desde un server components haciendo el llamado a la funcion fetchCardData
const Dashboard = async () => {
  return (
    <main>
      <h1 className={`${bebas_Neue.className} mb-4 text-xl md:text-2xl`}>
        Dahsboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="w-full md:col-span-4">
          <h2 className={`${bebas_Neue.className} mb-4 text-xl md:text-2xl`}>
            Recent Reveneus
          </h2>
          <ChartWrapper />
        </div>
        <div className="w-full md:col-span-4">
          <h2 className={`${bebas_Neue.className} mb-4 text-xl md:text-2xl`}>
            Latest Invoices
          </h2>
          <LatestInvoicesWrapper />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

//? Server Component nos permite hacer peticiones asincronas y peticiones fetch directamente (sin usar useState ni useEffect ni renderizando del lado del cliente) Next los usa por defecto.

//!Server client son los componentes que tienen interaccion con el usuario (dclaramos 'use client' para poder usarlos) Al usar cualquier hooks de react, debemos usar server client
