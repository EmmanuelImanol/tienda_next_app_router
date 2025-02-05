import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
        <Heading>Producto No Encontrado</Heading>

        <div className="mt-10">
            <Link
                href={'/admin/products'}
                className="bg-purple-500 text-black px-10 py-4 text-xl text-center font-bold cursor-pointer w-full lg:w-auto"
            >Ir a productos</Link>
        </div>
    </div>
  )
}
