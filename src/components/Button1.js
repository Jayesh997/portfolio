import React from 'react'
import './Button1.css'

const Button1 = (props) => {
  return (
<button className='button1'>
  <a href="mailto:jayeshgupta.997@gmail.com"><span>{props.value}</span></a>
  <div class="liquid"></div>
</button>
  )
}

export default Button1