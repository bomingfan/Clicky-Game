import React from "react";

const Friends = props => (

    <div role="img" className="click-item" 
    style={{backgroundImage: `url("${props.image}")`}}
    onClick={() => props.handleClick(props.id)}
    >
    </div>

)




export default Friends;