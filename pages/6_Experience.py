import streamlit as st
from PIL import Image
from pathlib import Path
import base64

st.set_page_config(layout="wide")
st.header("Experience", divider="red")

# Load image and encode as base64 for hyperlink display
resolute_image_path = "assets/resoluteai.png"
with open(resolute_image_path, "rb") as img_file:
    resolute_base64 = base64.b64encode(img_file.read()).decode()

# Load certificate file for download
certificate_file = "assets/certificate.jpg"
with open(certificate_file, "rb") as cert_file:
    cert_image = cert_file.read()
    
# 📄 Experience Letter Button (inside the work experience box)
experience_letter_file ="assets/experience_letter.pdf"
with open(experience_letter_file, "rb") as exp_file:
    exp_pdf = exp_file.read()

# Display Experience section
with st.container():
    image_column, text_column = st.columns((2, 5))

    with image_column:
        # Clickable logo
        st.markdown(
            f'<a href="https://resoluteaisoftware.in/" target="_blank">'
            f'<img src="data:image/png;base64,{resolute_base64}" width="200"/></a>',
            unsafe_allow_html=True
        )

        # Button just below the image
        st.download_button(
            label="📄 Completion Certificate",
            data=cert_image,
            file_name="Completion_Certificate.jpg",
            mime="image/jpeg"
        )
        st.download_button(
            label="📄 Experience Letter",
            data=exp_pdf,
            file_name="Experience_Letter.pdf",
            mime="application/pdf"
        )
  

    with text_column:
        st.subheader("AI Engineer Intern @ ResoluteAI Software Pvt Ltd")
        st.write("*Aug 2024 - Feb 2025*")
        st.markdown("""
    <div style="background-color: #1e1e1e; padding: 15px; border: 1px solid #444; border-radius: 10px;">
        <p style="margin: 0; color: #ffffff;">
            ► Developed YOLO-based object detection models achieving 95% accuracy and built production-grade real-time applications using Streamlit and OpenCV.<br>
            ► Implemented advanced OCR using PaddleOCR and EasyOCR, achieving 90% accuracy in extracting text from legal and financial documents.<br>
            ► Designed and fine-tuned image classification models (DenseNet, VGG19), improving accuracy by 20%.<br>
            ► Built Text to Video and Image Generation systems, leveraging.
        </p>
    </div>  
    """, unsafe_allow_html=True)
        # ---------- DCL MERN EXPERIENCE ----------

dcl_image_path = "assets/dcl_logo.png"
with open(dcl_image_path, "rb") as img_file:
    dcl_base64 = base64.b64encode(img_file.read()).decode()

with st.container():
    image_column, text_column = st.columns((2,5))

    with image_column:
        st.markdown(
            f'<a href="https://dheecodinglab.com/" target="_blank">'
            f'<img src="data:image/png;base64,{dcl_base64}" width="200"/></a>',
            unsafe_allow_html=True
        )

    with text_column:
        st.subheader("Enterprise Fullstack Development Intern (MERN) @ Dhee Coding Lab")
        st.write("*Feb 2026 – Present*")

        st.markdown("""
        <div style="background-color: #1e1e1e; padding: 15px; border: 1px solid #444; border-radius: 10px;">
            <p style="margin: 0; color: #ffffff;">
            ► Currently undergoing structured industry-oriented training in fullstack development using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.<br>
            ► Practicing responsive UI implementation, layout engineering, and real-world web application workflows.<br>
            ► Working with Git-based version control, collaborative development practices, and deployment workflows.<br>
            ► Receiving additional exposure to Cloud and DevOps fundamentals including Jenkins, Azure, and CI/CD concepts.
            </p>
        </div>
        """, unsafe_allow_html=True)

  
