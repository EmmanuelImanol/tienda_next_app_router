import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon'

async function getCategories() {
    return await prisma.category.findMany()
}

export default async function OrderSidebar() {
    const categories = await getCategories()
    return (
        <nav className="flex items-center space-x-5 overflow-x-auto bg-white my-5 p-3 rounded-full">
            {categories.map(category => (
                <CategoryIcon 
                    key={category.id}
                    category={category}
                />
            ))}
        </nav>
    )
}
