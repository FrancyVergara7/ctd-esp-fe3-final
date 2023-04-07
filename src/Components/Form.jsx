import React, { useState } from "react";

const Form = () => {
  const [user,setUser] = useState({
      name: ' ',
      email: ' '
  })

  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(user.name.length > 5){
      const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
      if(emailRegex.test(user.email)){
        setMensaje(`Gracias ${user.name} , te contactaremos cuando antes vía mail`)
      } else {
        setMensaje(`Por favor verifique su información nuevamente`)
      }
    } else {
      setMensaje(`Por favor verifique su información nuevamente`)
    }
    
  }
  return (
    <div className="state">
      <form onSubmit={handleSubmit}>
      <label>Nombre</label>
        <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button>Send</button>
      </form>
      <h1>{mensaje}</h1>
      {console.log(user)}
    </div>
  );
};

export default Form;