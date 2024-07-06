'use client'

import SocialsBar from "@/components/SocialsBar";
import { useRouter } from "next/navigation";

function ProjectCard(
  { 
    name,
    imageUrl,
    to
  } : {
    name: string,
    imageUrl: string,
    to: string
  }
) {
  const router = useRouter();

  return (
    <div 
      className="flex w-full sm:w-1/2 p-2 h-[350px] max-w-[500px] mt-10" 
    >
      <div
        className="flex flex-wrap w-full h-full cursor-pointer rounded-sm" 
        onClick={() => {
          router.push(to);
        }}
      >
        <img 
          src={imageUrl}
          className="w-full h-[85%] object-cover object-left-top rounded-sm bg-[#578a65] border-[3px] border-[#578a65] drop-shadow-lg"
        />
        <div className="h-[15%] text-2xl w-full pl-2 flex items-center">{name}</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex w-full h-screen justify-center items-center flex-wrap relative">
        <SocialsBar />
        <div className="flex flex-wrap flex-col items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold w-full text-right pr-1">Software Engineer</h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">RANDY SIM</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1">CS @ SBU</h1>
        </div>
        <div 
          className="w-full flex justify-center items-center absolute bottom-[150px] sm:bottom-20 flex-wrap"
        >
          <h1 className="w-full text-center text-2xl mb-5 italic">down here!</h1>
          <img
            onClick={() => {
              let element = document.getElementById("projects");

              if (element) {
                element.scrollIntoView({behavior: "smooth"});
              }
            }}
            className="cursor-pointer" 
            src="/downarrow.svg" 
            alt="Scroll Down" 
            width={50} 
            height={50} 
          />
        </div>
      </div>
      <div id="projects" className="flex w-full justify-center flex-wrap overflow-auto pb-[150px]">
        <div className="flex flex-col items-start md:w-[1000px] p-2">
          <h1 className="text-6xl w-full font-bold ml-2 mb-10">PROJECTS</h1>
          <div className="flex flex-wrap w-full">
            <ProjectCard name="Epsilon" imageUrl="/epsilon.png" to="/epsilon" />
            <ProjectCard name="randysim.me" imageUrl="/project2.png" to="/" />
            <ProjectCard name="Vigil.us" imageUrl="/vigilus.png" to="/vigilus" />
          </div>
        </div>
      </div>
    </div>
  );
}
