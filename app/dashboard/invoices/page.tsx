import InvoiceWrapper from "@/app/components/InvoiceWrapper"
import { InvoiceSkeleton } from "@/app/components/Skelleton"
import { bebas_Neue } from "@/app/ui/font"
import { Suspense } from "react"

const Invoices = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${bebas_Neue.className} text-2xl`}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        Search
      </div>
      <Suspense fallback={<InvoiceSkeleton/>}>
        <InvoiceWrapper/>
      </Suspense>
    </div>
  )
}

export default Invoices