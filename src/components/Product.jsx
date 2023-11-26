"use client";
import React, { useEffect } from "react";

import { Products } from "../API/products";
export default function Product() {
  useEffect(() => {
    async function fetchProducts() {
      const productInstance = await new Products().productList();
      const data = await new Products().productinfo();
      try {
        console.log(productInstance);
        console.log(data.success);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  return <div>helooo</div>;
}
