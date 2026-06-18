import trafilatura


def extract_article(url: str):

    print("Fetching article...")

    downloaded = trafilatura.fetch_url(url)

    print("Fetch completed")

    if not downloaded:
        raise Exception("Unable to fetch article")

    print("Extracting content...")

    content = trafilatura.extract(downloaded)

    print("Extraction completed")

    return content