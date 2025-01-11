'use client';

import { CreateForm, CreateFormState, CustomerField, InvoiceForm } from "anjrot-components";
import Link from "next/link";
import {FC} from "react";

const EditWrapper: FC<{customers: CustomerField[]; invoice: InvoiceForm}> = ({customers, invoice}) => {
    const initialState: CreateFormState = {message: null, errors: {}};
    // const [state, formAction] = useActionState(createInvoice, initialState)
  return (
    <CreateForm customers={customers}  state={initialState} 
    AnchorElement={Link} invoice={invoice}/>
  )
}

export default EditWrapper