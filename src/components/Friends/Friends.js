import React from "react";

const Friends = props => (

    <div role="img" aria-label="click item" class="click-item" 
    style={{backgroundImage: `url("${props.image}")`}}
    onClick={() => props.updateScore(props)}
    >
    </div>

)




export default Friends;