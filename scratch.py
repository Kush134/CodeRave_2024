import pypandoc

def markdown_to_docx(md_string, output_file):
    # Convert Markdown to DOCX using pandoc
    pypandoc.convert_text(md_string, 'docx', format='md', outputfile=output_file)

# Example usage
markdown_string = """
# Title

This is a paragraph.

- List item 1
- List item 2
"""

output_file = "output.docx"
markdown_to_docx(markdown_string, output_file)
print(f"Markdown converted to DOCX and saved as '{output_file}'")
