import { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
    const host = "http://localhost:5000"
    const products = []

    const [product, setProduct] = useState(products)

    // Get all Products
    const getProduct = async () => {
        const response = await fetch(`${host}/api/product/showproduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZDI0ZDAzZTE0N2Y3MzM5YjAwOGJmIn0sImlhdCI6MTY0MTg5MDc5Nn0.YYKGOtmZJ5kWthzFQ3mfWXNnVkBeHbGemq7z67DMbA0"
            }
        });
        const json = await response.json();
        setProduct(json);
    }
    // Add Product
    const addProduct = async (productname, description, price) => {
        const response = await fetch(`${host}/api/product/addproduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZDI0ZDAzZTE0N2Y3MzM5YjAwOGJmIn0sImlhdCI6MTY0MTg5MDc5Nn0.YYKGOtmZJ5kWthzFQ3mfWXNnVkBeHbGemq7z67DMbA0"
            },
            body: JSON.stringify({ productname, description, price })
        });
        const json = await response.json();

        setProduct(product.concat(json))
    }

    // Edit Product
    const editProduct = async (id, productname, description, price) => {
        const response = await fetch(`${host}/api/product/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZDI0ZDAzZTE0N2Y3MzM5YjAwOGJmIn0sImlhdCI6MTY0MTg5MDc5Nn0.YYKGOtmZJ5kWthzFQ3mfWXNnVkBeHbGemq7z67DMbA0"
            },
            body: JSON.stringify({ productname, description, price })
        });
        const json = await response.json();
        console.log(json);

        let newProduct = JSON.parse(JSON.stringify(product))

        for (let index = 0; index < newProduct.length; index++) {
            const element = newProduct[index];
            if (element._id === id) {
                newProduct[index].productname = productname;
                newProduct[index].description = description;
                newProduct[index].price = price;
                break;
            }
        }
        setProduct(newProduct)
    }

    // Delete Product
    const deleteProduct = async (id) => {
        const response = await fetch(`${host}/api/product/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkZDI0ZDAzZTE0N2Y3MzM5YjAwOGJmIn0sImlhdCI6MTY0MTg5MDc5Nn0.YYKGOtmZJ5kWthzFQ3mfWXNnVkBeHbGemq7z67DMbA0"
            }
        });
        const json = response.json();
        console.log(json);

        const newProduct = product.filter((product) => { return product._id !== id })
        setProduct(newProduct);
    }

    return (
        <productContext.Provider value={{ product, getProduct, addProduct, editProduct, deleteProduct }}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;