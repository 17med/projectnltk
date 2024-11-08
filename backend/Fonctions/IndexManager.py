import pickle
import os
import nltk
from Fonctions.DB import get_user_by_id
nltk.download('stopwords')
nltk.download("punkt")
nltk.download('punkt_tab')
from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))

from nltk.stem import PorterStemmer
stemmer = PorterStemmer()

def save_if_not_exists(file_path, data):
    if not os.path.exists(file_path):
        with open(file_path, 'wb') as f:
            pickle.dump(data, f)
        print("Data saved.")
    else:
        print("File already exists.")

def save_data(file_path, data):
    with open(file_path, 'wb') as f:
        pickle.dump(data, f)
    print("Data saved.")        

def load_data(file_path):
    with open(file_path, 'rb') as f:
        data = pickle.load(f)
    return data

def newadd(text, id):
    tokens = nltk.word_tokenize(text)
    tokens = [word.lower() for word in tokens if word.isalnum() and word not in stop_words]
    tokens = [stemmer.stem(word) for word in tokens]
    
    l = load_data('./index file/index.data')
    for i, word in enumerate(tokens):
        if word in l:
            if id not in l[word]:
                l[word][id] = [i]
            else:
                l[word][id].append(i)    
        else:
            l[word] = {id: [i]}
    
    save_data('./index file/index.data', l)

def search(query):
    tokens = nltk.word_tokenize(query)
    tokens = [word.lower() for word in tokens if word.isalnum() and word not in stop_words]
    tokens = [stemmer.stem(word) for word in tokens]
    
    l = load_data('./index file/index.data')
    result = {}
    users=[]
    print(tokens)
    for word in tokens:
        if word in l:
            users=users+list(l[word].keys())
            listu=list(l[word].keys())
            for i in listu:
                if i in result:
                    result[i].append(word)
                else:
                    result[i]=[word]
    final=[]                
    for key in list(result.keys()):
        u=get_user_by_id(key)
        final.append({'id':u[0],'username':u[1],'email':u[2],'age':u[3],'keywords':result[key],'score':int((len(result[key])*100)/len(tokens))})
            
    return final       
save_if_not_exists('./index file/index.data', {})
print(load_data('./index file/index.data'))
