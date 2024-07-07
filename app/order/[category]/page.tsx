import ProductCard from "@/components/products/ProductCard"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: category
            }
        }
    })
    return products
}

export default async function OrderPage({ params }: { params: { category: string } }) {
    const products = await getProducts(params.category)

    return (
        <>
            <h1 className="text-xl md:text-3xl font-black my-5">
                Elige y personaliza tu pedido a continuación
            </h1>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    )
}
