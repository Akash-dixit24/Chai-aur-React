import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

  const navigate = useNavigate();
  function clickHandler (){
    navigate("/labs");


  }

  function backHandler(){
    navigate(-1)
  }
  return (

    <div>

<div>This is Support page</div>
<button onClick={clickHandler}>Move to labs page</button>
<button onClick={backHandler}>Go back</button>
    </div>
     
  )
}

export default Support