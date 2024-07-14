# OTT-Application

## Overview
The OTT Project is a microservices-based application designed to manage various aspects of an OTT media service. The project is divided into four main services:
1. User Service
2. Content Service
3. Streaming Service
4. Invoice Service

Each service is responsible for a specific set of functionalities, ensuring modularity and scalability.

## Table of Contents
- User Service
- Content Service
- Streaming Service
- Invoice Service
- Setup
- Technologies Used

## User Service

### Scope
The User Service manages all user-related functionalities, including user registration, authentication, and profile management.

### Features
- User Registration: Allows new users to register.
- User Authentication: Handles user login and logout.
- Profile Management: Enables users to view and update their profile information.

### Endpoints
- POST /users/adduser: Register a new user.
- GET /users: Get a list of all users.

### Usage
This service is essential for managing user data, ensuring secure authentication, and providing a personalized experience for each user.

## Content Service

### Scope
The Content Service is responsible for managing the media content available on the platform, including movies, TV shows, and other digital media.

### Features
- Content Management: Add, update, and delete content.
- Search Content: Search for content by various filters such as genre, release year, etc.
- Featured Content: Mark content as featured.

### Endpoints
- GET /content: Retrieve a list of all content.
- GET /content/:id: Retrieve content by ID.
- POST /content/add: Add new content.

### Usage
The Content Service allows administrators to manage the media library efficiently and provides users with access to a wide range of content.

## Streaming Service

### Scope
The Streaming Service handles all operations related to streaming content, including starting, stopping, and monitoring streaming sessions.

### Features
- Start Streaming: Start streaming a specific piece of content.
- Stop Streaming: Stop streaming the current content.
- Streaming Analytics: Monitor and log streaming activities.

### Endpoints
- POST /streaming/play/:id: Start streaming content by ID.
- POST /streaming/stop/:id: Stop streaming content by ID.
- GET /streaming/:id: Get streaming details by ID.

### Usage
This service is crucial for delivering content to users in real-time, ensuring smooth playback, and providing valuable insights into streaming performance.

## Invoice Service

### Scope
The Invoice Service manages billing and invoicing for the users, keeping track of transactions and payment history.

### Features
- Create Invoice: Generate a new invoice for a transaction.
- View Invoice: Retrieve invoice details by ID.
- List Invoices: Get a list of all invoices for a user.

### Endpoints
- POST /invoices/create: Create a new invoice.
- GET /invoices/:id: Retrieve an invoice by ID.
- GET /invoices/user/:userId: Retrieve all invoices for a user.

### Usage
The Invoice Service ensures accurate billing, provides users with a history of their transactions, and helps manage financial records efficiently.

## Setup

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KislayKashyap-hub/OTT-Application.git
