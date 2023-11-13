import { Products } from "../API/products";

// const products = [


//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     // More products...
//   ]

export default async function Product() {

    const products = await new Products().productList();
    console.log(products);


    return (
        // Render your component UI using the fetched products
        // For example, you might map over the products to display them
        <div>
                nn
        </div>
      );
}