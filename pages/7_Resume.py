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

# ---------- PATH SETTINGS ----------
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
resume_file = current_dir.parent / "assets" / "Divyashree_M.pdf"
profile_pic_path = current_dir.parent / "assets" / "profile.jpg"
css_file = current_dir.parent / "styles" / "resume.css"

with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

profile_pic = Image.open(profile_pic_path)

with open(css_file) as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)


# ---------- HERO ----------
with st.container():
    left_column, right_column = st.columns((1, 2))

    with left_column:
        st.markdown(
            f'<img src="data:image/jpeg;base64,{profile_pic_to_base64(profile_pic)}" class="profile-pic">',
            unsafe_allow_html=True
        )

    with right_column:
        st.title("Divyashree Mallarapu")
        st.write("AI / ML Engineer • Fullstack Developer • Deployment-Focused Builder")
        st.write("Building real-world AI systems, web applications, and production deployments.")

        st.download_button(
            label="📄 Download Resume",
            data=PDFbyte,
            file_name=resume_file.name,
            mime="application/octet-stream",
        )

        st.write("📫 mdivya0212@gmail.com")
        st.write("📱 +91 6363961217")

        st.markdown(
            social_icons(
                32, 32,
                LinkedIn="https://www.linkedin.com/in/divyashree-mallarapu",
                GitHub="https://github.com/divyam5858",
                Instagram="https://www.instagram.com/divyashree_mallarapu",
                Twitter="https://x.com/Divya_Mallarapu",
                Foundit="https://www.foundit.in/seeker/profile"
            ),
            unsafe_allow_html=True
        )


# ---------- SKILLS ----------
st.subheader("Skills", divider="red")

st.markdown("""
**AI & Machine Learning:** Computer Vision, NLP, Deep Learning, Model Deployment  
**Programming:** Python, C, HTML, CSS, JavaScript  
**Web Development:** React, Node.js, Express, Flask, Streamlit, Gradio  
**Databases:** MySQL, MongoDB  
**Version Control & Deployment:** Git, GitHub, Streamlit Cloud, Railway, Render, Vercel  
**Libraries & Frameworks:** TensorFlow, PyTorch, Keras, OpenCV, Scikit-learn, Pandas, NumPy  
**Cloud Exposure:** Azure, CI/CD basics  
**Tools:** VS Code, LabelImg, Jupyter Notebook  
""")


# ---------- EDUCATION ----------
st.subheader("Education", divider="red")

st.markdown("""
### Bachelor of Engineering — [PESITM](https://pestrust.edu.in/pesitm/) (2022–2026)  
**Branch:** Artificial Intelligence and Machine Learning  

Relevant Coursework:  
Data Structures, DBMS, AI, Machine Learning, Deep Learning, Computer Vision, NLP, Cloud Computing
""")


# ---------- EXPERIENCE ----------
st.subheader("Experience", divider="red")

st.markdown("""
### AI Engineer Intern — [ResoluteAI Software](https://resoluteaisoftware.in/)  
**Aug 2024 – Feb 2025**

- Developed YOLO-based detection models and built real-time Streamlit applications  
- Implemented OCR pipelines using PaddleOCR and EasyOCR  
- Designed and fine-tuned image classification systems  
- Built generative AI systems for text-to-video and image generation
""")

st.markdown("""
### Enterprise Fullstack Development Intern (MERN) — Dhee Coding Lab *(Ongoing)*  

- Undergoing structured fullstack training using React, Node.js, Express, MongoDB  
- Practicing responsive UI engineering and real-world application workflows  
- Working with Git-based collaboration and deployment pipelines  
- Receiving exposure to Cloud & DevOps concepts (Jenkins, Azure, CI/CD)
""")


# ---------- PROJECTS ----------
st.subheader("Key Projects", divider="red")

st.markdown("""
**NeuroSense — Healthcare AI Platform**  
Multimodal clinical risk prediction system for Alzheimer’s and Parkinson’s with deployed web interface.

**RAG Document Chatbot**  
Retrieval-augmented AI chatbot enabling document-based contextual Q&A.

**AI Image Generator**  
Diffusion-based generative AI system converting text prompts into images.

**Industrial Defect Detection**  
YOLO + segmentation-based automated inspection system.

**Predictive Maintenance System**  
Machine learning solution for industrial failure prediction.
""")


# ---------- PUBLICATION ----------
st.subheader("Publication", divider="red")

st.markdown("""
**Kickstart to Compiler Design Fundamentals** — Co-Author (2025)  

- Explains full compilation workflow from source code to optimized machine instructions  
- Designed for students and developers seeking deep understanding of execution  

🔗 [Buy on AVA](https://orangeava.in/products/kickstart-compiler-design-fundamentals)  
🔗 [Amazon India](https://shorturl.at/zqMaj)
""")
