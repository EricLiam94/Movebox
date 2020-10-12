import React from "react";

// position:  postion [x,y]  of the box
// setPosition: set the position [x,y]
const Box = ({ position, setPosition }) => {

    // handle on mouse is down
    const handlePointerDown = e => {
        const el = e.target;
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        el.setPointerCapture(e.pointerId);
        setPosition({
            ...position,
            active: true,
            offset: {
                x,
                y
            }
        });
    };
    // handle when mouse is down and move
    const handlePointerMove = e => {
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        if (position.active) {
            setPosition({
                ...position,
                x: position.x - (position.offset.x - x),
                y: position.y - (position.offset.y - y)
            });
        }
    };

    // handle mouse up 
    const handlePointerUp = e => {
        setPosition({
            ...position,
            active: false
        });
    };

    return (
        <>

            <rect
                x={position.x}
                y={position.y}
                width={"100"}
                height={"100"}
                style={{ transition: "fill 0.4s" }}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerMove={handlePointerMove}
                fill={position.active ? "blue" : "black"}
            />
        </>
    );
};


export default Box;