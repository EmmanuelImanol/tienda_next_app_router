import { completeOrder } from "@/actions/complete-order-action"
import { OrderWithProducts } from "@/src/types"
import { formatCurrency } from "@/src/utils"

type OrderCardProps = {
    order: OrderWithProducts
}

export default function OrderCard({ order }: OrderCardProps) {

    return (
        <section
            aria-labelledby="summary-heading"
            className="rounded-lg bg-white px-4 py-6 sm:p-6 lg:p-8 space-y-4 shadow-lg"
        >
            <p className='text-2xl font-medium text-gray-900'>Cliente: {order.name}</p>
            <p className='text-lg font-medium text-gray-900'>Productos Ordenados:</p>
            <dl className="mt-6 space-y-4">
                {order.orderProducts.map(product => (
                    <div
                        key={product.productId}
                        className="flex items-center gap-2 border-t border-gray-200 pt-4"
                    >
                        <dt className="flex items-center text-sm text-white bg-purple-700 px-2 py-1 rounded-lg">
                            <span className="font-black">{product.quantity}</span>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">{product.product.name}</dd>
                    </div>
                ))}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total a Pagar:</dt>
                    <dd className="text-base font-medium text-gray-900">{ formatCurrency(order.total) }</dd>
                </div>
            </dl>

            <form 
                action={completeOrder}
                className="flex flex-col lg:flex-row items-center justify-between"
            >
                <input 
                    type="hidden" 
                    value={order.id}
                    name="order_id"
                />
                <input
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 w-full lg:w-auto text-white mt-5 p-2 uppercase font-bold cursor-pointer text-sm rounded-lg"
                    value='Cancelar'
                />
                <input
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-800 w-full lg:w-auto text-white mt-5 p-2 uppercase font-bold cursor-pointer text-sm rounded-lg"
                    value='Completar'
                />
            </form>
        </section>
    )
}