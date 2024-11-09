Here is the corrected version of the documentation:

---

# JobPortal Documentation

**JobPortal** is an academic project designed to help users upload, process, and search job descriptions from PDF files. Built using Flask for the backend and React with Vite for the frontend, the system processes PDFs using NLTK and stores indexed data in an SQLite database.

## Architecture

The system follows a client-server architecture:

1. **Frontend (React + Vite)**:

   - Provides a user interface to upload PDFs, view processed job descriptions, and search using keywords.
   - Uses **React-Bootstrap** for responsive UI components.
     ![front archi](https://github.com/17med/projectnltk/blob/main/pic/Screenshot%202024-11-09%20175211.png?raw=true)

2. **Backend (Flask)**:

   - Handles requests from the frontend, processes PDFs, tokenizes and lemmatizes the text using **NLTK**, and stores the processed data in **SQLite**.
   - Uses **PyPDF2** for PDF parsing.
   - Saves the index file inside the index file folder.
     ![backend archi](https://github.com/17med/projectnltk/blob/main/pic/Screenshot%202024-11-09%20174956.png?raw=true)

3. **Database (SQLite)**:
   - Stores all candidate data.
     ![db](https://github.com/17med/projectnltk/blob/main/pic/Screenshot%202024-11-09%20175453.png?raw=true)

## Technologies Used

- **Backend**:
  - Flask (Web framework)
  - SQLite (Database)
  - NLTK (Natural Language Processing)
  - PyPDF2 (PDF Parsing)
- **Frontend**:
  - React (UI Framework)
  - Vite (Development Build Tool)
  - React-Bootstrap (UI Components)

## Features

1. **PDF Upload & Parsing**: Users can upload PDF files, which the backend processes to extract text.

![backend archi](https://github.com/17med/projectnltk/blob/main/pic/Screenshot%202024-11-09%20175819.png?raw=true)

3. **Text Tokenization & Lemmatization**: NLTK processes the text to split it into tokens and lemmatize words for better searchability.
4. **Indexing & Search**: Extracted text is indexed in an index file and stored in the SQLite database, allowing for fast keyword-based searching.

![backend archi](https://github.com/17med/projectnltk/blob/main/pic/Screenshot%202024-11-09%20180617.png?raw=true)

6. **User Interface**: Simple and intuitive React interface to interact with the system.

## How to Test

1. Visit the frontend:
   - [JobPortal Frontend](https://jobportalfrontend.azurewebsites.net)

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/17med/projectnltk
   ```
2. **Install backend dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
3. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```
4. **Run the Flask backend**:
   ```bash
   flask run
   ```
5. **Run the React frontend**:
   ```bash
   npm run dev
   ```

## Requirements

- Python 3.x
- Flask
- SQLite
- NLTK
- PyPDF2
- Node.js and npm (for frontend)
