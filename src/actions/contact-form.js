import Swal from 'sweetalert2';
const url = "https://portfolio-app-alelalli.herokuapp.com/api/sendemail";

console.log(url)

export const sendData = async (value) => {

    

    const resp = await fetch( url, {
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify(value) 
    });

    

    const body = await resp.json();

    if(body.ok)
    {
        
        Swal.fire("Excelente!",'Email enviado',"success")
    }
    else
    {
        const {errors} = body;
        const min = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 3000,
            timerProgressBar: true
        })
        
        Object.values(errors).reverse().map( err => {
            min.fire({title:`${err.msg}`,icon:"error"})
        })        
    }
    
}

export const dataMail = ({email,title,text}) => {
    return {
        type:"sendEmail",
        payload: {
            email,
            title,
            text
        }
    }
}