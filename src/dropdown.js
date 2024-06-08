import {useState} from 'react'
 function DropDown() {
    const [myCar, setMyCar] = useState("Choose");
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option>Choose</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }
  export default DropDown;