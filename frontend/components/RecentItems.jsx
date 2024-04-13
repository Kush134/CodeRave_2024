import React from "react";
import { Row, Col, Button } from "antd";
import Link from "next/link";

const RecentItems = ({ id, title }) => {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                marginTop: "10px",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Row
                justify="space-between"
                align="middle"
                style={{
                    padding: "20px 60px 20px 60px",
                    minWidth: "100%",
                }}
            >
                <Col span={16} justify="start">
                    <h3 style={{ textAlign: "left", fontSize: "18px" }}>{title}</h3>
                </Col>

                <Col span={4}>
                    <Link href={`/${id}`}>
                        <Button type="null" className="button-default">
                            Study
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Row>
    );
};

export default RecentItems;
