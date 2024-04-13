import { Col, Row } from "antd";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    backgroundColor: "var(--main-dark)",
                    height: "120px",
                    width: "100%",
                }}
                className="footer"
            >
                <Col>
                    <h3
                        style={{
                            fontSize: "28px",
                            color: "var(--main-white)",
                            cursor: "pointer",
                        }}
                    >
                        StudyNOW.
                    </h3>
                </Col>
                <Col>
                    <Col>
                        <p
                            style={{
                                color: "var(--main-white)",
                                textAlign: "center",
                            }}
                        >
                            Copyright © 2024 StudyNOW.
                        </p>
                        <p
                            style={{
                                color: "var(--main-white)",
                                textAlign: "center",
                                marginTop: "12px",
                            }}
                        >
                            CodeRave
                        </p>
                    </Col>
                </Col>
                <Col>
                    <h3
                        style={{
                            color: "var(--main-white)",
                        }}
                    >
                        Company
                    </h3>
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ marginTop: "12px" }}
                        gap={4}
                    >
                        <Link
                            href=""
                            passHref
                            legacyBehavior={false}
                            target="_blank"
                        >
                            <p
                                style={{
                                    color: "var(--main-white)",
                                    textDecoration: "none",
                                }}
                            >
                                CodeRave 2024
                            </p>
                        </Link>
                        
                    </Row>
                </Col>
            </Row>
        </>
    );
}
