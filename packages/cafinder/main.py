import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np


def clean_title(title):
    return re.sub(r'[^a-zA-Z0-9 ]', '', title)


def search(title):
    tfidf = vectorizer.fit_transform(data['clean_names'])

    query_vec = vectorizer.transform([title])

    similarity = cosine_similarity(query_vec, tfidf).flatten()

    indices = np.argpartition(similarity, -5)[-5:]

    results = data.iloc[indices]

    return results


data = pd.read_json('yelp_academic_dataset_business.json', lines=True)

vectorizer = TfidfVectorizer(ngram_range=(1,2))

data['clean_names'] = data['name'].apply(clean_title)

print(search("starbucks"))



