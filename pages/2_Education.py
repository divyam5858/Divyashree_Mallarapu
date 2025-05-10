import streamlit as st
from PIL import Image
from pathlib import Path

st.set_page_config(layout="wide")

st.header("Education", divider="red")

PESITM = Image.open("assets/pesitm.png")

current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "education.css"

with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

with st.container():

    image_column, text_column = st.columns((1,2.5))
    with image_column:
        st.image(PESITM, width=200, caption="PES Institute of Technology and Management")

    with text_column:
        st.write("###  Bachelor of Engineering, [_PESITM_](https://pestrust.edu.in/pesitm/) (2022-2026)")
        st.write("##### Branch: Artificial Intelligence and Machine Learning")
        st.write("**Relevant Coursework:**  Data Structures and Algorithms, Data Base Management Systems, Analysis of Algorithms Artificial Intelligence, Machine Learning,  Deep Learning, Computer Vision, Natural Language Processing, Cloud Computing.")

NPU = Image.open("assets/narayana.jpeg")

with st.container():

    image_column, text_column = st.columns((1,2.5))
    with image_column:
        st.image(NPU, width=200, caption="Narayana PU College")

    with text_column:
        st.write("###  Pre-University Course, [_NPU_](https://narayanapuccollege.com/) (2018-2020)")
        st.write("##### Board: Karnataka Pre-University Education Board")
        st.write("Subjects: Physics, Chemistry, Mathematics, Biology")

sjes = Image.open("assets/sjes.png")

with st.container():

    image_column, text_column = st.columns((1,2.5))
    with image_column:
        st.image(sjes, width=200, caption="SJES Central School")

    with text_column:
        st.write("###  Secondary Education, [_SJES_](https://www.sjescollege.com/) (2008-2018)")
        st.write("##### Board: Central Board of Secondary Education")
        st.write("Subjects: English, Mathematics, Science, Social Studies, Hindi, Computers")
      