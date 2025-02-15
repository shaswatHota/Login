export const Button=({
    children,
    disabled,
    onClick
})=>{
    return  <div onClick={onClick} className={'cursor-pointer text-sm'}>
                {children}
            </div>
}
export default Button;

