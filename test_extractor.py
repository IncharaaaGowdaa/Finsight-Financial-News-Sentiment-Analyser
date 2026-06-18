from backend.services.article_extractor import extract_article

url = input("Enter article URL: ")

article = extract_article(url)

print("\nTITLE:\n")
print(article["title"])

print("\nCONTENT:\n")
print(article["content"][:3000])