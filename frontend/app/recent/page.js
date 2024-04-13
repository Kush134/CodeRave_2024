"use client";
import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import RecentItems from "@/components/RecentItems";

export default function recent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recent")
            .then((response) => response.json())
            .then((result) => setData(result["recent"]));
    }, []);

    return (
        <Row justify="center" align="middle">
            <Col
                span={12}
                style={{
                    marginTop: "144px",
                    marginBottom: "230px",
                }}
            >
                <Row justify="center" align="middle">
                    <h2 style={{ color: "var(--main-blue)", marginBottom: "30px" }}>Recent</h2>
                </Row>
                {data.map((item) => (
                    <RecentItems
                        key={item.id}
                        id={item.id}
                        title={item.title}
                    />
                ))}
            </Col>
        </Row>
    );
}
