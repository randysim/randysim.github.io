"use client"
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { useRouter } from "next/navigation";

export default function Epsilon () {
    const router = useRouter();

    return (
        <div className="flex flex-wrap w-full justify-center pb-20">
            <div className="w-full pl-5">
                <Button
                    width="200px"
                    height="50px"
                    onClick={() => {
                        router.push("/")
                    }}
                    variant="outlined"
                >GO HOME</Button>
            </div>
            <h1 className="text-6xl font-bold w-full text-center mb-10 mt-5">EPSILON</h1>
            <Carousel 
                elements={[
                    <img src="/epsilon.png" alt="epsilon" className="mx-auto rounded-lg" width={800} />,
                    <img src="/epsilon-attendance.png" alt="epsilon attendance" className="mx-auto rounded-lg" width={800} />,
                    <img src="/epsilon-catalog.png" alt="epsilon attendance" className="mx-auto rounded-lg" width={800} />
                ]} 
            />
            <div className="flex justify-center w-full mt-5">
                <div className="flex flex-col flex-wrap w-full max-w-[600px] p-3 justify-center">
                    <p className="text-xl text-center">
                        Developed Epsilon, an all-in-one platform for Stuyvesant High School, featuring club management, room
                        reservations, event creation, and corresponding admin dashboards. Utilized daily by over 3,300 students and faculty.
                    </p>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className="flex flex-col flex-wrap w-full max-w-[600px] p-3 justify-center">
                    <ul className="list-disc pl-5">
                        <li>Created a PostgreSQL database, implementing authentication with row level security and edge functions to accommodate Google APIs and a self-hosted mail server.</li>
                        <li>Used TypeScript, React, and React-Router to create a responsive frontend, integrating the API to display dynamic data.</li>
                        <li>Self-hosted Supabase Docker containers on a VPS. Set up continuous integration pipelines for frontend/backend.</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center w-full flex-col items-center mt-10">
                <a href="https://github.com/stuysu/epsilon" className="underline text-4xl cursor-pointer">Github</a>
                <a href="https://epsilon.stuysu.org/" className="underline text-4xl cursor-pointer mt-5">{"Live Site [Student Only]"}</a>
            </div>

        </div>
    )
}