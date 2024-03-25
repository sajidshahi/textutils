import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

        setTimeout()
    }
  return (
    <div style={{height: '40px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>{capitalize (props.alert.type)}</strong> : <strong>{props.alert.message}</strong> 
</div>
}
</div>
  )
}
