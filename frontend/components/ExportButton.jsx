import { Button } from "antd";

const api_server = "http://localhost:5000/";
const ExportButton = ({ data, selected }) => {
    return (
        <Button
            onClick={async () => {
                const response = await fetch(api_server + "/export", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data, selected }),
                });

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "StudyShore.docx"; // Change to the filename you expect from Flask
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            }}
            className="button-default"
            style={{ marginTop: "20px", marginBottom: "20px" }}
        >
            Export {selected == 0 ? "Summary" : selected == 1 ? "Flashcards" : "Quiz"}
        </Button>
    );
};

export default ExportButton;
