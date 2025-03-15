# Technical Specifications Document

## 1. Title Page
- **Project Name**: Airline Booking System
- **Version**: 1.0
- **Date**: March 6, 2025
- **Author(s)**: Bootcamp Group

## 2. Table of Contents
1. [Introduction](#3-introduction)
2. [Overall Description](#4-overall-description)
3. [Visual Mockup Reference](#5-visual-mockup-reference)
4. [Features](#6-features)
5. [Functional Requirements](#7-functional-requirements)
6. [Non-Functional Requirements](#8-non-functional-requirements)
7. [Data Requirements](#9-data-requirements)
8. [External Interface Requirements](#10-external-interface-requirements)
9. [Glossary](#11-glossary)
10. [Appendices](#12-appendices)

## 3. Introduction
- **Purpose**: To develop an airline booking system that allows users to search for flights, book tickets, and make payments.
- **Scope**: The application will include user registration, flight search, booking, and payment processing. It will not include advanced features such as loyalty programs or customer support chat.
- **Definitions, Acronyms, and Abbreviations**: 
  - **PNR**: Passenger Name Record
  - **API**: Application Programming Interface
  - **ERD**: Entity-Relationship Diagram. 
- **References**: None

## 4. Overall Description
- **Product Perspective**: The application will be a web-based platform for travelers to book flights, manage their reservations, and make payments.
- **Product Functions**: 
  - User registration and login
  - Flight search and selection
  - Booking and reservation management
  - Payment processing
  - Email notifications and confirmations
- **User Classes and Characteristics**: 
  - **End Users**: Customers who will search for flights, book tickets, and manage reservations.
  - **Admin Users**: Airline employees or administrators who manage flights, reservations, and bookings.
- **Operating Environment**: 
  - **Client**: Modern web browsers (Chrome, Firefox, Safari)
  - **Server**: Node.js backend, MongoDB database
- **Assumptions and Dependencies**: 
  - Users have internet access.
  - Payment gateway API (e.g., Stripe) is available and functional.
  - Real-time flight schedules and data are provided by airlines.

## 5. Visual Mockup Reference
- **Link to the visual mockup**: [Mockup](https://www.figma.com/design/RbGRUOcPrXkmDBsgP0J9Dc/Flight-Booking-App-UI-kit-(Community)?node-id=0-1&p=f&t=yUBAb8COEpXFdVUe-0)

## 6. Features
- **User Registration and Login**: Users can create accounts and log in securely.
- **Flight Search**: Users can search for available flights based on destination, date, and class.
- **Flight Selection and Booking**: Users can select available flights, choose seats, and book tickets.
- **Payment Gateway Integration**: Users can securely make payments through an integrated payment gateway.
- **Email Notifications**: Users receive booking confirmations and updates via email.

## 7 Functional Requirements

### Use Cases

### Use Case 1: User Registration
**Title:** User Registration  
**Description:** Allows a new user to create an account by providing necessary details.  
**Actors:** User  
**Preconditions:** User must have a valid email and unique credentials.  
**Postconditions:** A new user account is created and stored in the system.  
**Main Flow:**  
1. User navigates to the registration page.  
2. User enters name, email, password, phone number, and selects user type.  
3. System validates inputs and checks for duplicate email.  
4. System encrypts password and stores user data.  
5. System confirms successful registration.  
**Alternate Flows:**  
- If email is already registered, the system prompts the user to use another email.  
- If input validation fails, the system displays an error message.  

### Use Case 2: Flight Booking
**Title:** Flight Booking  
**Description:** Enables users to search and book flights.  
**Actors:** User  
**Preconditions:** User must be logged in.  
**Postconditions:** A booking record is created and linked to the user.  
**Main Flow:**  
1. User searches for available flights.  
2. User selects a flight and a seat.  
3. System verifies seat availability.  
4. User confirms booking.  
5. System updates booking status to "Pending Payment."  
**Alternate Flows:**  
- If seat is unavailable, the system prompts the user to select another.  
- If flight is fully booked, the system displays an alternative flight suggestion.  

## System Features

### Feature 1: User Management
**Description:** The system must allow users to register, log in, update profiles, and manage account details.  
**Priority:** High  
**Inputs:** User name, email, password, phone number, user type (Passenger/Admin)  
**Processing:** Validate user credentials, store encrypted passwords, authenticate login attempts, update user details  
**Outputs:** Successful login/registration, error messages for invalid credentials  
**Error Handling:** Display appropriate error messages for incorrect login details, duplicate emails, or invalid input fields  

### Feature 2: Flight Management
**Description:** Administrators should be able to manage flight records, including details such as airline name and flight status.  
**Priority:** High  
**Inputs:** Flight details (airline name, departure/arrival cities, times, status)  
**Processing:** Validate flight data, update flight schedules, ensure consistency with airport records  
**Outputs:** Updated flight details, confirmation messages, available flight listings  
**Error Handling:** Prevent duplicate entries, validate date/time formats, restrict invalid status changes  

### Feature 3: Airport Management
**Description:** The system should maintain a database of airports linked to flight information.  
**Priority:** Medium  
**Inputs:** Airport name, location, country code  
**Processing:** Associate airports with flights, ensure correct country codes  
**Outputs:** List of airports, associated flight schedules  
**Error Handling:** Validate airport details, restrict duplicate airport entries  

### Feature 4: Booking Management
**Description:** Users must be able to book flights, select seats, and track booking status.  
**Priority:** High  
**Inputs:** User ID, flight ID, seat number  
**Processing:** Verify seat availability, assign booking status, update booking records  
**Outputs:** Booking confirmation, assigned seat details  
**Error Handling:** Notify users of unavailable seats, prevent double booking  

### Feature 5: Payment Processing
**Description:** Users must be able to pay for bookings using online payment methods.  
**Priority:** High  
**Inputs:** Booking ID, amount, payment method  
**Processing:** Validate payment method, process transaction, update payment status  
**Outputs:** Payment confirmation, updated booking status  
**Error Handling:** Handle failed transactions, display payment errors, retry payment options  

### Feature 6: Booking and Payment Status Management
**Description:** The system must update booking and payment statuses accordingly.  
**Priority:** High  
**Inputs:** Booking status, payment status  
**Processing:** Change status based on successful/failed transactions, notify users  
**Outputs:** Updated booking/payment status  
**Error Handling:** Prevent inconsistencies in booking confirmations, retry failed payments  

### Feature 7: Search and Filter Functionality
**Description:** Users should be able to search for flights based on multiple criteria.  
**Priority:** Medium  
**Inputs:** Departure/arrival city, airline name, flight status  
**Processing:** Query flights based on filters, return matching results  
**Outputs:** Filtered flight search results  
**Error Handling:** Inform users if no results match criteria  

### Feature 8: Notifications and Alerts
**Description:** Users should receive updates on bookings, payments, and flight changes.  
**Priority:** Medium  
**Inputs:** Booking status changes, flight updates  
**Processing:** Send notifications via email/SMS  
**Outputs:** Alert messages, email confirmations  
**Error Handling:** Ensure timely notification delivery, log errors  

### Feature 9: Security and Compliance
**Description:** The system must ensure secure user authentication and transaction handling.  
**Priority:** High  
**Inputs:** User credentials, payment details  
**Processing:** Encrypt sensitive data, enforce access control policies  
**Outputs:** Secure authentication, transaction logs  
**Error Handling:** Block unauthorized access, notify users of security breaches  
