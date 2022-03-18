import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
/*** Using loop props*/
function Loop() {
    const styles_prop = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },

    })
    const style = {
        width: 80,
        height: 80,
        margin: "10rem auto",
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles_prop // expanding style props
    }
    return (
        <>
            <animated.div style={style} />
        </>
    )
}

/** Using  function in loop */
function LoopFunction() {

    let n = 0;

    const styles_prop = useSpring({
        loop: () => 3 > n++,
        /**
         *  using function as a value in loop and returning ture or false 
         * Also we can return a loop object
         */
        from: { x: 0 },
        to: { x: 180 }
    })
    const style = {
        width: 80,
        height: 80,
        margin: "10rem auto",
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles_prop // expanding style props
    }
    return (
        <>
            <animated.div style={style} />
        </>
    )
}

/**using loop object in loop */
function LoopObject() {
    const styles = useSpring({
        loop: { reverse: true, loop: true }, // loop false means no loop
        from: { x: 0 },
        to: { x: 100 },
    })

    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                backgroundColor: '#46e891',
                borderRadius: 16,
                ...styles,
            }}
        />
    )
}

function Clickevent() {
    const [styles, setstyles] = useSpring(() => ({
        width: 80,
        height: 80,
        margin: "10rem auto",
        backgroundColor: '#46e891',
        borderRadius: 16,
        x: 0,
        cursor: "pointer",

        // onrest event
        onRest: { 
            x: () => console.log('x.onRest'),
            y: () => console.log('y.onRest'),
        },
        
    }))
    styles.onStart = (setstyles.start({border:"2px solid black"}))

    // clicking event function making for an element
    const [x, setx] = useState(10);
    const [rotate, setrotate] = useState(0)
    const color = ["red", "yellow", "grey"]
    const click = () => {
        x > 60 ? setx(x - 100) : setx(x + 10);
        x > 60 ? setrotate(180) : setrotate(0)
        setstyles.start(
            {
                x: x,
                backgroundColor: color[Math.floor(Math.random() * color.length)],
                rotateZ: rotate
            }
        )
    }
    return (
        <>
            <animated.div style={styles} onClick={click} />
        </>

    )
}
export { Loop, LoopFunction, LoopObject, Clickevent }