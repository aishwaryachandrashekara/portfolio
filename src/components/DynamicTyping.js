import React from "react";
import Typewriter from "typewriter-effect";

const DynamicTyping = (props) => {
    return (
        <div style={{
            fontFamily: "'Dancing Script', cursive, serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#ffffff",
            fontStyle: "italic",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            marginTop: "1rem",
            marginBottom: "2rem",
            textAlign: "center",
            minHeight: "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typewriter
                options={{
                    strings: props.titles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                    cursor: "|",
                    cursorClassName: "typewriter-cursor"
                }}
            />
        </div>
    );
}

export default DynamicTyping;