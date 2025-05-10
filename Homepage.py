import streamlit as st
from PIL import Image
from pathlib import Path
from utils import social_icons

st.set_page_config(page_title="My Portfolio", 
                   page_icon=":rocket:", 
                   layout="wide")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
resume_file = current_dir / "assets" / "Divyashree_M.pdf"
css_file = current_dir / "styles" / "homepage.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

img = Image.open("assets/profile.jpg")

with st.container():
    left_column, middle_column, right_column = st.columns((1,0.2,0.6))
    with left_column:
        st.header("About Me", divider='red')
        st.subheader("Divyashree Mallarapu")
        st.write("- 👋🏻 Hi, I'm Divyashree! I'm an AI/ML engineer, passionate about building innovative solutions. Explore my work and journey!")
        st.download_button(
        label=" 📄 Download Resume",
        data=PDFbyte,
        file_name=resume_file.name,
        mime="application/octet-stream")

        st.markdown(social_icons(32, 32, LinkedIn="https://www.linkedin.com/in/divyashree-mallarapu",
                                         GitHub="https://github.com/divyam5858",
                                         Instagram="https://www.instagram.com/divyashree_mallarapu",
                                         Twitter="https://x.com/Divya_Mallarapu"),
                                         unsafe_allow_html=True)

    with middle_column:
        st.empty()
    with right_column:
        st.image(img)

