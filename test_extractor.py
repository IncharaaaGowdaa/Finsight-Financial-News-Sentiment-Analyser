from backend.services.article_extractor import extract_article

url = input("Enter article URL: ") 

content = extract_article(url)

print("\n")
print(content[:3000])