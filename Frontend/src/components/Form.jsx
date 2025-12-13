import React ,{useState} from 'react'

const Form = () => {
  const [formData,setFormData]= useState({
    email:"",
    password:""
  });

 function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
 } 

 function handleSubmit(){
    console.log(formData);
 }


  return (
    <div>
        <form>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <br/>
            <br/>
        </form>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
