import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const {name, email} = formState;
    //useEffect generico
    useEffect(() => {
        //console.log("hey")
    }, [])

    //useEffect para el form
    useEffect(() => {
        //console.log("formState changed!")
    }, [formState])

    //useEffect para email
    useEffect(() => {
        //console.log("email changed!")
    }, [email])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    return (
        <>
           <h2>useEffect</h2> 
           <hr/>
           <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange} />
           </div>
           
           <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Tu correo" autoComplete="off" value={email} onChange={handleInputChange} />
           </div>

           {(name==="123") && <Message />}
        </>
    )
}
