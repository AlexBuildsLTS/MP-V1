# **NorthMarket**

NorthMarket is a modern, responsive **Marketplace Platform** that connects buyers and sellers. Users can manage their profiles, create and view advertisements, explore categories, and analyze market trends with dynamic charts. This project features a robust backend built with Spring Boot and a powerful frontend developed using React and Tailwind CSS.

This project is a **Marketplace Platform** where users can register, log in, and perform actions based on their roles (buyer or seller). Sellers can post advertisements for their products, while buyers can browse, view details, and make purchases. The platform also features dynamic dashboards with market trends and category insights.

---

## **Table of Contents**

1. [Features](#features)
2. [Technology Stack](#technology-used)

- [Frontend](#frontend)
- [Backend](#backend)

3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)

---

## Features

- **User Management**
  - Register, authenticate users, and manage user roles (buyer or seller).
- **Advertisement Management**
  - Create, update, delete, and view advertisements.
- **Category Management**
  - Create, update, delete, and view categories and subcategories.
- **Dynamic Dashboards**
  - Interactive charts displaying market trends, user activities, and more.
- **Responsive Design**
  - Fully responsive and optimized for both mobile and desktop.
- **Secure API Endpoints**
  - All critical operations are secured using **JWT-based authentication**.

---

## **Technology Used**

### **Frontend**

- **Framework**: React with TypeScript
- **UI Framework**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Chart.js & React-Chartjs-2
- **Animations**: Framer Motion
- **Other Tools**:
  - Lucide React (Icons)
  - Sonner (Toast Notifications)
  - Radix UI

### **Backend**

- **Framework**: Spring Boot
- **Database**: MariaDB
- **Build Tool**: Maven
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger/OpenAPI

#### **Frontend Project Structure**

- **src/components**: Reusable UI and functional components like `Navbar`, `Sidebar`, `Charts`, etc.
- **src/pages**: Screens like `HomePage`, `LoginPage`, `Dashboard`, etc.
- **src/store**: Zustand stores for global state management (e.g., auth, UI state).
- **src/services**: Axios-based API clients for communication with the backend.
- **src/hooks**: Custom React hooks for utility purposes.
- **src/theme**: Theme providers for consistent styling (light/dark modes).
- **src/types**: TypeScript interfaces and type definitions.

### Backend Project Structure

The project follows the **MVC (Model-View-Controller)** design pattern and consists of the following packages:

- **controller**: Handles HTTP requests and provides RESTful APIs for the frontend.
- **service**: Contains business logic for user, advertisement, and category management.
- **repository**: Interfaces with the database using Spring Data JPA.
- **model**: Represents entities such as `User`, `Advertisement`, and `Category`.
- **security**: Configures authentication and authorization with JWT.

---

## **Project Structure**

### **Frontend Directory**

project/  
├── node_modules/ # Dependencies installed via npm  
├── src/ # Main source folder  
│ ├── components/ # Reusable components organized in subfolders  
│ │ ├── auth/ # Authentication-related components  
│ │ │ ├── AuthModal.tsx  
│ │ │ ├── SignInForm.tsx  
│ │ │ └── SignUpForm.tsx  
│ │ ├── charts/ # Chart components  
│ │ │ ├── BarChart.tsx  
│ │ │ ├── ChartAxis.tsx  
│ │ │ ├── ChartLegend.tsx  
│ │ │ ├── ChartTooltip.tsx  
│ │ │ └── LineChartComponent.tsx  
│ │ ├── dashboard/ # Dashboard-related components  
│ │ │ ├── Overview.tsx  
│ │ │ ├── RecentActivity.tsx  
│ │ │ └── StatCard.tsx  
│ │ └── ui/ # Reusable UI elements  
│ │ ├── Button.tsx  
│ │ ├── Input.tsx  
│ │ ├── Tooltip.tsx  
│ │ └── Toast.tsx  
│ ├── pages/ # Main page components  
│ │ ├── HomePage.tsx  
│ │ ├── LoginPage.tsx  
│ │ ├── RegisterPage.tsx  
│ │ └── BuyerDashboard.tsx  
│ ├── store/ # Zustand state management  
│ │ └── index.ts  
│ ├── App.tsx # Application entry point  
│ └── index.tsx # Renders the app to the DOM  
├── public/ # Static assets  
└── package.json # Project dependencies and scripts

Backend Directory

backend/  
backend/  
├── src/  
│ ├── main/  
│ │ ├── java/  
│ │ │ └── com/  
│ │ │ └── northmarket/  
│ │ │ ├── controller/ # Handles HTTP requests  
│ │ │ ├── service/ # Business logic  
│ │ │ ├── model/ # Entities and DTOs  
│ │ │ └── repository/ # Database access layer  
│ │ └── resources/  
│ │ ├── application.properties # Spring Boot configuration  
│ │ └── data.sql # Initial seed data  
├── pom.xml # Maven dependencies  
└── target/ # Compiled files

[View Flowchart](src/main/resources/Flowchart.svg)

### **Technology Stack for Calendar**

#### **Frontend**

- React
- React Big Calendar or FullCalendar
- Axios
- React Router

#### **Backend**

- Spring Boot
- MariaDB
- JPA



---

# README.MD Meeting Calendar Feature

The **Meeting Calendar Feature** is an integrated module for scheduling, managing, and viewing meetings or events within the NorthMarket platform. This feature is designed to enhance collaboration between users, facilitate event planning, and streamline user interactions.

---

## Features

- **User-Friendly Calendar UI**:
    - Interactive and intuitive calendar interface for scheduling and managing events.
- **CRUD Functionalities**:
    - Create, Read, Update, and Delete meeting events with ease.
- **Role-Based Access**:
    - Sellers and buyers can schedule meetings, while admins manage marketplace events.
- **Reminders**:
    - Automatic reminders for scheduled events via notifications.
- **Integration with Marketplace**:
    - Seamlessly connects with user and advertisement data for enhanced functionality.

---

## Technologies Used

### **Frontend**

- **ReactJS**: Core library for building the calendar UI.
- **React Router**: Handles navigation for calendar views.
- **Zustand**: State management for event data.
- **Axios**: Fetches and updates calendar events via API.
- **React Big Calendar**: Used for rendering the calendar.

### **Backend**

- **Spring Boot**: Framework for REST API development.
- **MariaDB**: Database for storing event data.
- **JWT Authentication**: Secures API endpoints.
- **Maven**: Dependency management.

---

## API Endpoints

### Event Management

1. `GET /api/events`  
   Retrieves a list of all events.  
   **Query Parameters**:

- `userId` (optional): Filter events by user.
2. `POST /api/events`  
   Creates a new event.  
   **Payload**:

  ```json
  {
    "title": "Meeting with John",
    "description": "Discuss new advertisement features",
    "startTime": "2024-12-07T10:00:00Z",
    "endTime": "2024-12-07T11:00:00Z",
    "userId": "12345"
  }
  ```


---

## File Structure

project/
│
├── backend/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/northmarket/calendar/
│ │ │ │ ├── controller/ # EventController.java
│ │ │ │ ├── model/ # Event.java
│ │ │ │ ├── repository/ # EventRepository.java
│ │ │ │ └── service/ # EventService.java
│ │ │ └── resources/
│ │ │ └── application.properties
│ ├── pom.xml
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── calendar/ # Calendar-related components
│ │ │ │ ├── CalendarView.tsx
│ │ │ │ ├── CreateEventModal.tsx
│ │ │ │ ├── EventCard.tsx
│ │ │ │ └── EventDetails.tsx
│ │ ├── services/
│ │ │ └── eventService.ts # Axios requests for events
│ ├── App.tsx
│ └── index.tsx
│
├── README.md
└── package.json

---

## Future Enhancements

1. Add drag-and-drop event scheduling.
2. Integrate notifications via email or SMS.
3. Add recurring event support.

---

Developed by Alex Youssef

---








### **Flowchart for Meeting Calendar Feature**





#### Legend:
- **Frontend**: Blue Boxes
- **Backend**: Yellow Boxes
- **User Interaction**: Gray Arrows

```plaintext
   User
    │
    ▼
[Frontend: Calendar UI]
    │
    ▼
[Frontend: Event Service (Axios)]
    │
    ▼
[Backend: EventController]
    │
    ▼
[Backend: EventService]
    │
    ▼
[Backend: EventRepository ↔ Database]
    │
    ▼
[Response Back to Frontend]