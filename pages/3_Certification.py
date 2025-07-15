import streamlit as st
from PIL import Image
from pathlib import Path

st.set_page_config(layout="wide")
st.header("Certifications & Internships", divider="red")

# Paths and styles
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "certification.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

# Images
infosys_springboard = Image.open("assets/infosys_springboard.png")
cognitive_class = Image.open("assets/cognitive_class.png")
nptel = Image.open("assets/nptel.png")
internpe = Image.open("assets/internpe.png")
resolute_cert = Image.open("assets/certificate.jpg")

# --- AI Engineer Internship at Resolute AI Software ---
with st.container():
    image_column, text_column = st.columns((1, 2.5))
    with image_column:
        st.image(resolute_cert)
    with text_column:
        st.subheader("AI Engineer Intern – Resolute AI Software", divider="blue")
        st.markdown("""
        - ► Completed 6-month remote internship as AI Engineer.
        - ► Worked on AI-based solutions, including defect detection, tracking, and segmentation.
        - ► Received internship completion certificate.
        """)
        with open("assets/certificate.jpg", "rb") as file:
            st.download_button("📄 View Certificate", file, file_name="ResoluteAI_Certificate.jpg", mime="image/jpeg")

# --- Python Internship at InternPe ---
with st.container():
    image_column, text_column = st.columns((1, 2.5))
    with image_column:
        st.image(internpe)
    with text_column:
        st.subheader("Python Programming Intern – InternPe", divider="blue")
        st.markdown("""
        - ► Gained hands-on experience developing Python applications.
        - ► Built automation and beginner AI/ML models.
        """)
        with open("assets/internpe.PDF", "rb") as file:
            st.download_button("📄 View Certificate", file, file_name="InternPe_Certificate.pdf", mime="application/pdf")

# --- Computer Vision 101 - Infosys Springboard ---
with st.container():
    image_column, text_column = st.columns((1, 2.5))
    with image_column:
        st.image(infosys_springboard)
    with text_column:
        st.subheader("Computer Vision 101 – Infosys Springboard", divider="blue")
        st.markdown("""
        - ► Learned the fundamentals of image processing, object detection, and deep learning for CV.
        """)
        with open("assets/Computer_vision.pdf", "rb") as file:
            st.download_button("📄 View Certificate", file, file_name="Computer_Vision_Infosys.pdf", mime="application/pdf")

# --- Deep Learning with TensorFlow – IBM / Cognitive Class ---
with st.container():
    image_column, text_column = st.columns((1, 2.5))
    with image_column:
        st.image(cognitive_class)
    with text_column:
        st.subheader("Deep Learning with TensorFlow – IBM / Cognitive Class", divider="blue")
        st.markdown("""
        - ► Covered deep learning basics, TensorFlow APIs, and CNN/RNN architectures.
        - ► Practical implementation of DL models using TensorFlow.
        """)
        with open("assets/TensorFlow.pdf", "rb") as file:
            st.download_button("📄 View Certificate", file, file_name="DeepLearning_TensorFlow_IBM.pdf", mime="application/pdf")

# --- NPTEL C Programming Course – IIT Kharagpur ---
with st.container():
    image_column, text_column = st.columns((1, 2.5))
    with image_column:
        st.image(nptel)
    with text_column:
        st.subheader("Problem Solving through Programming in C – NPTEL (IIT Kharagpur)", divider="blue")
        st.markdown("""
        - ► 12-week online course covering C language fundamentals, problem solving, and logic development.
        """)
        with open("assets/C.pdf", "rb") as file:
            st.download_button("📄 View Certificate", file, file_name="NPTEL_C_Programming.pdf", mime="application/pdf")