import { useState } from "react"
import SelectInput from "./SelectInput"
import TextInput from "./TextInput"


const CATEGORIES =["Food", "Shopping", "Transport", "Bills", "Others"]

export default function ExpenseForm({onAddExpense}) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("Food")
    const [error, setError] = useState("")

    function submit(){
        setError("")

        const cleanTitle = title.trim()
        const numerAmount = Number(amount)

        if(!cleanTitle){
            return setError("Title is required")
        }

        if(!Number.isFinite(numerAmount) || numerAmount <= 0){
            return setError("Amount must be a positive number")
        }

        onAddExpense({
            title: cleanTitle,
            amount: numerAmount,
            category
        })

        setTitle("")
        setAmount("")
        setCategory("Food")
    }


    return (

        <div>
        <div className="row">
            <TextInput
                label={"Title"}
                value={title}
                onChange={setTitle}
                placeholder={"e.g. pizza"}
                ></TextInput>

                <TextInput
                label={"Amount"}
                value={amount}
                onChange={setAmount}
                placeholder={"e.g. 15"}
                ></TextInput>


                <SelectInput
                label={"Category"}
                value={category}
                onChange={setCategory}
                options={CATEGORIES}
                ></SelectInput>
        </div>

        {error ? <p className="error">{error}</p> : null}

        <button className="btn primary" onClick={submit}>Add</button>

        </div>
        
    )
}