'use client'

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="flex flex-col relative">
                <h1 className="text-6xl font-bold text-center mb-10">{"Page not found :("}</h1>
                <Button
                    width="300px"
                    height="50px"
                    variant="filled"
                    onClick={() => {
                        router.push("/")
                    }}
                >
                    GO HOME
                </Button>
            </div>
        </div>
    )
}