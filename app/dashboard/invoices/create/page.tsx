import FormWrapper from "@/app/components/FormWrapper";
import { fetchCustomers } from "@/app/helpers/api";
import { bebas_Neue } from "@/app/ui/font";
import { Breadcrumbs} from "anjrot-components";

const breadCrumbs = [
  { label: "Invoices", href: "/dashboard/invoices" },
  {
    label: "Create Invoices",
    href: "/dashboard/invoices/create",
    active: true,
  },
];

const CreateInvoices = async () => {
  //Aqui recibimos la data desde el backend
  const getCustomers = await fetchCustomers();
  console.log("getCustomers", getCustomers);

  return (
    <main>
      <Breadcrumbs
        breadcrumb={breadCrumbs}
        className={`${bebas_Neue.className}`}
      />
      <FormWrapper customers={getCustomers}/>
    </main>
  );
};

export default CreateInvoices;
