'use client'
import { useRouter } from "next/navigation"

export default function NavBar() {
    const router = useRouter();

    return (
        <div className="fixed w-full h-16 flex items-center z-10">
            <h1 className="text-2xl font-bold ml-4 cursor-pointer" onClick={() => router.push("/")}>RANDY SIM</h1>
        </div>
    )
}