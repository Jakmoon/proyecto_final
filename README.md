# **Private Tutoring Service Website**

### **Overview**

This project is a private tutoring service website that allows users to book tutoring slots through a calendar interface. Key features include:
User Accounts: Students can create accounts, log in, and book available time slots.
Calendar Integration: Users can view available slots and book sessions.
Admin Features: The tutor (admin) can:
Manage the calendar.
Accept or decline session requests.
Manage offers and bookings.

The project is built using Node.js, Express, and PostgreSQL, with live-reloading during development enabled by BrowserSync.

#Prerequisites
Ensure you have the following installed:

Node.js: v14 or later
npm: v6 or later
Docker: v20 or later
Docker Compose: v1.29 or later

Setup Instructions

Follow these steps to install and run the project:

#1. Clone the Repository

git clone <repository-url>
cd proyecto_final

#2. Install Dependencies

Install all required Node.js dependencies:
npm install

#3. Set Up Environment Variables

Copy the .env.example file and modify it to configure your database connection:
cp .env.example .env

Example .env file:

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=tutoring_service

#4. Start the Application with Docker

Build and run the application using Docker Compose:
docker-compose up --build

This command will:

Start the Node.js server on port 3000.
Start BrowserSync on port 3002 for live reloading.
Initialize the PostgreSQL database on port 5432.


#5. Access the Application

Backend (Node.js): http://localhost:3000
Frontend with Live Reloading (BrowserSync): http://localhost:3002

#6. Project Structure

proyecto_final/
├── db/                 # Database initialization scripts
│   └── init.sql
├── public/             # Frontend files (HTML, CSS, JS)
├── app.js              # Main application file
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker build instructions
├── docker-compose.yml  # Docker Compose configuration
├── .env.example        # Environment variable template
└── README.md           # Project documentation
