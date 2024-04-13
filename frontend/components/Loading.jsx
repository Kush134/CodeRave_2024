import { Spin, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
    return (
        <Col
            justify="center"
            align="middle"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{ fontSize: 84, color: "var(--main-blue)" }}
                        spin
                    />
                }
            />
        </Col>
    );
}
