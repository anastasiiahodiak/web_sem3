import "./css/select.css"

const Select = ({id,name,value,onChange,options,}) =>{
    return(
    <select className="styled_select" id = {id} name={name}  onChange={onChange}>
        {
            options.map(option=>(
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))
        }
    </select>
)}

export default Select
