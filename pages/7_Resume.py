from pathlib import Path
from PIL import Image
import streamlit as st
from utils import social_icons
import base64
from io import BytesIO

def profile_pic_to_base64(img):
    buffer = BytesIO()
    img.save(buffer, format="JPEG")
    return base64.b64encode(buffer.getvalue()).decode()


st.set_page_config(layout="centered")

# --- PATH SETTINGS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
resume_file = current_dir.parent / "assets" / "Divyashree_M.pdf"
profile_pic = current_dir.parent / "assets" / "profile.jpg"
css_file = current_dir.parent / "styles" / "resume.css"

# --- LOAD PDF, PROFILE PIC & CSS ---

with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

profile_pic = Image.open(profile_pic)

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

# --- HERO SECTION ---
with st.container():
    left_column, right_column = st.columns((1, 2))

    with left_column:
        st.markdown(
        f'<img src="data:image/jpeg;base64,{profile_pic_to_base64(profile_pic)}" class="profile-pic">',
        unsafe_allow_html=True
    )

    with right_column:
        st.title("Divyashree Mallarapu")
        st.write("AI & ML Developer | Published Author | Data-Centric Problem Solver")
        st.download_button(
            label=" 📄 Download Resume",
            data=PDFbyte,
            file_name=resume_file.name,
            mime="application/octet-stream",
        )
        st.write("📫", "mdivya0212@gmail.com")
        st.write("📱", "+91 6363961217")
        st.markdown(social_icons(32, 32, LinkedIn="https://www.linkedin.com/in/divyashree-mallarapu",
                                         GitHub="https://github.com/divyam5858",
                                         Instagram="https://www.instagram.com/divyashree_mallarapu",
                                         Twitter="https://x.com/Divya_Mallarapu",
                                         Foundit="https://www.foundit.in/seeker/profile"),
                                         unsafe_allow_html=True)


# --- Skills ---
st.write('\n')
st.subheader("Skills", divider="red")
st.write(
    """
- ► Machine Learning, Deep Learning, Computer Vision, Natural Language Processing
- ► Image and Video Processing
- ► Git
- ► SQL
- ► Programming languages: Python, C, HTML, CSS, JavaScript
- ► Cloud Platforms: Azure
- ► Database Management: MySQL, MongoDB
- ► Version Control: Git, GitHub
- ► Data Visualization: Matplotlib, Seaborn, Plotly
- ► Operating Systems: Windows
- ► Libraries & Frameworks: Ultralytics, PyTorch, Tensorflow, Keras, Streamlit, Gradio, Flask, OpenCV, Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, Pillow
- ► Tools: Labelimg
"""
)

# --- EDUCATION ---
st.write('\n')
st.subheader("Education", divider="red")

st.write(
    """
    ###  Bachelor of Engineering, [_PESITM_](https://pestrust.edu.in/pesitm/) (2022-2026)
    - ##### Branch: Artificial Intelligence and Machine Learning
    - **Relevant Coursework:**  Data Structures and Algorithms, Data Base Management Systems, Analysis of Algorithms Artificial Intelligence, Machine Learning,  Deep Learning, Computer Vision, Natural Language Processing, Cloud Computing.
    """
)

# --- WORK EXPERIENCE ---
st.write('\n')
st.subheader("Work Experience", divider="red")

st.write(
    """
**∎ AI Engineer Intern @ [ResoluteAI Software](https://resoluteaisoftware.in/)**<br>
**Aug 2024 - Feb 2025**
- ► Developed YOLO-based object detection models achieving 95% accuracy and built production-grade real-time applications using Streamlit and OpenCV.
- ► Implemented advanced OCR using PaddleOCR and EasyOCR, achieving 90% accuracy in extracting text from legal and financial documents.
- ► Designed and fine-tuned image classification models (DenseNet, VGG19), improving accuracy by 20%.
- ► Built Text to Video and Image Generation systems, leveraging
""",
    unsafe_allow_html=True
)

# 📄 Experience Letter Button (inside the work experience box)
experience_letter_file = current_dir.parent / "assets" / "experience_letter.pdf"

with open(experience_letter_file, "rb") as exp_file:
    exp_pdf = exp_file.read()

st.download_button(
    label="📄 Experience Letter",
    data=exp_pdf,
    file_name="Experience_Letter.pdf",
    mime="application/pdf"
)

# --- PROJECTS ---
st.write('\n')
st.subheader("Projects", divider="red")

# --- Project 1: Text to Image Generation App ---
st.write('\n')
st.write(
    """
**∎ Text to Image Generation App**
- ► Built a text-to-image generation model using diffusion models for high-quality image synthesis.
    """
)

# --- Project 2: RAG Document Chatbot ---
st.write('\n')
st.write(
    """
**∎ RAG Document Chatbot**
- ► Built an AI-powered document chatbot using retrieval-augmented generation (RAG) for intelligent Q&A.
    """
)

# --- Project 3: Defect Detection in Rubber ---
st.write('\n')
st.write(
    """
**∎ Defect Detection in Rubber**
- ► Developed a defect detection system for rubber blocks using YOLOv8 for object detection and SAM for segmentation.
    """
)

# --- Project 4: Predictive Maintenance for Industrial Machinery ---
st.write('\n')
st.write(
    """
**∎ Predictive Maintenance for Industrial Machinery**
- ► Created machine learning models to predict equipment failures, reducing downtime and optimizing maintenance schedules.
    """
)

# --- Project 5: Political Bias Detection App ---
st.write('\n')
st.write(
    """
**∎ Political Bias Detection App**
- ► Built an NLP model to analyze political news articles, classify bias (Left/Right/Center), detect fake news, and compare sources from multiple news websites.
    """
)

# --- PUBLICATIONS ---
st.write('\n')
st.subheader("Publications", divider="red")

st.write(
    """
**∎ Kickstart to Compiler Design Fundamentals**  
Co-Author | Published June 2025  
- Breaks down the compilation process from source code to optimized machine instructions.  
- Aimed at students and software developers for a deep understanding of how code executes.  
- 🔗 [Buy on AVA (India)](https://orangeava.in/products/kickstart-compiler-design-fundamentals) | [Amazon India](https://shorturl.at/zqMaj)
"""
)
