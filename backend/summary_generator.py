from docx import Document
import pypandoc

def export_summary(md_string, output_file):
    # Convert Markdown to DOCX using pandoc
    pypandoc.convert_text(md_string, 'docx', format='md', outputfile=output_file)
