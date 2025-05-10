import streamlit as st
from streamlit_extras.mention import mention
from PIL import Image
from pathlib import Path

st.set_page_config(layout="wide")

st.header("Projects", divider="red")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "projects.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

# Load project images
rubber_img = Image.open("assets/rubber_defect.png")
bias_img = Image.open("assets/political_bias.jpeg")
rag_img = Image.open("assets/rag_chatbot.jpg")
maintenance_img = Image.open("assets/predictive_maintenance.jpeg")
image_gen_img = Image.open("assets/ai_image_gen.jpeg")

# --- Defect Detection in Rubber ---
with st.container():
    text_column, image_column = st.columns((3,1))
    with text_column:
        st.subheader("Defect Detection in Rubber (YOLO & SAM)", divider="blue")
        st.write("*Industrial AI Project*")
        st.markdown("""
            - ► Developed a defect detection pipeline combining **YOLOv8** for object detection and **SAM** for segmentation.
            - ► Accurately identifies defects on rubber blocks in manufacturing settings.
        """)
        col1, col2 = st.columns(2)
        with col1:
            mention(label="GitHub Repo", icon="github", url="https://github.com/divyam5858/Defect_detection-YOLO-SAM")

    with image_column:
        st.image(rubber_img)

# --- Political Bias Detection ---
with st.container():
    text_column, image_column = st.columns((3,1))
    with text_column:
        st.subheader("Political Bias Detection App (Streamlit)", divider="blue")
        st.write("*NLP + Streamlit App*")
        st.markdown("""
            - ► Scrapes political news and classifies article bias into **Left, Center, or Right** using NLP models.
            - ► Detects potential misinformation and offers transparent insight into news sources.
        """)
        col1, col2 = st.columns(2)
        with col1:
            mention(label="GitHub Repo", icon="github", url="https://github.com/divyam5858/AQI-Predictor")
        with col2:
            mention(label="Live App", icon="streamlit", url="https://political-bias-detection-app.streamlit.app/")

    with image_column:
        st.image(bias_img)

# --- RAG Document Chatbot ---
with st.container():
    text_column, image_column = st.columns((3,1))
    with text_column:
        st.subheader("RAG Document Chatbot (Retrieval-Augmented Generation)", divider="blue")
        st.write("*Generative AI Project*")
        st.markdown("""
            - ► Combines **embedding-based retrieval** and **language generation** to build a document-aware chatbot.
            - ► Provides contextual answers based on document content using FAISS and LLMs.
        """)
        col1, col2 = st.columns(2)
        with col1:
            mention(label="GitHub Repo", icon="github", url="https://github.com/divyam5858/RAG-Document-Chatbot")
        with col2:
            mention(label="Live App", icon="streamlit", url="https://rag-document-chatbot-7848.streamlit.app/")

    with image_column:
        st.image(rag_img)

# --- Predictive Maintenance ---
with st.container():
    text_column, image_column = st.columns((3,1))
    with text_column:
        st.subheader("Predictive Maintenance for Industrial Machinery", divider="blue")
        st.write("*Sensor-based ML Project*")
        st.markdown("""
            - ► Developed ML models to predict equipment failures using time-series sensor data.
            - ► Enables proactive maintenance and reduces operational downtime.
        """)
        col1, _ = st.columns(2)
        with col1:
            mention(label="GitHub Repo", icon="github", url="https://github.com/divyam5858/Predictive-Maintenance-Industrial-Machinery")

    with image_column:
        st.image(maintenance_img)

# --- AI Image Generator ---
with st.container():
    text_column, image_column = st.columns((3,1))
    with text_column:
        st.subheader("AI Image Generator (Text-to-Image using Diffusion Models)", divider="blue")
        st.write("*Creative Generative AI Project*")
        st.markdown("""
            - ► Built a generative tool that transforms text prompts into realistic images using **diffusion models**.
            - ► Supports creative AI-driven content generation with impressive output quality.
        """)
        col1, col2 = st.columns(2)
        with col1:
            mention(label="GitHub Repo", icon="github", url="https://github.com/divyam5858/AI_Image_Generater")
        with col2:
            mention(label="Live App", icon="streamlit", url="https://aiimagegenerater.streamlit.app/")

    with image_column:
        st.image(image_gen_img)
