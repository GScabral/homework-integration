import { useState } from "react";
import validation from "../validation";


const Form=(login)=>{

    const [useData,setUseData]= useState({
        email: '',
        password: '',
})
const handleChange = (event)=>{
    setError(validation({ ...useData, [event.target.name]: event.target.value }));
    setUseData({...useData, [event.target.name]: event.target.value})
}

const [error,setError]=useState({})

const handleSubMit=(event)=>{
    event.preventDefault();
    login(useData)
}

    return(
        <div>
            <form>
                <label htmlFor="email">email</label>
                <input onChange={handleChange} value={useData.email} type="text" name="email" />
                {error.e1 && <p>{error.e1}</p>}
                {error.e2 && <p>{error.e2}</p>}
                {!error.e1 && !error.e2 && error.e3 && <p>{error.e3}</p>}
                <br />
                <label value={useData.password} htmlFor="password">password</label>
                <input onChange={handleChange} type="text" name="email" />
                {error.p1 && <p>{error.p1}</p>}
                {error.p2 && <p>{error.p2}</p>}
                <br />
                <button onClick={handleSubMit} type="submit">submit</button>
            </form>

        </div>
    )
}

export default Form;