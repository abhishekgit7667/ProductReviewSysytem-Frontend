# Product Review System - Frontend

## Overview

This is the frontend of the Product Review System built using React and Vite. It communicates with the backend REST APIs using Axios.

## Tech Stack

- React.js
- Vite
- Axios
- CSS

## Features

- Add Product Review
- View All Reviews
- Update Review
- Delete Review
- Product-wise Average Rating
- Dynamic Star Rating
- Responsive UI

## Project Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ReviewForm.jsx
│   │   └── ReviewList.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

## Backend Connection

The frontend connects to the backend using Axios.

```javascript
const API = axios.create({
    baseURL: "http://localhost:5000/api"
});
```

## Features Implemented

- Add Review
- Edit Review
- Delete Review
- View Reviews
- Product-wise Average Rating
- Dynamic Star Rating
- REST API Integration

## Future Enhancements

- User Authentication
- Search Reviews
- Filter by Product
- Pagination
- Dashboard Analytics

## Author

Abhishek Singh
