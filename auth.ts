import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

//Para validar con zod
const userCredentials = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// auth es el metodo que usmos para mantener abierta la sesion
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        //credentials alli recibimos los datos que ingreso el usuario
        console.log("credentials :>> ", credentials);

        const parseCredentials = userCredentials.safeParse(credentials);
        // En ocasiones, no queremos que nuestra aplicación genere un error cuando la validación de Zod encuentre un tipo de datos diferente al requerido. Para evitar que genere un error, puede utilizar el método safeParse() que devuelve un objeto con una propiedad booleana llamada success que muestra si la validación falló o no .

        if (!parseCredentials.success) {
          //Si devuelve que resulto false el chequeo de los datos, arrojamos un null
          console.log("Invalid Credentials");
          return null;
        }

        //!Destructuramos de parseCredentials los valores ingresados por el ususario y ya chequeados
        const { email, password } = parseCredentials.data;

        try {
          //Le enviamos los datos del usuario a la api
          const login = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
            headers: {
              "Content-Type": "application/json",
            },
            //Medoto de POST: Enviar
            method: "POST",
            //Y en el cuerpo los datos del usuario ya verificados
            body: JSON.stringify({ email, password }),
          });

          //Si el status es distinto que 200, retornamos un null y el status del login
          if (login.status !== 200) {
            console.log("login.statu :>> ", login.status);
            return null;
          }
          //Si el status es igual a 200, guardamos el resultado en la constante user (son los datos del usuario que se esta loguiando, incluido el token necesario para ingresar a cualquier de las rutas de la api y el id de la accion)
          const user = await login.json();

          console.log("user :>> ", user);

          return user;
        } catch (error) {
          console.log("error  :>> ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    //jwt es lo que hace la autenticacion y autorizacion nextauth
    jwt: async ({ user, token, trigger }) => {
      console.log("user :>> ", user);
      console.log("token JWT:>> ", token);
      console.log("trigger :>> ", trigger);
      if (trigger === "signIn" && user) {
        token.id = user.id;
        token.token = user.token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.log("Token Session", token);
      console.log("Session", session);
      session.user.id = token.id as string;
      session.user.token = token.token as string;
      return session;
    },
  },
});
