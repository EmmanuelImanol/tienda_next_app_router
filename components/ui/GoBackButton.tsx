"use client"
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'

export default function GoBackButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className='bg-purple-500 px-5 py-3 font-bold cursor-pointer flex justify-center items-center gap-1 text-white lg:max-w-max rounded-lg'
        ><ArrowUturnLeftIcon className='w-7 h-7' /> Volver </button>
    )
}
