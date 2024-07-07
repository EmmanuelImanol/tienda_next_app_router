import { redirect } from 'next/navigation'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import ProductSearchForm from '@/components/products/ProductSearchForm';

async function productCount() {
    return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const products = await prisma.product.findMany({
        take: pageSize,
        skip,
        include: {
            category: true
        }
    })
    return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams} : { searchParams: {page: string}}) {
    const page = +searchParams.page || 1
    const pageSize = 10
    if(page < 0) redirect('/admin/products')
    const productsData = getProducts(page, pageSize)
    const totalProductsData = productCount()
    const [ products, totalProducts ] = await Promise.all([productsData, totalProductsData])
    const totalPages = Math.ceil(totalProducts / pageSize)
    if(page > totalPages) redirect('/admin/products')
    return (
        <>
            <Heading>Administrar Productos</Heading>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between mt-10'>
                <Link
                    href={'/admin/products/new'}
                    className='bg-purple-500 px-5 py-3 font-bold cursor-pointer flex justify-center items-center gap-1 text-white lg:max-w-max rounded-lg'
                ><PlusCircleIcon className='w-7 h-7' /> Crear Producto </Link>

                <ProductSearchForm />
            </div>
            <ProductsTable 
                products={products}
            />

            <ProductsPagination 
                page={page}
                totalPages={totalPages}
            />
        </>
    )
}
