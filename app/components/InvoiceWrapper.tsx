import React, { FC } from "react";
import { fetchFilteredInvoices } from "../helpers/api";
import { InvoiceTable } from "anjrot-components";
import Image from "next/image";
import { deleteInvoice } from "../helpers/action";

interface InvoiceWrapperProps {
  query?:string;
  page?:number;
}

const InvoiceWrapper: FC<InvoiceWrapperProps> = async ({query, page}) => {
  //Llamado al backend para recibir los datos que llenaran las tablas
  const getInvoices = await fetchFilteredInvoices(query || '', page);
  return (
    <InvoiceTable
      invoices={getInvoices}
      ImgComponent={Image}
      className="bg-slate-700"
      tableHeader={{ className: "text-white" }}
      deleteAction={deleteInvoice}
    />
  );
};

export default InvoiceWrapper;
