# QuickBlog

A full-stack blog application with admin panel.

## Features

- Blog posting and management
- Admin dashboard
- Comment system
- Newsletter subscription
- Image management with ImageKit
- Rate limiting
- JWT authentication

## Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- ImageKit API

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- ImageKit account

### Installation

1. Clone the repository
```bash
git clone https://github.com/Tejas-Kadam431/quickblog.git
cd quickblog
```

2. Install client dependencies
```bash
cd client
npm install
```

3. Install server dependencies
```bash
cd ../server
npm install
```

4. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
- MongoDB URI
- JWT Secret
- ImageKit credentials
- Admin email and password

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```

2. Start the frontend (in a new terminal)
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
quickblog/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── assets/
├── server/          # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── configs/
│   └── utils/
└── README.md
```

## License

MIT License
