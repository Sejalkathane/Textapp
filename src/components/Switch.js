import React, {useState} from 'react'

export default function Switch() {

   const [btn,btntext]=useState('Black');

    let mystyle={ 
        width:'15%',
        height:'50px',
        margin:'50px',
        fontSize:'30px'
    }

    
  return (
    <div>
      <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"style={mystyle} />
  <label className="form-check-label" style={mystyle} htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>
    </div>
  )
}
