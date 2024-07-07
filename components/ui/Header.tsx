import Link from "next/link";
import { ShoppingCartIcon } from '@heroicons/react/16/solid'

export default function Header() {
    return (
        <div className="bg-purple-900">
            <div className="max-w-screen-xl w-[95%] m-auto flex justify-between items-center h-16">
                <h1 className="font-black text-3xl text-purple-300">Logo</h1>
                <Link
                    className=" text-purple-300 font-bold rounded-full"
                    href={'/carrito'}
                > <ShoppingCartIcon className='w-7 h-7' /> </Link>
            </div>
        </div>
    )
}
