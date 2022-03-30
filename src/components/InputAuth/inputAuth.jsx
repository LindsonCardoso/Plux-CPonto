


export default function AuthInput(props){
    return(
        <div className={`flex  flex-col mt-3`}> 
            <label>{props.label}</label>
            <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            onChange={e => props.estado?.(e.target.value)}
            required={props.obrigatorio}
            className={` 
                px-4 py-3 rounded-lg bg-gray-200 mt-2
                border focus:border-blue-500 focus:bg-white
                focus:outline-none
            `}
            />
        </div>
    )
}