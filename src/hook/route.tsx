import React from "react";
import { useRouter } from "next/router";
import useAuth from "./auth";

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }

    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: Function) {
  return function WithProtected(props: Object) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/login");
      return <h1>Redirecting...</h1>;
    }

    return <Component auth={auth} {...props} />;
  };
}
