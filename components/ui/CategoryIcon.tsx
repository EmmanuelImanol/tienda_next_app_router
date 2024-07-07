"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category: string}>()

    return (
        <div
            className={`${category.slug === params.category ? 'bg-purple-600 text-white' : 'text-purple-600'} py-2 px-4 font-black border-2 rounded-3xl border-purple-600 cursor-pointer hover:bg-purple-600 hover:text-white transition flex gap-2 items-center shadow-lg`}
        >
            <div className="w-8 h-8 relative">
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`}
                    alt="Imagen Categoria"
                />
            </div>
            <Link
                href={`/order/${category.slug}`}
            >{category.name}</Link>
        </div>
    )
}
