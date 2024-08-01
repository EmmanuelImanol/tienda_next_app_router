"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"
import { toast } from "react-toastify"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product} : AddProductButtonProps) {
    const addToCart = useStore((state) => state.addToCart)
    return (
        <button
            type="button"
            className="bg-purple-600 hover:bg-purple-800 text-white w-full mt-5 p-2 uppercase font-bold cursor-pointer rounded-3xl transition"
            onClick={() => addToCart(product)}
        >Agregar</button>
    )
}
