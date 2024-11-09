# JobPortal Documentation

**JobPortal** is an academic project designed to help users upload job descriptions in PDF format. It provides a platform for companies to search for potential candidates based on keywords from their resumes. Employers can search for candidates by entering relevant keywords, and the system returns candidates whose profiles match the search query. The match is scored based on the percentage of the keyword's presence in the candidate's resume, which is extracted from the uploaded PDFs.

Built using Flask for the backend and React with Vite for the frontend, the system processes PDFs using NLTK and stores indexed data in a file, while user information is stored in an SQLite database.

## Architecture

The system follows a client-server architecture:

### Frontend (React with Vite)

- Provides a user interface where employers (companies) can upload PDFs, search for candidates by keywords, and view candidates' resumes.
- Employers can view detailed candidate profiles and see how well the candidates match their search query based on a score.
- Uses React-Bootstrap for responsive UI components.

### Backend (Flask)

- Handles requests from the frontend, processes uploaded PDFs, tokenizes and lemmatizes the text using NLTK, and stores the processed data in an index file.
- Stores user information (e.g., id, username, email, age) in an SQLite database.
- The indexed data (tokenized text from resumes) is saved in a file named `index.data` inside the `index` folder.
- When an employer searches for a keyword, the system calculates a score for each candidate based on the percentage of the keyword's occurrence in their resume.
- Uses PyPDF2 for PDF parsing.

### Database (SQLite)

- Stores user data (such as id, username, email, and age).
- The indexed resume data is not stored in the database but is saved in the `index.data` file inside the `index` folder.

## Technologies Used

### Backend:

- Flask Web framework
- SQLite Database
- NLTK Natural Language Processing
- PyPDF2 PDF Parsing
- Docker Containerization
- Docker Compose Multi-container orchestration
- Azure Cloud Hosting

### Frontend:

- React UI Framework
- Vite Development Build Tool
- React-Bootstrap UI Components
- Docker Containerization
- Docker Compose Multi-container orchestration
- Nginx Web Server

## Features

- **PDF Upload & Parsing**: Users (candidates) can upload their resumes in PDF format, which the backend processes to extract text.
- **Text Tokenization & Lemmatization**: NLTK processes the text of resumes to split it into tokens and lemmatize words, making it easier to search.
- **Indexing & Search**: The system indexes the extracted text from resumes and stores it in the `index.data` file inside the `index` folder. When an employer searches for a keyword (e.g., "Java Developer"), candidates whose resumes match the keyword are displayed with a score. The score is calculated based on the percentage of the keyword's match within the candidate's profile.
- **View Candidate Details**: Employers can click on a candidate's profile to see the full details of the resume.
- **User Information**: The system stores user data such as id, username, email, and age in the SQLite database.

## Workflow for Employers (Companies)

1. **Search for Candidates**: Employers can search for potential candidates by entering a keyword or phrase (e.g., "Python", "Software Engineer"). The system matches the keyword against the indexed resumes and returns a list of candidates ranked by relevance.
2. **View Candidate Profiles**: The list of candidates shows their name, a brief match score, and the option to view their full resume. Employers can click on a candidate's name to see the full details of the resume.

## How to Test

1. **Visit the frontend**: [JobPortal](#)

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

## Credit

This project was developed by **Ahmed Dhia Ben Achour**.
