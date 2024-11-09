# JobPortal

**JobPortal** is an academic project that combines a Flask backend with a React frontend, enabling PDF text extraction and keyword-based search. The platform uses NLTK to process text from PDF job descriptions, stores indexed data in SQLite, and provides a responsive UI for seamless user interaction.

## Project Overview

- **Backend**: Flask with SQLite and NLTK.
- **Frontend**: React, Vite, and React-Bootstrap.
- **Core Functionality**:
  - **PDF Parsing**: Extracts job descriptions from PDFs.
  - **Tokenization & Lemmatization**: Processes text with NLTK.
  - **Indexing & Search**: Indexes text in SQLite for keyword search.

## Testing the Application

To test the JobPortal frontend, visit the live site hosted on Azure:

[JobPortal Frontend](https://jobportalfrontend.azurewebsites.net)

## Technologies Used

### Backend

- **Flask**: Handles API requests.
- **SQLite**: Stores indexed data.
- **NLTK**: Manages NLP tasks.
- **PyPDF2**: Extracts text from PDFs.

### Frontend

- **React**: Builds dynamic UI.
- **Vite**: Optimizes development.
- **React-Bootstrap**: Creates responsive design.

## Features

1. **Document Upload** – Upload PDF job descriptions.
2. **Text Processing** – Tokenizes and lemmatizes data.
3. **Index Creation** – Stores processed data in SQLite.
4. **Keyword Search** – Search job descriptions via keywords.
