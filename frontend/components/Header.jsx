import { Row, Col, Button } from "antd";
import Link from "next/link";
import UploadButton from "./UploadButton";

const Header = () => {
    return (
        <>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                    height: "84px",
                    width: "100%",
                    border: "none",
                    zIndex: "1000",
                }}
            >
                <Col flex={4}>
                    <Row
                        justify="start"
                        align="middle"
                        style={{ marginLeft: "100px" }}
                    >
                        <Link href="/" passHref>
                            <h3 style={{ fontSize: "28px", zIndex: "100" }}>
                                StudyNOW
                            </h3>
                        </Link>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row justify="space-around" align="middle">
                        <Link href="/recent" passHref>
                            <Button
                                type="null"
                                className="button-default"
                                style={{
                                    color: "var(--main-white)",
                                    backgroundColor: "var(--main-dark)",
                                }}
                            >
                                Recent Files
                            </Button>
                        </Link>
                        <UploadButton />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Header;
