# import main Flask class and request object
from flask import Flask, request, jsonify
import numpy as np
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

# create the Flask app
app = Flask(__name__)
CORS(app)

df = pd.read_csv('quotes_dataset_title.csv')
#df = pd.read_csv('motivational_quotes_database.csv')
#print("==========1==========")
#print(df.head())
# Get tf-idf matrix using fit_transform function
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['Quotes'].values.astype('U')) # Store tf-idf representations of all docs
#print(X.shape) # (Number of songs, Number of unique words)

#http://127.0.0.1:5000/query?search_input=Python
@app.route('/query')
def query_example():
    # if key doesn't exist, returns None
    language = request.args.get('search_input')
    
    query = language
    query_vec = vectorizer.transform([query]) # Ip -- (n_docs,x), Op -- (n_docs,n_Feats)
    results = cosine_similarity(X,query_vec).reshape((-1,)) # Op -- (n_docs,1) -- Cosine Sim with each doc
    # Print Top 10 results
    json_results = []
    for i in results.argsort()[-20:][::-1]:
        #print(df.iloc[i,0],"--",df.iloc[i,1])
        json_results.append({ "quote" : df.iloc[i,0], "author" : df.iloc[i,1] })
        
    #print(json_results)
        
    #return '''<h1>The language value is: {}</h1>'''.format(language)
    return jsonify(json_results)
    
@app.route('/form-example')
def form_example():
    return 'Form Data Example'

@app.route('/json-example')
def json_example():
    return 'JSON Object Example'

if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
