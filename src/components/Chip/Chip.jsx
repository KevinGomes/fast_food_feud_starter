import * as React from "react"
import "./Chip.css"

export function Chip({ label="", isActive = false, onClick=() => {} }) {
  let buttonClassName = "chip"
//  const [status, setStatus] = useState("chip");
//
//  const handleOnClick = () => {
//    if(status == "chip"){
//      setStatus("chip active")
//    }
//    else{
//      setStatus("chip")
//    }
//  }
  if(isActive)
  {
    buttonClassName = "chip active"
  }
  else{
    buttonClassName = "chip"
  }

  return (
    <button className={buttonClassName} onClick = {onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
