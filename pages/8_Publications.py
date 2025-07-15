import streamlit as st
from PIL import Image
from pathlib import Path
import base64

st.set_page_config(page_title="Publications", layout="wide")

# --- Load Custom CSS ---
current_dir = Path(__file__).parent if "__file__" in locals() else Path.cwd()
css_file = current_dir.parent / "styles" / "publications.css"
with open(css_file) as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# --- Page Title ---
st.header("Publications", divider="red")
st.markdown("### 📚 Kickstart to Compiler Design Fundamentals", unsafe_allow_html=True)

# --- Paths ---
cover_img = current_dir.parent / "assets" / "coverpage.jpg"
sneak_peek_file = current_dir.parent / "assets" / "sneak_peek.pdf"
cover = Image.open(cover_img)

# --- Book Overview Section ---
col1, col2 = st.columns((1.2, 2))

with col1:
    st.image(cover, use_container_width=True, caption="Kickstart to Compiler Design Fundamentals")

with col2:
    st.subheader("About the Book", divider="blue")
    st.write("""
💡 Whether you're a CS student, an aspiring compiler engineer, or a software development enthusiast, this book breaks down the complex process of compiling—from source code to optimized machine instructions.

🔥 Don’t just write code. Understand how it’s executed.  
📘 Co-Authored by Divyashree Mallarapu, Published June 2025.
    """)

    col_a, col_b = st.columns(2)

    with col_a:
        st.markdown("#### 🛒 Purchase Links")
        st.markdown("""
- [International - AVA](https://orangeava.com/products/kickstart-compiler-design-fundamentals)  
- [India - AVA](https://orangeava.in/products/kickstart-compiler-design-fundamentals)  
- [Amazon International](https://shorturl.at/xUHdt)  
- [Amazon India](https://shorturl.at/zqMaj)
""")

    with col_b:
        st.markdown("#### 🔗 Share")
        st.markdown("""
<a href="https://www.linkedin.com/sharing/share-offsite/?url=https://orangeava.com/products/kickstart-compiler-design-fundamentals" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="28" style="margin-right:10px">
</a>
<a href="https://api.whatsapp.com/send?text=Check out this book: Kickstart to Compiler Design Fundamentals - https://orangeava.com/products/kickstart-compiler-design-fundamentals" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="28">
</a>
""", unsafe_allow_html=True)

