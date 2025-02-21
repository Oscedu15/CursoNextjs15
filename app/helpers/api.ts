//En este archivo usaremos para hacer las peticiones a la api

import { auth } from "@/auth";
import { authHeaders } from "./utils";

//?Al hacer una funcion para llamar a la api, la hacemos asincrona.
export const fetchCardData = async () => {
  const session = await auth();
  console.log("Session fetchCarData =>> ", session?.user?.token);
  try {
    //PromiseAll recibe un arreglo de promesas. que en este caso serian las 3 q se encuentran dentro de [].
    const [getCustomerCount, getInvoicesCount, getInvoicesStatusCount] =
      await Promise.all([
        fetch(`${process.env.BACKEND_URL}/customer/count`, {
          headers: authHeaders(session?.user?.token),
        }),
        fetch(`${process.env.BACKEND_URL}/invoices/count`, {
          headers: authHeaders(session?.user?.token),
        }),
        fetch(`${process.env.BACKEND_URL}/invoices/status-count`, {
          headers: authHeaders(session?.user?.token),
        }),
      ]);

    const resultCustomerCount = await getCustomerCount.json();
    const resultInvoicesCount = await getInvoicesCount.json();
    const resultInvoicesStatusCount = await getInvoicesStatusCount.json();

    const numberOfInvoices = Number(resultInvoicesCount ?? "0");
    const numberOfCustomers = Number(resultCustomerCount ?? "0");
    const totalPaidInvoices = resultInvoicesStatusCount.paid ?? "0";
    const totalPendingInvoices = resultInvoicesStatusCount.pending ?? "0";

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch card data.");
  }
};

//!Funcion para hacer la llamda de la api para llenar el grafico
export const fetchRevenue = async () => {
  const session = await auth();
  try {
    const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, {
      headers: authHeaders(session?.user?.token),
    });
    const revenueResult = await fetchRevenue.json();
    //Para relantizar la respuesta y probar el skelleton
    console.log("Fetching Revenue data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Data completed after 3 seconds...");

    return revenueResult;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchRevenue data.");
  }
};

export const fetchLatestInvoices = async () => {
  const session = await auth();
  try {
    const fetchInvoices = await fetch(`${process.env.BACKEND_URL}/invoices`, {
      headers: authHeaders(session?.user?.token),
    });
    const resultFetchInvoices = await fetchInvoices.json();

    return resultFetchInvoices;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchLatestInvoices data.");
  }
};

export const fetchFilteredInvoices = async (
  query?: string,
  currentPage?: number
) => {
  const session = await auth();
  console.log("currentPage :>> ", currentPage);
  try {
    const fetchFilteredInvoices = await fetch(
      `${process.env.BACKEND_URL}/invoices/paginate?q=${query}&page=${currentPage}`,
      { headers: authHeaders(session?.user?.token) }
    );
    console.log("fetchFilteredInvoices :>> ", fetchFilteredInvoices.status);
    const resultfetchFilteredInvoices = await fetchFilteredInvoices.json();

    return resultfetchFilteredInvoices;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch resultfetchFilteredInvoices data.");
  }
};

//Llamada de Api, para obtener el total de paginas de la aplicacion
export const fetchInvoicesPages = async (query: string) => {
  const session = await auth();
  try {
    const getInvoicesPages = await fetch(
      `${process.env.BACKEND_URL}/invoices/page-count?q=${query}`,
      { headers: authHeaders(session?.user?.token) }
    );
    const resultGetInvoicesPages = await getInvoicesPages.json();

    return resultGetInvoicesPages;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch resultGetInvoicesPages data.");
  }
};

export const fetchCustomers = async () => {
  const session = await auth();
  try {
    const getCustomers = await fetch(`${process.env.BACKEND_URL}/customer`, {
      headers: authHeaders(session?.user?.token),
    });
    const resultGetCustomers = await getCustomers.json();

    return resultGetCustomers;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch customers data.");
  }
};

//Hacer llamada para buscar factura por id
export const fetchInvoiceId = async (id: string) => {
  const session = await auth();
  try {
    const getInvoiceId = await fetch(
      `${process.env.BACKEND_URL}/invoice/${id}`,
      { headers: authHeaders(session?.user?.token) }
    );
    console.log("getInvoiceById:>>>", getInvoiceId);
    if (getInvoiceId.status === 404) return null;
    if (getInvoiceId.status !== 200) throw new Error("Error fetching invoice");
    const resultInvoiceId = await getInvoiceId.json();

    return resultInvoiceId;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch resultInvoiceId data.");
  }
};
