import streamlit as st
from pathlib import Path

st.set_page_config(layout="wide")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "education.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

st.header("Skills", divider="red")

def txt3(a, b):
  col1, col2 = st.columns([2,4])
  with col1:
    st.markdown(f'<p style="font-size: 20px;">{a}</p>', unsafe_allow_html=True)
  with col2:
    b_no_commas = b.replace(',', '')
    st.markdown(b_no_commas)
    

st.markdown(f'<p style="font-size: 20px;">Machine Learning, Deep Learning, Computer Vision, Docker, SQL</p>', unsafe_allow_html=True)

txt3("Programming Languages", "`Python`, `C`, `HTML`, `CSS`, `JavaScript`")
txt3("Developer Tools", "`VS Code`, `Git`, `GitHub`, `Google Cloud Platform (GCP)`, `Jupyter Notebook`, `PyCharm`")
txt3("Technologies & Frameworks", "`TensorFlow`, `Azure`, `Keras`, `YOLO (v5, v8, v11)`, `SAM2`, `OpenCV`, `Hugging Face`, `Gradio`, `Streamlit`, `Google API`, `Gradle`, `Maven`")
txt3("Database Management", "`MySQL`")
txt3("Operating Systems", "`Windows`")
txt3("Libraries", "`NumPy`, `Pandas`, `Matplotlib`, `Seaborn`, `Scikit-learn`, `Pillow`")
txt3("Tools", "`LabelImg`")
txt3("Soft Skills", "`Communication`, `Adaptability`, `Team Collaboration`, `Problem-Solving`, `Time Management`")