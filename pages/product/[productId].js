import React from "react";
import { useRouter } from "next/router";

export default function ProductItem() {
  const {
    query: { productId },
  } = useRouter();

  return <div>Esta es la pagina de prueba del producto: {productId}</div>;
}
