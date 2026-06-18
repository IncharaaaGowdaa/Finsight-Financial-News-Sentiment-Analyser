from backend.services.summarizer_service import summarize_article

text = """
Tesla reported record quarterly revenue and exceeded analyst expectations.
The company raised guidance for next quarter and announced strong growth projections.
"""

summary = summarize_article(text)

print(summary)