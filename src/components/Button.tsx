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
    let bgcolor = variant === "filled" ? "backgroundSecondary" : "transparent"
    let border = variant === "outlined" ? "border-2 border-[#314d39] " : "border-2 border-transparent "

    return (
        <button
            onClick={onClick}
            style={{ height, width }} 
            className={`text-white rounded-3xl bg-${bgcolor} ${border}text-3xl p-3 hover:bg-[#314d39] hover:text-[#bbb] transition-all duration-200 ease-linear flex justify-center items-center`}
        >
            {children}
        </button>
    )
}