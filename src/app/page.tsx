'use client'

import Button from "@/components/Button";
import SocialsBar from "@/components/SocialsBar";
import { useRouter } from "next/navigation";

function ProjectCard(
  { 
    name,
    imageUrl,
    to,
    alignLeft
  } : {
    name: string,
    imageUrl: string,
    to: string,
    alignLeft?: boolean
  }
) {
  const router = useRouter();
  let alignment = alignLeft ? "object-left-top " : "";

  return (
    <div 
      className="flex w-full sm:w-1/2 p-2 h-[320px] max-w-[500px] mt-10" 
    >
      <div
        className="flex flex-wrap w-full h-full cursor-pointer rounded-lg relative group" 
        onClick={() => {
          router.push(to);
        }}
      >
        <img 
          src={imageUrl}
          className={`w-full h-full object-cover ${alignment}rounded-lg bg-[#578a65] drop-shadow-2xl`}
        />
        <div className="absolute w-full h-full bg-black rounded-lg opacity-0 group-hover:opacity-50 transition-all duration-200 ease-linear" />
        <div className="absolute flex opacity-0 w-full h-full rounded-lg justify-center items-center group-hover:opacity-100 transition-all duration-200 ease-linear">
          <span className="font-bold text-4xl text-white opacity-100">{name.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col w-full h-screen justify-center items-center relative flex-wrap">
        <div className="flex w-full justify-center items-center">
          <SocialsBar />
          <div className="flex flex-wrap flex-col items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold w-full text-right pr-1">Software Engineer</h1>
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-bold">RANDY SIM</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1">CS @ <span className="text-[#9a0000]">SBU</span></h1>
          </div>
        </div>
        <div 
          className="w-full flex justify-center items-center flex-wrap mt-20"
        >
          <h1
            onClick={() => {
              let element = document.getElementById("projects");

              if (element) {
                element.scrollIntoView({behavior: "smooth"});
              }
            }} 
            className="w-full text-center text-3xl mb-5 italic cursor-pointer boujee-text"
          >
            scroll
          </h1>
        </div>
      </div>
      <div id="about" className="flex w-full justify-center">
          <div className="text-2xl w-full md:w-3/4 md:text-4xl text-center p-5">
            Aspiring Software Engineer based in NYC. Currently studying Computer Science @ Stony Brook University. I build feature rich, functional experiences.
            <div className="w-full mt-10 flex justify-center">
              <Button width="200px" height="60px" onClick={() => {
                window.open("/resume.pdf", "_blank")
              }} variant="filled">RESUME</Button>
            </div>
          </div>
      </div>
      <div id="projects" className="flex w-full justify-center flex-wrap overflow-auto pb-[150px] mt-20">
        <div className="flex flex-col items-start md:w-[1000px] p-2">
          <h1 className="text-6xl w-full font-bold ml-2 mb-10">PROJECTS</h1>
          <div className="flex flex-wrap w-full">
            <ProjectCard name="Epsilon" imageUrl="/epsilon.png" to="/epsilon" alignLeft />
            <ProjectCard name="randysim.me" imageUrl="/randysimme.png" to="/" />
            <ProjectCard name="Vigil.us" imageUrl="/vigilus.png" to="/vigilus" />
          </div>
        </div>
      </div>
    </div>
  );
}
