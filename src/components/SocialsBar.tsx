export default function SocialsBar () {
    return (
        <div className="relative z-10 flex flex-col justify-center">
            <div className="flex w-12 flex-col">
                <a href="https://github.com/randysim">
                    <img src="/github.svg" className="w-10 h-10 my-3 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/randysim/">
                    <img src="/linkedin.svg" className="w-10 h-10 my-3 cursor-pointer" />
                </a>
                <a href="mailto:randysim9@gmail.com" className="relative group">
                    <img src="/email.svg" className="w-10 h-10 my-3 cursor-pointer group" />
                    <span className="absolute hidden w-auto p-2 text-sm text-white bg-[#578a65] rounded-md group-hover:block">
                        randysim9@gmail.com
                    </span>
                </a>
            </div>
        </div>
    )
}