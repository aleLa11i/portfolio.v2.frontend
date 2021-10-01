import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { dataMail, sendData } from '../../../actions/contact-form';
import { useForm } from '../../hooks/useForm'

const initialState = JSON.parse(localStorage.getItem("contact-form-data")) 
||  {
        email:"",
        title:"",
        text:""
    }

export const ContactScreen = () => {


    const [value,handleInputChange,reset] = useForm(initialState)
    const {email,title,text} = value;
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem("contact-form-data",JSON.stringify(value));
    }, [value])

    const handleReset = () => {
        reset({
            email:"",
            title:"",
            text:""
        })
    }

    const handleSend = (e) => {
        e.preventDefault();
        sendData(value);
        dispatch(dataMail(value));
    }

    return (
        <div id="contact" className="contact screen">
            <div className="contact-conteiner conteiner">

                <h1>Contacteme</h1>
                
                <form 
                    className="contact-form"
                    onCharge={handleSend}
                >
                    
                    <input
                    value={email}
                    type="text"
                    className="contact-item"
                    name="email"
                    placeholder="Ingrese el remitente"
                    onChange={handleInputChange}

                    >
                    </input>
                    <input
                    value={title}
                    type="text"
                    className="contact-item "
                    name="title"
                    placeholder="Ingrese el titulo"
                    onChange={handleInputChange}
                    >
                    </input>
                    
                    <textarea
                    value={text}
                    className="contact-item "
                    name="text"
                    placeholder="Ingrese el correo a enviar"
                    onChange={handleInputChange}
                    >
                    </textarea>
                    
                    <button
                        className="contact-item hover btn"
                        onClick={handleSend}
                    >
                        Enviar
                    </button>
                </form>
                <button
                    className="btn btn-reset contact-item hover"
                    onClick={handleReset}
                    >
                        Reset
                </button>
            </div>
            
            
        </div>
    )
}
