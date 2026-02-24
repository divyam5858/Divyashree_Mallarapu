import streamlit as st
from pathlib import Path

# --- Page Config ---
st.set_page_config(page_title="Contact", layout="wide")

# --- Hide Streamlit default UI elements (menu, footer) ---
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .block-container {
            padding-top: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            padding-right: 0rem;
        }
    </style>
""", unsafe_allow_html=True)

# --- Embed Full Page Google Form ---
form_url = "https://docs.google.com/forms/d/e/1FAIpQLSeC7x2oFQv6utUsvJ19tQYVSi6W76zUIn984H7oofDNI77wFA/viewform?embedded=true"
st.components.v1.html(
    f"""
    <iframe src="{form_url}"
        width="100%"
        height="1600"
        frameborder="0"
        style="border:none;">
    </iframe>
    """,
    height=1650,
)
