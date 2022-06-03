import React from "react";
import { useRouter } from "next/router";

export default function ProductItem() {
  const {
    query: { productId },
  } = useRouter();
  return <h1>Esta es la pagina solo del producto: {productId}</h1>;
}
