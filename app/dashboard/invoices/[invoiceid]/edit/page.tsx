import EditWrapper from "@/app/components/EditWrapper";
import { fetchCustomers, fetchInvoiceId } from "@/app/helpers/api";
import { bebas_Neue } from "@/app/ui/font";
import { Breadcrumbs } from "anjrot-components";
import React, { FC } from "react";


//Declaramos la interface de typeScript que usaremos al recibir los props
interface EditInvoiceProps {
    params: Promise<{invoiceid: string}>;
}

//Los server components traen props
//De los que trae, trabajaremos con la propiedad params, donde se encuentra invoicedid
const EditInvoice: FC<EditInvoiceProps> = async ({params}) => {
    
    const path = await params;
    console.log("Props", path.invoiceid);
    const id = path.invoiceid;

  const breadCrumbs = [
    { label: "Invoices", href: "/dashboard/invoices" },
    {
      label: "Create Invoice",
      href: `/dashboard/invoices/${id}/edit`,
      active: true,
    },
  ];

  //Hacemos dos llamados a la api, uno para recibir el formulario y el otro para conseguir la informacion de la factura a editar, enviandole por parametros el id recibido por los params
  const [getCustomers, invoice] = await Promise.all([fetchCustomers(), fetchInvoiceId(id)])

  return (
    <main>
          <Breadcrumbs breadcrumb={breadCrumbs} className={bebas_Neue.className} />
          <EditWrapper customers={getCustomers} invoice={invoice}/>
    </main>
  );
};

export default EditInvoice;
