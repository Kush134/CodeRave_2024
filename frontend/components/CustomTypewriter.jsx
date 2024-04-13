"use client"
import React from "react";
import Typewriter from "typewriter-effect";

const CustomTypewriter = () => {
    return (
        <Typewriter
            options={{
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("Flashcards to Study ✅")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Personalized Summary ✍️")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Complete Quizzes and Scores ✅")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Complete AI Learning Assistant ✍️")
                    .pauseFor(1500)
                    .start();
            }}
        />
    );
};

export default CustomTypewriter;
