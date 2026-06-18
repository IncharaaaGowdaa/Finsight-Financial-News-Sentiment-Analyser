from backend.services.sentiment_service import analyze_sentiment
text = """
Tesla reported record quarterly revenue and exceeded analyst expectations.
The company raised guidance for next quarter.
"""

result = analyze_sentiment(text)

print(result)