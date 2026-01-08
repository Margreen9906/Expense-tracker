export default function TextInput({label, value, onChange, type = "text", placeholder = ""}) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <input
                className="input" 
                type={type} 
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}

                />
        </div>
    )
}