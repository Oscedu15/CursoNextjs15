//En este archivo usaremos para hacer las peticiones a la api

//!Convertimos en constante todo el objeto de configuracion que usaremos para hacer las peticiones fetch
const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWYwYTJhMmYzNGFjMWVlY2UxN2JiZSIsImVtYWlsIjoib3NjYXJlZ2FyY2lhbGVvbkBob3RtYWlsLmNvbSIsIm5hbWUiOiJvc2NlZHUxNSIsImlhdCI6MTczNDI4MjAxOH0.ozJnIPr9xrFaBctdR7NCN7VFvgcgs2HMSZ2HVkuXyMk",
};

//?Al hacer una funcion para llamar a la api, la hacemos asincrona.
export const fetchCardData = async () => {
  try {
    //PromiseAll recibe un arreglo de promesas. que en este caso serian las 3 q se encuentran dentro de [].
    const [getCustomerCount, getInvoicesCount, getInvoicesStatusCount] =
      await Promise.all([
        fetch(`${process.env.BACKEND_URL}/customer/count`, { headers }),
        fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers }),
        fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers }),
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
  try {
    const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, {
      headers,
    });
    const revenueResult = await fetchRevenue.json();
    //Para relantizar la respuesta y probar el skelleton
    console.log("Fetching Revenue data...");
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("Data completed after 3 seconds...")

    return revenueResult;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchRevenue data.");
  }
};

export const fetchLatestInvoices = async () => {
  try {
    const fetchInvoices = await fetch(`${process.env.BACKEND_URL}/invoices`, {
      headers,
    });
    const resultFetchInvoices = await fetchInvoices.json();

    return resultFetchInvoices;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchLatestInvoices data.");
  }
};


export const fetchFilteredInvoices = async (query?: string, currentPage?: number) => {
  try {
    const fetchFilteredInvoices = await fetch(`${process.env.BACKEND_URL}/invoices/paginate?q=${query}`, {
      headers,
    });
    const resultFetchFilteredInvoices = await fetchFilteredInvoices.json();

    return resultFetchFilteredInvoices;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch resultFetchFilteredInvoices data.");
  }
};