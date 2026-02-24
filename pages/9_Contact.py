import streamlit as st

# ---------- PAGE CONFIG ----------
st.set_page_config(page_title="Contact", layout="wide")

# ---------- CLEAN UI ----------
st.markdown("""
<style>
#MainMenu {visibility:hidden;}
footer {visibility:hidden;}
header {visibility:hidden;}

.block-container{
    padding-top:2rem;
    padding-bottom:2rem;
    max-width:1100px;
}
</style>
""", unsafe_allow_html=True)

# ---------- HEADER ----------
st.title("📬 Contact Me")
st.write("Have a job opportunity, project idea, or collaboration in mind? Fill out the form below and I’ll respond soon.")

# ---------- FORM ----------
form_url = "https://docs.google.com/forms/d/e/1FAIpQLSeC7x2oFQv6utUsvJ19tQYVSi6W76zUIn984H7oofDNI77wFA/viewform?embedded=true"

st.components.v1.html(
    f"""
    <div style="display:flex;justify-content:center;">
        <iframe src="{form_url}"
            width="900"
            height="1500"
            frameborder="0"
            style="border-radius:12px;border:1px solid #ddd;">
        </iframe>
    </div>
    """,
    height=1550,
)
