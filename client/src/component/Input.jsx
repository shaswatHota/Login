export const Input=({
    placeholder,
    onClick,
    type
})=>{
    return  <div type={type} className={'mt-4 ml-32 pt-1 pl-5 w-56 h-9 text-blue-500 bg-blue-200 rounded-md text-md shadow'}>
                <input type={type} placeholder={placeholder} className="bg-blue-200 outline-none"></input>
            </div>
}

export default Input;