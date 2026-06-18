from newspaper import Article


def extract_article(url: str):

    article = Article(url)

    article.download()

    article.parse()

    return {
        "title": article.title,
        "content": article.text
    }