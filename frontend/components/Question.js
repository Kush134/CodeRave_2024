import { Col, Row, Input, Radio, Space } from "antd";

const Question = (props) => {
    function getColor(submitted, selectedAnswer, answer) {
        if (!submitted) return "var(--main-dark)";
        if (selectedAnswer === answer) return "#18AE79";
        return "#FF7873";
    }

    return (
        <Col span={18} style={{ marginBottom: "25px" }}>
            <h3
                style={{
                    fontWeight: "600",
                    color: getColor(
                        props.submitted,
                        props.selectedAnswer[props.index],
                        props.answer
                    ),
                    textAlign: "left",
                    marginBottom: "10px",
                }}
            >
                {props.index + 1}. {props.question}
            </h3>
            {props.possible_answers.map((value, ind) => {
                return (
                    <Row
                        justify="start"
                        align="top"
                        key={value}
                        style={{ marginLeft: "50px" }}
                    >
                        <Radio.Group
                            value={props.selectedAnswer[props.index]}
                            onChange={() => {
                                props.setSelectedAnswer((old) => {
                                    let newAnswer = [...old];
                                    newAnswer[props.index] =
                                        newAnswer[props.index] === ind
                                            ? -1
                                            : ind;
                                    return newAnswer;
                                });
                            }}
                            disabled={props.submitted}
                        >
                            <Radio value={ind} style={{ textAlign: "start" }}>
                                <h3 style={{fontWeight: "500", fontSize: "18px"}}>{value}</h3>
                            </Radio>
                        </Radio.Group>
                    </Row>
                );
            })}
        </Col>
    );
};

export default Question;
