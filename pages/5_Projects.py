import streamlit as st
from PIL import Image
from pathlib import Path

st.set_page_config(layout="wide")
st.header("Projects", divider="red")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "projects.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

# ---------- LOAD IMAGES ----------
pdf_img = Image.open("assets/pdf.png")
rubber_img = Image.open("assets/rubber_defect.png")
bias_img = Image.open("assets/political_bias.jpeg")
rag_img = Image.open("assets/rag_chatbot.jpg")
maintenance_img = Image.open("assets/predictive_maintenance.jpeg")
image_gen_img = Image.open("assets/ai_image_gen.jpeg")
aqi_img = Image.open("assets/aqi.jpeg")
neuro_img = Image.open("assets/Neusrosense.jpeg")
blogfit_img = Image.open("assets/blogfit_img.jpg")
dcl_img = Image.open("assets/dcl.jfif")

# ---------- ICONS ----------
GITHUB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
STREAMLIT_ICON = "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png"
HF_ICON = "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
VERCEL_ICON = "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"

def icon_link(url, icon, label):
    return f"""
    <a href="{url}" target="_blank" style="text-decoration:none;margin-right:18px;font-weight:500;">
        <img src="{icon}" width="18" style="vertical-align:middle;margin-right:6px;"> {label}
    </a>
    """

# ---------- PROFESSIONAL PROJECT CARD ----------
def project_block(title, desc, bullets, github=None, live=None, live_type="streamlit", image=None):

    # choose correct icon
    if live_type == "streamlit":
        live_icon = STREAMLIT_ICON
    elif live_type == "vercel":
        live_icon = VERCEL_ICON
    else:
        live_icon = HF_ICON

    with st.container():
        st.markdown("<div style='padding:18px 10px;border-radius:14px;background:#fafafa;margin-bottom:22px;'>",
                    unsafe_allow_html=True)

        text_column, image_column = st.columns((3,1))

        with text_column:
            st.subheader(title, divider="blue")
            st.markdown(desc)
            st.markdown(bullets)

            links = st.columns(2)
            if github:
                with links[0]:
                    st.markdown(icon_link(github, GITHUB_ICON, "GitHub Repo"), unsafe_allow_html=True)

            if live:
                with links[1]:
                    st.markdown(icon_link(live, live_icon, "Live App"), unsafe_allow_html=True)

        if image:
            with image_column:
                st.image(image, use_container_width=True)

        st.markdown("</div>", unsafe_allow_html=True)

# ---------- PROJECTS ----------

project_block(
"NeuroSense – Multimodal AI Platform for Early Detection of Neurodegenerative Diseases",
"*Healthcare AI • Machine Learning • Flask • Deployment*",
"""
- ► Developed an AI-powered clinical decision support platform for early prediction of **Alzheimer’s** and **Parkinson’s**.
- ► Implemented structured medical data processing with ML-based risk scoring and multimodal-ready architecture.
- ► Built full production web system with backend integration and deployed for real-world access.
""",
github="https://github.com/divyam5858/NeuroSense",
live="https://urbanupscaleproperties.com/neurosense/",
live_type="vercel",
image=neuro_img
)

project_block(
"EatFit Blog Website Replica – Responsive UI Clone",
"*HTML • CSS • Responsive Design*",
"""
- ► Built a responsive replica focusing on layout accuracy, typography, and visual hierarchy.
- ► Implemented Flexbox, Grid, reusable components, and structured spacing system.
- ► Deployed on Vercel ensuring consistent UI across desktop and mobile.
""",
github="https://github.com/divyam5858/Eatfitblog",
live="https://eatfitblog.vercel.app/",
live_type="vercel",
image=blogfit_img
)

project_block(
"Dhee Coding Lab Homepage Replica – Responsive Landing Page Clone",
"*HTML • CSS • UI Engineering*",
"""
- ► Developed pixel-accurate homepage clone with navigation structure and layout hierarchy.
- ► Used modern CSS layout techniques and reusable styling components.
- ► Deployed on Vercel with cross-device compatibility.
""",
github="https://github.com/divyam5858/dcl_HP_replica",
live="https://dcl-clone.vercel.app/",
live_type="vercel",
image=dcl_img
)

project_block(
"AI Image Generator",
"*Diffusion Models • Generative AI*",
"""
- ► Converts text prompts into high-quality generated images.
- ► Demonstrates creative AI-based visual synthesis pipeline.
""",
github="https://github.com/divyam5858/AI_Image_Generater",
live="https://aiimagegenerater.streamlit.app/",
live_type="streamlit",
image=image_gen_img
)

project_block(
"PDF Question Answering App",
"*LangChain • HuggingFace • Streamlit*",
"""
- ► Enables contextual question answering directly from uploaded PDFs.
- ► Uses FAISS retrieval + flan-t5 language model.
""",
github="https://github.com/divyam5858/PDF_QA",
live="https://pdf-query-answer.streamlit.app/",
live_type="streamlit",
image=pdf_img
)

project_block(
"Political Bias Detection App",
"*NLP • Streamlit*",
"""
- ► Classifies political news articles into Left / Center / Right categories.
- ► Provides transparency and misinformation awareness.
""",
github="https://github.com/divyam5858/Political-Bias-Detection-App",
live="https://political-bias-detection-app.streamlit.app/",
live_type="streamlit",
image=bias_img
)

project_block(
"RAG Document Chatbot",
"*Retrieval Augmented Generation • LLM*",
"""
- ► Combines embedding search and language generation for document-aware chatbot.
""",
github="https://github.com/divyam5858/RAG-Document-Chatbot",
live="https://rag-document-chatbot-7848.streamlit.app/",
live_type="streamlit",
image=rag_img
)

project_block(
"Predictive Maintenance for Industrial Machinery",
"*Machine Learning • Time Series*",
"""
- ► Predicts equipment failures using sensor data to enable proactive maintenance.
""",
github="https://github.com/divyam5858/Predictive-Maintenance-Industrial-Machinery",
image=maintenance_img
)

project_block(
"Air Quality Index Predictor",
"*Regression • Streamlit Dashboard*",
"""
- ► Predicts AQI using weather and pollution features with visualization dashboard.
""",
github="https://github.com/divyam5858/AQI-Predictor",
live="https://airqualityindex-predictor.streamlit.app",
live_type="streamlit",
image=aqi_img
)
