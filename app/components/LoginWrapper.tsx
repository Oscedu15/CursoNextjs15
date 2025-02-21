"use client";

import { authenticate } from "@/app/helpers/action";
import { LoginForm } from "anjrot-components";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

const LoginWrapper = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  //callbackUrl es la direccion donde se dirigira al loguiarse el usuario
  return <LoginForm action={formAction} error={errorMessage} callbackurl={callbackUrl} />;
};

export default LoginWrapper;