import React from 'react'

import classes from "./Image.module.css"

function Image(props) {
  return (
    <div className={classes.image}>
		<img src={props.src} alt={props.alt}/>
	</div>
  )
}

export default Image