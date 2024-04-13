import { Row, Col, Button } from "antd";

const Selector = (props) => {
    return (
        <Col span={22}>
            <Row justify="space-around" align="middle" gap={4}>
                <Col span={8}>
                    <Button
                        onClick={() => {
                            props.setSelected(0);
                        }}
                        className={
                            props.selected == 0
                                ? "selected-button "
                                : "unselected-button "
                        }
                        style={{
                            fontSize: 28,
                        }}
                        type="null"
                    >
                        <span
                            style={{
                                color:
                                    props.selected == 0
                                        ? "var(--main-dark)"
                                        : "var(--main-blue)",
                            }}
                        >
                            S
                        </span>
                        ummary.
                    </Button>
                </Col>
                <Col span={8}>
                    <Button
                        onClick={() => {
                            props.setSelected(1);
                        }}
                        className={
                            props.selected == 1
                                ? "selected-button"
                                : "unselected-button"
                        }
                        style={{
                            fontSize: 28,
                        }}
                        type="null"
                    >
                        <span
                            style={{
                                color:
                                    props.selected == 1
                                        ? "var(--main-dark)"
                                        : "var(--main-blue)",
                            }}
                        >
                            F
                        </span>
                        lashcards.
                    </Button>
                </Col>
                <Col span={8}>
                    <Button
                        onClick={() => {
                            props.setSelected(2);
                        }}
                        className={
                            props.selected == 2
                                ? "selected-button"
                                : "unselected-button"
                        }
                        style={{
                            fontSize: 28,
                        }}
                        type="null"
                    >
                        <span
                            style={{
                                color:
                                    props.selected == 2
                                        ? "var(--main-dark)"
                                        : "var(--main-blue)",
                            }}
                        >
                            Q
                        </span>
                        uiz.
                    </Button>
                </Col>
            </Row>
        </Col>
    );
};

export default Selector;
