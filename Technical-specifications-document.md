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
  - **OTA**: Online Travel Agent 
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
- **Link to the visual mockup**: ![Mockup](https://www.figma.com/design/RbGRUOcPrXkmDBsgP0J9Dc/Flight-Booking-App-UI-kit-(Community)?node-id=0-1&p=f&t=yUBAb8COEpXFdVUe-0)

## 6. Features
- **User Registration and Login**: Users can create accounts and log in securely.
- **Flight Search**: Users can search for available flights based on destination, date, and class.
- **Flight Selection and Booking**: Users can select available flights, choose seats, and book tickets.
- **Payment Gateway Integration**: Users can securely make payments through an integrated payment gateway.
- **Email Notifications**: Users receive booking confirmations and updates via email.