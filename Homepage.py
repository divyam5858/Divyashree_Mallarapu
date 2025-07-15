import streamlit as st
from PIL import Image
from pathlib import Path
from utils import social_icons
import base64
from io import BytesIO

# --- Convert Image to Base64 for Circular Display ---
def img_to_base64(image):
    buffer = BytesIO()
    image.save(buffer, format="JPEG")
    return base64.b64encode(buffer.getvalue()).decode()

# --- Page Settings ---
st.set_page_config(
    page_title="Divyashree Mallarapu", 
    page_icon="👩‍💻", 
    layout="wide"
)

# --- Paths ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
resume_file = current_dir / "assets" / "Divyashree_M.pdf"
css_file = current_dir / "styles" / "homepage.css"

# --- Load Resources ---
with open(css_file) as f:
    st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)

with open(resume_file, "rb") as pdf_file:
    PDFbyte = pdf_file.read()

img = Image.open("assets/profile.jpg")
img_base64 = img_to_base64(img)

# --- Layout ---
with st.container():
    left_column, middle_column, right_column = st.columns((1, 0.2, 0.6))

    with left_column:
        st.header("About Me", divider='red')
        st.write("""
👋🏻 Hi, I'm Divyashree Mallarapu — an aspiring AI & ML Engineer driven by a strong foundation in data-centric development and intelligent systems.  
With hands-on experience in building real-world AI solutions and publishing technical content, I’m passionate about creating impactful, human-centered applications.

My portfolio showcases projects in computer vision, NLP, and generative AI — along with publications and internships that reflect my dedication to innovation.

Let’s connect and collaborate to build smarter tech for a smarter world.
        """)

        st.download_button(
            label=" 📄 Download Resume",
            data=PDFbyte,
            file_name=resume_file.name,
            mime="application/octet-stream"
        )

    with middle_column:
        st.empty()

    with right_column:
        st.markdown(f"""
            <div style='text-align: center;'>
                <img src='data:image/jpeg;base64,{img_base64}' 
                     style='width: 250px; height: 250px; border-radius: 50%; object-fit: cover; border: 3px solid #d33682;' 
                     alt='Profile Picture'>
                <h4>Divyashree Mallarapu</h4>
            </div>
        """, unsafe_allow_html=True)
        st.markdown("""
            <div style='text-align: center;'>
                <p>AI & ML Engineer</p>
                <p>📍 Bengaluru, India</p>
            </div>
        """, unsafe_allow_html=True)
        st.markdown(social_icons(
            30, 30,
            LinkedIn="https://www.linkedin.com/in/divyashree-mallarapu",
            GitHub="https://github.com/divyam5858",
            Instagram="https://www.instagram.com/divyashree_mallarapu",
            Twitter="https://x.com/Divya_Mallarapu",
            Foundit="https://www.foundit.in/seeker/profile"
        ), unsafe_allow_html=True)
