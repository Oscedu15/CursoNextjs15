import React from "react";
import { fetchFilteredInvoices } from "../helpers/api";
import { InvoiceTable } from "anjrot-components";
import Image from "next/image";

const InvoiceWrapper = async () => {
  //Llamado al backend para recibir los datos que llenaran las tablas
  const getInvoices = await fetchFilteredInvoices();
  return (
    <InvoiceTable
      invoices={getInvoices}
      ImgComponent={Image}
      className="bg-slate-700"
      tableHeader={{ className: "text-white" }}
    />
  );
};

export default InvoiceWrapper;
