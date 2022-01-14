import { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
    const products = [
        {
            "_id": "61dfe40b4809b8e8faff417j",
            "user": "61dfe3b84809b8e8faff4171",
            "productname": "Sandeep Products",
            "description": "Sandeep Products",
            "price": 30,
            "date": "2022-01-13T08:34:19.113Z",
            "__v": 0
        },
        {
            "_id": "61dfed5a3114000e358292a22",
            "user": "61dfe3b84809b8e8faff4171",
            "productname": "Sandeep Products",
            "description": "Sandeep Products",
            "price": 300,
            "date": "2022-01-13T09:14:02.711Z",
            "__v": 0
        }]

    const [product, setProduct] = useState(products)

    // Add Product
    const addProduct = (productname, description, price) => {
        const pro = {
            "_id": "61dffed5a3114000e358292a22",
            "user": "61dfe3b84809b8e8faff4171",
            "productname": productname ,
            "description": description,
            "price": price,
            "date": "2022-01-13T09:14:02.711Z",
            "__v": 0
        }
        setProduct(product.concat(pro))
    }

    // Edit Product
    const editProduct = () => {

    }

    // Delete Product
    const deleteProduct = () => {

    }

    return (
        <productContext.Provider value={{ product, addProduct, editProduct, deleteProduct }}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;