# Daily Stoic - Server

This is the back-end server for the Daily Stoic platform. It's responsible for handling API requests, connecting to data sources, and serving data to the front-end client. It's built using Express.js.

## Getting Started
These instructions will guide you through setting up and running the server application on your local machine.

## Prerequisites
Node.js and npm

## Install Dependencies:

Run the following command to install the necessary dependencies:
```
npm install
```

## Running the Server
To start the server application, simply run:
```
npm run dev
```
This will start the server, usually accessible at http://localhost:8000 or the port you've specified i the .env file. 

## Features
RESTful API: Provides endpoints for CRUD operations on posts, users, comments, etc.

## Technologies Used
- Express.js - The main framework used for building the API.
- axios - Used to make HTTP requests to external services.

## Environment Variables
Make sure to set up the necessary environment variables in a .env file in the server directory:
```
PORT=your_preferred_port
```