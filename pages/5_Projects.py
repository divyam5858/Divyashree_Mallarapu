import streamlit as st
from PIL import Image
from pathlib import Path

st.set_page_config(layout="wide")
st.header("Projects", divider="red")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "projects.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

# Load project images
pdf_img = Image.open("assets/pdf.png")
rubber_img = Image.open("assets/rubber_defect.png")
bias_img = Image.open("assets/political_bias.jpeg")
rag_img = Image.open("assets/rag_chatbot.jpg")
maintenance_img = Image.open("assets/predictive_maintenance.jpeg")
image_gen_img = Image.open("assets/ai_image_gen.jpeg")
aqi_img = Image.open("assets/aqi.jpeg")
neuro_img = Image.open("assets/Neusrosense.jpeg")

# Icon URLs
GITHUB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
STREAMLIT_ICON = "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png"
HF_ICON = "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"

def icon_link(url, icon, label):
    return f"""
    <a href="{url}" target="_blank" style="text-decoration: none; margin-right: 15px;">
        <img src="{icon}" width="18" style="vertical-align: middle; margin-right: 6px;"> {label}
    </a>
    """

# --- Projects ---
def project_block(title, desc, bullets, github=None, live=None, live_type="streamlit", image=None):
    with st.container():
        text_column, image_column = st.columns((3, 1))
        with text_column:
            st.subheader(title, divider="blue")
            st.write(desc)
            st.markdown(bullets)
            col1, col2 = st.columns(2)
            if github:
                with col1:
                    st.markdown(icon_link(github, GITHUB_ICON, "GitHub Repo"), unsafe_allow_html=True)
            if live:
                with col2:
                    live_icon = STREAMLIT_ICON if live_type == "streamlit" else HF_ICON
                    label = "Live App"
                    st.markdown(icon_link(live, live_icon, label), unsafe_allow_html=True)
        if image:
            with image_column:
                st.image(image)

# --- Add Projects ---
project_block(
    "AI Image Generator (Text-to-Image using Diffusion Models)",
    "*Creative Generative AI Project*",
    """
    - ► Built a generative tool that transforms text prompts into realistic images using **diffusion models**.
    - ► Supports creative AI-driven content generation with impressive output quality.
    """,
    github="https://github.com/divyam5858/AI_Image_Generater",
    live="https://aiimagegenerater.streamlit.app/",
    live_type="streamlit",
    image=image_gen_img
)

project_block(
    "PDF Question Answering App",
    "*LangChain + Hugging Face + Streamlit Project*",
    """
    - ► Uses **LangChain**, **Sentence Transformers**, and **FAISS** to enable PDF-based QA.
    - ► Retrieves contextual chunks from PDFs and answers questions using `flan-t5-base` from Hugging Face.
    """,
    github="https://github.com/divyam5858/PDF_QA",
    live="https://pdf-query-answer.streamlit.app/",
    live_type="streamlit",
    image=pdf_img
)

project_block(
    "NeuroSense – Early Detection of Neurodegenerative Diseases",
    "*Healthcare AI + Gradio + Hugging Face Project*",
    """
    - ► AI-powered system for early-stage risk prediction of neurodegenerative diseases like **Alzheimer’s** and **Parkinson’s**.
    - ► Uses NLP-based questionnaire in Phase 1. Future work includes multimodal analysis.
    - ► Deployed using **Gradio** on **Hugging Face Spaces**.
    """,
    github="https://github.com/divyam5858/NeuroSense",
    live="https://huggingface.co/spaces/divyashree-03/NeuroSense",
    live_type="huggingface",
    image=neuro_img
)

project_block(
    "Defect Detection in Rubber (YOLO & SAM)",
    "*Industrial AI Project*",
    """
    - ► Developed a defect detection pipeline combining **YOLOv8** for object detection and **SAM** for segmentation.
    - ► Accurately identifies defects on rubber blocks in manufacturing settings.
    """,
    github="https://github.com/divyam5858/Defect_detection-YOLO-SAM",
    image=rubber_img
)

project_block(
    "Political Bias Detection App (Streamlit)",
    "*NLP + Streamlit App*",
    """
    - ► Scrapes political news and classifies article bias into **Left, Center, or Right** using NLP models.
    - ► Detects potential misinformation and offers transparent insight into news sources.
    """,
    github="https://github.com/divyam5858/AQI-Predictor",
    live="https://political-bias-detection-app.streamlit.app/",
    live_type="streamlit",
    image=bias_img
)

project_block(
    "RAG Document Chatbot (Retrieval-Augmented Generation)",
    "*Generative AI Project*",
    """
    - ► Combines **embedding-based retrieval** and **language generation** to build a document-aware chatbot.
    - ► Provides contextual answers based on document content using FAISS and LLMs.
    """,
    github="https://github.com/divyam5858/RAG-Document-Chatbot",
    live="https://rag-document-chatbot-7848.streamlit.app/",
    live_type="streamlit",
    image=rag_img
)

project_block(
    "Predictive Maintenance for Industrial Machinery",
    "*Sensor-based ML Project*",
    """
    - ► Developed ML models to predict equipment failures using time-series sensor data.
    - ► Enables proactive maintenance and reduces operational downtime.
    """,
    github="https://github.com/divyam5858/Predictive-Maintenance-Industrial-Machinery",
    image=maintenance_img
)

project_block(
    "Air Quality Index Predictor",
    "*Regression + Streamlit Project*",
    """
    - ► Predicts AQI values using **scikit-learn regression models** based on weather and pollution features.
    - ► Visualizes pollution trends through an interactive Streamlit dashboard.
    - ► Supports environmental awareness and informed health decisions.
    """,
    github="https://github.com/divyam5858/AQI-Predictor",
    live="https://airqualityindex-predictor.streamlit.app",
    live_type="streamlit",
    image=aqi_img
)
