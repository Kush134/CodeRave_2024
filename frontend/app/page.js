import { Col, Row, Space, Flex } from "antd";
import { FolderUp, BookCopy, BookOpenCheck } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import CustomTypewriter from "@/components/CustomTypewriter";
import UploadButton from "@/components/UploadButton";
import "react-toastify/dist/ReactToastify.css";

const api_server = "http://localhost:5000/";

const Home = () => {
    async function onUploadButtonClick() {
        fetch(api_server + "/upload");
    }

    return (
        <>
            <Row
                justify="center"
                align="middle"
                style={{
                    marginTop: "34px",
                    marginBottom: "120px",
                }}
            >
                <Col
                    xs={24}
                    sm={20}
                    md={20}
                    lg={20}
                    xl={20}
                    xxl={20}
                    justify="center"
                    align="middle"
                >
                    <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                        AI{" "}
                        <span style={{ color: "var(--main-blue)" }}>
                            learning
                        </span>
                    </h1>
                    <h1
                        style={{
                            textAlign: "center",
                            marginTop: "-16px",
                        }}
                    >
                        assistant.
                    </h1>

                    <h3 style={{ marginTop: "20px" }}>
                        <CustomTypewriter />
                    </h3>

                    <p
                        style={{
                            marginTop: "60px",
                            marginBottom: "20px",
                            fontSize: "22px",
                        }}
                    >
                        Upload <b>MP4/MP3/PDF/DOCX/TXT/HTML/MD/PPTX</b> File
                    </p>
                    <UploadButton />
                    <Flex
                        justify="center"
                        align="space-between"
                        style={{ marginTop: "80px", marginBottom: "80px"}}
                        gap="large"
                    >
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{ marginRight: "20px" }}
                        >
                            <FolderUp size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>Upload File</h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Upload a video, audio, pdf, word document, or
                                text file to get started!
                            </p>
                        </Col>
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{
                                marginRight: "20px",
                                marginLeft: "20px",
                            }}
                        >
                            <BookCopy size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>
                                Customized Study Tools
                            </h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Our AI Tool will create a personalized summary,
                                flashcards, and quiz
                            </p>
                        </Col>
                        <Col
                            justify="center"
                            align="middle"
                            span={6}
                            style={{ marginLeft: "20px" }}
                        >
                            <BookOpenCheck size={30} color="#3b82f6" />
                            <h3 style={{ marginTop: "10px" }}>
                                Share the Knowledge
                            </h3>
                            <p
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                    marginTop: "15px",
                                }}
                            >
                                Share the study guide by sharing the link, or
                                exporting it to a Word document!
                            </p>
                        </Col>
                    </Flex>
                </Col>
            </Row>
            <ToastContainer position="bottom-right" />
        </>
    );
};

export default Home;
