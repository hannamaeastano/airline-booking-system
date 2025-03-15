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

## 7. Functional Requirements

### Use Cases

#### Use Case 1: User Registration
**Title:** User Registration  
**Description:** Allows a new user to create an account by providing necessary details.  
**Actors:** User  
**Preconditions:**  
- User must have a valid email.  
- Credentials must be unique.  
**Postconditions:**  
- A new user account is created and stored in the system.  

#### Main Flow:
1. User navigates to the registration page.  
2. User enters name, email, password, phone number, and selects user type.  
3. System validates inputs and checks for duplicate email.  
4. System encrypts the password and stores user data.  
5. System confirms successful registration.  

#### Alternate Flows:
- If email is already registered, the system prompts the user to use another email.  
- If input validation fails, the system displays an error message.  

#### Use Case 2: Flight Booking
**Title:** Flight Booking  
**Description:** Enables users to search and book flights.  
**Actors:** User  
**Preconditions:**  
- User must be logged in.  
**Postconditions:**  
- A booking record is created and linked to the user.  

#### Main Flow:
1. User searches for available flights.  
2. User selects a flight and a seat.  
3. System verifies seat availability.  
4. User confirms booking.  
5. System updates booking status to "Pending Payment."  

#### Alternate Flows:
- If the seat is unavailable, the system prompts the user to select another.  
- If the flight is fully booked, the system displays an alternative flight suggestion.  

### System Features

#### Feature 1: User Management
**Description:** The system must allow users to register, log in, update profiles, and manage account details.  
**Priority:** High  

#### Details:
- **Inputs:** User name, email, password, phone number, user type (Passenger/Admin).  
- **Processing:** Validate user credentials, store encrypted passwords, authenticate login attempts, update user details.  
- **Outputs:** Successful login/registration, error messages for invalid credentials.  
- **Error Handling:** Display appropriate error messages for incorrect login details, duplicate emails, or invalid input fields.  

#### Feature 2: Flight Management
**Description:** Administrators should be able to manage flight records, including details such as airline name and flight status.  
**Priority:** High  

#### Details:
- **Inputs:** Flight details (airline name, departure/arrival cities, times, status).  
- **Processing:** Validate flight data, update flight schedules, ensure consistency with airport records.  
- **Outputs:** Updated flight details, confirmation messages, available flight listings.  
- **Error Handling:** Prevent duplicate entries, validate date/time formats, restrict invalid status changes.  

#### Feature 3: Airport Management
**Description:** The system should maintain a database of airports linked to flight information.  
**Priority:** Medium  

#### Details:
- **Inputs:** Airport name, location, country code.  
- **Processing:** Associate airports with flights, ensure correct country codes.  
- **Outputs:** List of airports, associated flight schedules.  
- **Error Handling:** Validate airport details, restrict duplicate airport entries.  

#### Feature 4: Booking Management
**Description:** Users must be able to book flights, select seats, and track booking status.  
**Priority:** High  

#### Details:
- **Inputs:** User ID, flight ID, seat number.  
- **Processing:** Verify seat availability, assign booking status, update booking records.  
- **Outputs:** Booking confirmation, assigned seat details.  
- **Error Handling:** Notify users of unavailable seats, prevent double booking.  

#### Feature 5: Payment Processing
**Description:** Users must be able to pay for bookings using online payment methods.  
**Priority:** High  

#### Details:
- **Inputs:** Booking ID, amount, payment method.  
- **Processing:** Validate payment method, process transaction, update payment status.  
- **Outputs:** Payment confirmation, updated booking status.  
- **Error Handling:** Handle failed transactions, display payment errors, retry payment options.  

#### Feature 6: Booking and Payment Status Management
**Description:** The system must update booking and payment statuses accordingly.  
**Priority:** High  

#### Details:
- **Inputs:** Booking status, payment status.  
- **Processing:** Change status based on successful/failed transactions, notify users.  
- **Outputs:** Updated booking/payment status.  
- **Error Handling:** Prevent inconsistencies in booking confirmations, retry failed payments.  

#### Feature 7: Search and Filter Functionality
**Description:** Users should be able to search for flights based on multiple criteria.  
**Priority:** Medium  

#### Details:
- **Inputs:** Departure/arrival city, airline name, flight status.  
- **Processing:** Query flights based on filters, return matching results.  
- **Outputs:** Filtered flight search results.  
- **Error Handling:** Inform users if no results match criteria.  

#### Feature 8: Notifications and Alerts
**Description:** Users should receive updates on bookings, payments, and flight changes.  
**Priority:** Medium  

#### Details:
- **Inputs:** Booking status changes, flight updates.  
- **Processing:** Send notifications via email/SMS.  
- **Outputs:** Alert messages, email confirmations.  
- **Error Handling:** Ensure timely notification delivery, log errors.  

#### Feature 9: Security and Compliance
**Description:** The system must ensure secure user authentication and transaction handling.  
**Priority:** High  

#### Details:
- **Inputs:** User credentials, payment details.  
- **Processing:** Encrypt sensitive data, enforce access control policies.  
- **Outputs:** Secure authentication, transaction logs.  
- **Error Handling:** Block unauthorized access, notify users of security breaches.  


## 8. Non-Functional Requirements

### **Performance**  
  - **Concurrent Users**: The system should handle at least **1,000 concurrent users** without performance degradation.  
  - **Search Queries**: Flight search queries should return results **within 2 seconds** under normal load conditions.  
  - **Page Load Times**: Pages should load in **under 3 seconds** for optimal user experience.  
  - **Payment Processing**: Payments should complete **within 5 seconds**, with real-time booking confirmation.  
  - **Database Efficiency**: The database should support **millions of records efficiently**, using indexing for fast lookups.  

### **Security**  
  - **User Authentication**: Use **hashed passwords** to prevent leaks.  
  - **Data Encryption**: Encrypt all sensitive data (**passwords, payment details, etc.**).  
  - **Access Control**:  
    - **Passengers**: Can book flights and manage payments.  
  - **Logging & Monitoring**:  
    - **Audit Logs**: Maintain logs for booking, payment, and flight updates.  
    - **Fraud Detection**: Implement **real-time fraud detection** for suspicious activities.  

### **Usability**  
  - **User Interface**: The UI should be **intuitive and user-friendly**, following **Material Design** or **Bootstrap** guidelines.  
  - **Mobile Responsiveness**: The system should work seamlessly on **desktops, tablets, and smartphones**.  
  - **Search Filters**: Users should be able to filter flights by **date, price, airline, and duration**.  
  - **Booking Efficiency**: A user should be able to complete a booking in **5 steps or fewer**.  

### **Reliability**  
  - **System Uptime**: The system must maintain **99.9% uptime** for high availability.  
  - **Database Backups**: Perform full backups **every 24 hours**, with **incremental backups** every hour.  
  - **Failover Mechanisms**: Ensure server crashes do not cause downtime.  
  - **Payment Recovery**: If a **payment fails** due to network issues, the system should **automatically retry** within 30 seconds.  

### **Supportability**  
  - **Maintainability**: The system should be **easily maintainable**, with **modular code** for quick updates and debugging.  
  - **Logging & Monitoring**: Logs should be **stored and monitored** for troubleshooting and analytics.  
  - **Admin Dashboard**: Admins should have access to a **dashboard** for system health monitoring.


## 9. Data Requirements
### 9.1 Data Models
**Airline Booking System – ERD**  
- **Link or screenshot**: [ERD](https://drive.google.com/file/d/1JKiZTALPGdmQYtME4Ncy74M55hmytA66/view?usp=sharing)

### 9.2 Database Requirements

#### **Tables and Relationships**  
The database includes the following relationships between tables:

### **Relationships**
- **User to Booking**: 1:N → A user can have multiple bookings, but each booking belongs to one user.  
- **Flight to Booking**: 1:N → A flight can have multiple bookings, but each booking belongs to one flight.  
- **Booking to Payment**: 1:1 → Each booking has one payment record.  
- **Flight to Airport**: 1:N for `departure_airport_id` and 1:N for `arrival_airport_id`.

### 9.3 Data Storage and Retrieval

#### **Data Storage**
- The system utilizes a NoSQL database, such as MongoDB, to ensure flexibility, scalability, and efficient document-based queries.  
- Tables are designed with **primary keys (PK)** to uniquely identify records and **foreign keys (FK)** to maintain referential integrity between related tables.  
- **Indexes** are applied to frequently queried fields (`user_id`, `flight_id`, `booking_id`) to optimize search performance.  
- Data is stored in a normalized structure to minimize redundancy and enhance scalability.

#### **Data Retrieval**

##### **User Queries**  
Users can:
- Search for flights by specifying departure and arrival cities, dates, and preferred airlines.  
- View booking history, with details on past and upcoming flights.  
- Check booking status (Confirmed, Pending, or Cancelled).

##### **Admin Queries**  
Administrators can:
- Update flight statuses (On-time, Delayed, or Cancelled) in real time.  
- Manage payments and refunds, ensuring successful transactions and handling disputes.

#### **Booking Process**
1. **Flight Selection**: Users browse available flights using search filters.  
2. **Seat Selection & Confirmation**: Users select their preferred seat and confirm the booking.  
3. **Payment Processing**: The system records payment details and updates booking status.  
4. **Final Confirmation**: A successful payment updates the booking to "Confirmed," while a failed transaction keeps it as "Pending."

#### **Optional Enhancements**
- **Caching** could be used to store frequently accessed flight schedules for faster lookups.  
- **Stored Procedures** could be implemented for complex queries like flight availability checks to reduce query execution time.  
- **Data Archiving** policies can be set up to handle old booking records, ensuring the database remains efficient.

## 10. External Interface Requirements

- **User Interfaces**:
	- Registration/Login page – Allows users to create an account and log in securely.
	- Book Flight page – Enables users to search and book flights.
	- Select Seat page – Provides seat selection during booking.
	- My Bookings page – Displays a list of a user’s current and past bookings.
	- Final Confirmation Page – Shows booking details before finalizing the purchase.
	- Flight Details page – Displays flight schedules, status, and relevant information.
	- Payment page – Handles the payment process for flight bookings.
- **API Interfaces**:
	- Authentication API: Handles user registration, login, and authentication using JWT.
	- Flight Booking API: Manages flight reservations and stores booking data in MongoDB.
	- User Booking API: Retrieves and manages a user's bookings.
	- Flight Information API: Provides real-time flight schedules and status (OpenSky Network API or AviationStack API).
	- Payment Gateway API: Integrates with PayPal REST API or Stripe SDK.
- **Hardware Interfaces**:
	- None required.
- **Software Interfaces**:
	- Database (MongoDB Atlas) – Stores user, flight, booking, and payment data.
	- Cloud Storage (AWS) – Stores ticket PDFs, receipts, and user profile pictures.
	- Messaging & Notifications (SendGrid, Twilio API) – Sends booking confirmations via email or SMS.
	- External Airline Systems (OpenSky Network API or AviationStack API) – Fetches flight availability and pricing.

## 11. Glossary
- **PNR**: Passenger Name Record – a record that contains a passenger's booking information.
- **API**: Application Programming Interface – a set of protocols for interacting with external services such as payment gateways.
- **ERD**: Entity-Relationship Diagram – a visual representation of the data structure, typically used to model the database for an airline booking system. It shows entities such as Flight, Passenger, Booking, and Payment, and the relationships between them. The ERD helps in understanding how data, like flight details, passenger information, and bookings, are related, and provides a blueprint for designing the system's database.

## 12. Appendices
- **Supporting Information**: 
  #### API Documentation
  - **Authentication API**: Documentation for user registration, login, and JWT authentication.
  - **POST /api/register**: Registers a new user.
  - **POST /api/login**: Authenticates a user and returns a JWT.
  - **Example Request**:
    ```json
    {
      "email": "user@example.com",
      "password": "securePassword"
    }
    ```
  - **Example Response**:
    ```json
    {
      "token": "JWT_Token"
    }
    ```

  #### Code Snippets
    - **Flight Search Function**:
    ```javascript
    function searchFlights(departureCity, arrivalCity, date) {
      return Flight.find({
        departureCity: departureCity,
        arrivalCity: arrivalCity,
        date: { $gte: date }
      });
    }
    ```
    This function allows users to search for available flights based on city, arrival, and departure date.

  #### Testing Plans and Test Cases
  - **Test Case 1: User Registration**
   - **Description**: Ensure that a new user can successfully register.
   - **Steps**:
     1. Navigate to the registration page.
     2. Enter valid user details (name, email, password, phone).
     3. Submit the form.
   - **Expected Result**: The user is created and redirected to the login page.
   - **Pass/Fail Criteria**: Test passes if the user is successfully created and the confirmation message appears.

  - **Test Case 2: Payment Processing**
   - **Description**: Test successful payment processing.
   - **Steps**:
     1. Select a flight and proceed to the payment page.
     2. Enter valid payment information.
     3. Submit the payment.
   - **Expected Result**: Payment is processed successfully, and booking status is updated to "Confirmed".
   - **Pass/Fail Criteria**: Test passes if payment is processed, and the confirmation page is displayed.

  #### Risk Assessment
  - **Risk 1: Third-Party API Failures**
    - **Description**: The system relies on third-party APIs for real-time flight schedules and payment processing.
    - **Mitigation**: Implement fallback mechanisms for critical features, such as displaying cached flight data in case of API downtime.
   
  - **Risk 2: Payment Gateway Failures**
    - **Description**: Payment processing may fail due to external system issues.
    - **Mitigation**: Implement retry logic for payment processing, and notify users of payment issues.

  #### Deployment Plan
  - **Deployment Steps**:
     1. Set up cloud infrastructure on AWS using EC2 instances.
     2. Deploy the Node.js application to the EC2 instance.
     3. Set up MongoDB Atlas for production data storage.
     4. Implement continuous integration and deployment using GitHub Actions.
   
  #### User Documentation
  - **User Manual**:
    - **Booking a Flight**: A user can book a flight by selecting the desired destination, date, and time.
    - **Changing a Booking**: Users can update booking details such as seat selection or flight date via the "My Bookings" page.
      
  #### Revision History: 
  - **v1.0**: Initial version - March 6, 2025
