import streamlit as st

def social_icons(width=24, height=24, **kwargs):
    icon_template = '''
    <a href="{url}" target="_blank" style="margin-right: 20px;">
        <img src="{icon_src}" alt="{alt_text}" width="{width}" height="{height}">
    </a>
    '''

    icon_sources = {
        "linkedin": "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        "github": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "instagram": "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
        "twitter": "https://cdn-icons-png.flaticon.com/512/733/733579.png",
        "foundit": "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
    }
        

    icons_html = ""
    for name, url in kwargs.items():
        key = name.lower()
        icon_src = icon_sources.get(key)
        if icon_src:
            icons_html += icon_template.format(
                url=url,
                icon_src=icon_src,
                alt_text=name.capitalize(),
                width=width,
                height=height
            )

    return icons_html
