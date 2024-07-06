export default function Button({
    width,
    height,
    children,
    onClick,
    variant="filled"
} : {
    width: string,
    height: string,
    children: React.ReactNode,
    onClick: () => void,
    variant: "filled" | "outlined"
}) {
    let bgcolor = variant === "filled" ? "#578a65" : "transparent"
    let border = variant === "outlined" ? "border-4 border-[#314d39] " : "border-4 border-transparent "

    return (
        <button
            onClick={onClick}
            style={{ height, width }} 
            className={`text-white rounded-3xl bg-[${bgcolor}] ${border}text-3xl p-3 hover:bg-[#314d39] transition-all duration-200 ease-linear flex justify-center items-center`}
        >
            {children}
        </button>
    )
}