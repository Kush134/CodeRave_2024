import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Col, Row } from "antd";

export default function Summary({ data }) {

    const newData = data.replace("** ", "** /n")

    return (
        <Row justify="center" align="middle">
            <Col
                span={18}
                style={{
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "1.6",
                    marginBottom: "30px",
                    paddingLeft: "50px",
                    padding: "40px 120px 40px 120px",
                    borderRadius: "20px",
                    boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.4)",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
            >
                <style>{`
            ul {
                list-style-type: disc;
                margin-bottom: 20px;
                padding-left: 20px;
            }

            ol {
                list-style-type: disc;
                margin-bottom: 20px;
                padding-left: 20px;
            }

            li {
                margin-bottom: 6px;

            }

            strong {
                font-weight: bold;
                font-size: 26px;
                color: var(--main-dark);
                margin-bottom: 20px;
            }

            p {
                margin-bottom: 20px;
                font-size: 18px;
                font-weight: 600;
            }
            `}</style>
                <ReactMarkdown
                    children={newData}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h2: ({ node, ...props }) => (
                            <h2
                                style={{
                                    color: "var(--main-blue)",
                                    fontSize: "24px",
                                    marginBottom: "10px",
                                }}
                                {...props}
                            />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul
                                style={{
                                    listStyleType: "disc",
                                    marginBottom: "20px",
                                    paddingLeft: "20px",
                                }}
                                {...props}
                            />
                        ),
                        li: ({ node, ...props }) => (
                            <li style={{ marginBottom: "10px" }} {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                            <strong style={{ fontWeight: "bold" }} {...props} />
                        ),
                    }}
                />
            </Col>
        </Row>
    );
}
