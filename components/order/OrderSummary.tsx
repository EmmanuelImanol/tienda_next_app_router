"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function OrderSummary() {
    const order = useStore(state => state.order)
    const clearOrder = useStore(state => state.clearOrder)
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) ,[order])

    const handleCreateOrder = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            total,
            order
        }
        const result = OrderSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach((issue) => {
                toast.error(issue.message)
            })
            return
        }
        const response = await createOrder(data)
        if(response?.errors) {
            response.errors.forEach((issue) => {
                toast.error(issue.message)
            })
        }

        toast.success('Pedido realizado correctamente, pasar a recoger a tienda.')
        clearOrder()
    }
    return (
        <>
            <h1 className="font-black text-2xl pt-10">Mi pedido</h1>
            {order.length === 0 ? <p className="text-center py-10">El carrito está vacio</p> : (
                <div className="my-5 bg-white p-5 rounded-lg shadow-lg">
                    {order.map(item => (
                        <ProductDetails 
                            key={item.id}
                            item={item}
                        />
                    ))}

                    <p className="text-2xl mt-20 text-center md:text-right">
                        Total a pagar: {''}
                        <span className="font-bold">{formatCurrency(total)}</span>
                    </p>

                    <form 
                        className="w-full mt-10 md:text-right space-y-5"
                        action={handleCreateOrder}
                    >
                        <input 
                            type="text" 
                            placeholder="Tu Nombre"
                            className="bg-gray-200 border border-purple-300 p-3 md:mr-4 w-full md:w-auto"
                            name="name"
                        />
                        <input 
                            type="submit" 
                            className="py-2 md:p-3 rounded uppercase text-white bg-black w-full md:w-auto text-center md:text-right cursor-pointer font-black"
                            value='Confirmar Pedido'
                        />
                    </form>
                </div>
            )}
        </>
    )
}
