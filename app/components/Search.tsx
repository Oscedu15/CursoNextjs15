"use client";
import { SearchInput } from "anjrot-components";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const pathname = usePathname();
  //Con usePathname obtenemos la url donde nos encontramos
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  //Con replace, cambiaremos lo que tenemos en el url, con los parametros que le enviemos

  const handleOnChange = useDebouncedCallback((value: string) => {
    //?useDebouncedCallback es una herramienta que nos permite limitar en una cantidad de tiempo, las llamadas a un api
    //Funcion que usaremos para capturar lo escrito en el input y cada vez que haya un cambio
    //console.log("Value :>>", value);
    //!Aqui obtenemos el valor de lo que se encuentra en el input
    const params = new URLSearchParams(searchParams);
    //Le pasamos al metodo de JavaScript URLSearchParams, el useSearchParams
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    //TODO: Si tenemos un valor , remplazamos la url con replace, enviadnole como parametros la url original + ? + el params que almacena lo ingresado en el input por el usuario.
  },1000)
  //1000 = a un segundo, que es el limite en tiempo para hacer llamadas a la api;

  return <SearchInput placeholder="Search" onChange={e => handleOnChange(e.target.value)}/>
  ;
};

export default Search;
