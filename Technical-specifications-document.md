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
- **Hardware Interfaces*:
	- None required.
- **Software Interfaces*:
	- Database (MongoDB Atlas) – Stores user, flight, booking, and payment data.
	- Cloud Storage (AWS) – Stores ticket PDFs, receipts, and user profile pictures.
	- Messaging & Notifications (SendGrid, Twilio API) – Sends booking confirmations via email or SMS.
	- External Airline Systems (OpenSky Network API or AviationStack API) – Fetches flight availability and pricing.
