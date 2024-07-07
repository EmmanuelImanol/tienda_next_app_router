"use client"
import useSWR from "swr";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

export default function VentasPage() {
    const url = '/admin/ventas/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false
    })
    if(isLoading) return <p>Cargando...</p>
    if(data) return (
        <>
            <Heading>Administra tus ventas</Heading>

            <div className="mt-10">
                <h2 className="text-2xl font-black">Ventas Totales:</h2>
            </div>

            {data.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto pt-10 items-start">
                    {data.map(order => (
                        <LatestOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className="text-center my-10">No hay ordenes listas</p>}
        </>
    )
}
