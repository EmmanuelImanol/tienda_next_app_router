import Link from "next/link";
import { ShoppingCartIcon } from '@heroicons/react/16/solid'

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 shadow-md w-full fixed z-10">
            <div className="max-w-screen-xl w-[95%] m-auto flex justify-between items-center h-20">
                <Link
                    href={'/'}
                    className="font-black text-3xl text-purple-100"
                >App<span className="text-purple-950">Tienda</span> </Link>
                <Link
                    className="text-purple-900 p-2 bg-purple-100 font-bold rounded-full hover:bg-purple-600 transition-colors hover:text-purple-100"
                    href={'/carrito'}
                > <ShoppingCartIcon className='w-7 h-7' /> </Link>
            </div>
        </div>
    )
}
