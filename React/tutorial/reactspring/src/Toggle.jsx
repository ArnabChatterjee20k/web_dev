import React , {useState} from 'react'
import { useSpring , animated } from 'react-spring'
function Toggle() {
    const [Toggle, setToggle] = useState(false)
    const fade = useSpring({
        // opacity : Toggle?0:1,
        color : Toggle?"red":"green",
        x : Toggle?0:12,
        fontSize : Toggle?"1rem":"2rem",
        transform : Toggle?"rotateZ(0deg)":'rotateZ(50deg)'
    })
    return (
        <div>
            <animated.h1 style={fade}>Hellow</animated.h1>
            <button onClick={()=>setToggle(!Toggle)}>Toggle</button>
        </div>
    )
}

export default Toggle