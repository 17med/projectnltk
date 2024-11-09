from flask import Flask, flash, request, redirect, url_for,send_from_directory,abort
from werkzeug.utils import secure_filename
import os
from Fonctions.fonction import convert_pdf_to_text
from Fonctions.DB import save_new_user
from Fonctions.IndexManager import newadd,search
from flask_cors import CORS, cross_origin
UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'pdf'}
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
@cross_origin()
def upload_file():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        age = request.form.get('age')


        if not username:
            flash('No username provided')
            return redirect(request.url)

        
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)

        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)

        if file and allowed_file(file.filename):
            
            original_filename = secure_filename(file.filename)
            id=save_new_user(username,email,age)
            filename = f"{id}.pdf"
            
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            t=convert_pdf_to_text(filepath)
            newadd(t,id)
            return 'done'
        else:
            return 'Invalid file type'
    
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post action='/upload' enctype=multipart/form-data>
    <input type=text name=username placeholder='Enter your name'><br/><br/>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

@app.route("/search", methods=['GET'])
@cross_origin()
def searchx():
    query = request.args.get('query')
    print(str(query))
    
    result = search(str(query))
    return {'result': result}

@app.route('/show/<int:id>', methods=['GET'])
def show_pdf(id):
    
    filename = f'{id}.pdf'

    
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    if os.path.exists(file_path):
        
        return send_from_directory(UPLOAD_FOLDER, filename)
    else:
        
        abort(404, description="File not found")
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
