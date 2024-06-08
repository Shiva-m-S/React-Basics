import { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs.username +' is '+inputs.age +' years old');
    }
    const style = {
      color:'green'
    }
    return (
      <form onSubmit={handleSubmit}>
        <label style={style}>Enter your name:
        <input 
          type="text" 
          name="username" 
        //   value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number"
            name="age" 
            // value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          
          <input style={{backgroundColor:'red'}} type="submit" />
         
      </form>
    )
  }
export default MyForm;