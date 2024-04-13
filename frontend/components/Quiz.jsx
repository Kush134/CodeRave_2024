import Question from "./Question";
import { useState, useEffect } from "react";
import { Col, Button, Row, Divider } from "antd";

const Quiz = ({ data }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(
        Array(data.length).fill(-1)
    );
    const [submitted, setSubmitted] = useState(false);
    const [grade, setGrade] = useState("");

    const gradeMessage =
        grade >= 80
            ? "Great Job!"
            : grade >= 60
            ? "Good Job!"
            : "Keep Practicing!";

    useEffect(() => {
        let correct = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["index"] === selectedAnswer[i]) {
                correct += 1;
            }
        }
        // let percentage = Math.round((correct * 100) / data.length);
        setGrade(correct);
    }, [submitted]);

    const scrollToTop = () => {
        const targetY = 100;
        const stepDuration = 50;
        const scrollStep = window.scrollY / (500 / stepDuration);
        let scrollY = window.scrollY;

        const scrollAnimation = () => {
            scrollY -= scrollStep;
            if (scrollY <= targetY) {
                window.scrollTo(0, targetY);
                return;
            }

            window.scrollTo(0, scrollY);
            requestAnimationFrame(scrollAnimation);
        };

        requestAnimationFrame(scrollAnimation);
    };

    return (
        <Col span={18} justify="center" align="middle">
            {submitted ? (
                <Col style={{ marginBottom: "50px" }}>
                    <h3>{gradeMessage}</h3>
                    <h2 style={{ fontSize: "48px" }}>
                        {grade}
                        <span style={{ color: "var(--main-blue)" }}>/</span>
                        {data.length}
                    </h2>
                    <Button
                        className="button-default"
                        type="null"
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                            setSubmitted(false);
                            setSelectedAnswer(Array(data.length).fill(-1));
                        }}
                    >
                        Retake Quiz
                    </Button>
                    <Divider />
                </Col>
            ) : (
                <div></div>
            )}
            {data.map((val, i) => (
                <Question
                    key={i}
                    question={val.question}
                    possible_answers={val.possible_answers}
                    index={i}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    submitted={submitted}
                    answer={val.index}
                />
            ))}
            <Button
                className="button-default"
                type="null"
                style={{ marginTop: "20px" }}
                onClick={() => {
                    setSubmitted(true);
                    scrollToTop();
                }}
            >
                Submit Quiz
            </Button>
        </Col>
    );
};

export default Quiz;
