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
    

st.markdown(f'<p style="font-size: 20px;">Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, MERN, Data Structures, Database, Computer Networking</p>', unsafe_allow_html=True)

txt3("Programming Languages", "`Python`, `C`, `HTML`, `CSS`, `JavaScript`")

txt3("Web & Application Development", "`React`, `Node.js`, `Express.js`, `Flask`, `Streamlit`, `Gradio`")

txt3("Databases", "`MySQL`, `MongoDB`")

txt3("Machine Learning & AI", "`TensorFlow`, `Keras`, `Scikit-learn`, `YOLO (v5, v8)`, `OpenCV`, `Hugging Face Transformers`")

txt3("Data Analysis & Visualization", "`NumPy`, `Pandas`, `Matplotlib`, `Seaborn`")

txt3("Version Control & Deployment", "`Git`, `GitHub`, `Streamlit Cloud`, `Railway`, `Render`, `Vercel`, `Hugging Face Spaces`")

txt3("Cloud Platforms", "`Azure`, `Google Cloud Platform`")

txt3("Developer Tools", "`VS Code`, `Jupyter Notebook`, `Collab Notebook`, `PyCharm`, `LabelImg`,`labelme`")

txt3("Leadership & Activities", "`Hackathon Mentor`, `Final-year Project Lead`, `Workshop on GitHub & Deployment`")
