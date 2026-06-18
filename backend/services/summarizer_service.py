from google import genai

from backend.core.config import GEMINI_API_KEY


client = genai.Client(
    api_key=GEMINI_API_KEY
)


def summarize_article(text: str):

    text = text[:6000]

    prompt = f"""
    Summarize the following financial news article.

    Requirements:
    - 3 to 5 sentences
    - Professional tone
    - Mention key business impact
    - Mention major financial outcomes

    Article:

    {text}
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text