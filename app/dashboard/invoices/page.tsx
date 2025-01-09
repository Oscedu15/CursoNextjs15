import InvoiceWrapper from "@/app/components/InvoiceWrapper"
import Search from "@/app/components/Search"
import { InvoiceSkeleton } from "@/app/components/Skelleton"
import { bebas_Neue } from "@/app/ui/font"
import { FC, Suspense } from "react"

interface InvoicesProps {
  searchParams?: Promise<{query?:string}>
}

//?Tecnica USRLsearchParams
const Invoices: FC<InvoicesProps> = async ({searchParams}) => {
  const params = await searchParams;
  console.log(`params1: >>`, params);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${bebas_Neue.className} text-2xl`}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search/>
      </div>
      <Suspense fallback={<InvoiceSkeleton/>}>
        <InvoiceWrapper query={params?.query}/>
      </Suspense>
    </div>
  )
}

export default Invoices