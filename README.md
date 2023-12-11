                                                                       EXPOSYS DATALABS INTERNSHIP


                                                                       ROLE: FRONTEND WEB DEVELOPER


                                                                       PROJECT: MASS MAIL DISPATCHER

Introduction:
The project aims to create a web application using React that allows users to send emails to a list of recipients from a CSV file. The application includes a user interface for entering the sender's email, subject, attaching a CSV file containing a list of email addresses, and entering the email message. Additionally, the application validates the email addresses from the CSV file and displays the valid and invalid ones separately.

Technologies Used:
React + Vite: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework.
Email.js: A JavaScript library for sending emails using various email services.

Features:
1. User Input Form:
The main functionality of the application is implemented through a form that allows the user to input the following details:

From Address: The email address from which the emails will be sent.

Subject: The subject of the email.

CSV File Input: Allows the user to upload a CSV file containing a list of email addresses.

Message: The body of the email.


2. CSV File Validation:
The application validates the email addresses from the CSV file using a regular expression. Valid and invalid email addresses are separated, and the counts are displayed to the user.

3. Email Sending:
The application includes a function sendEmails() that, when triggered, is intended to send emails using the entered details. Currently, it logs a message to the console, indicating that emails are being sent.

4. UI Styling:
The user interface is designed using Tailwind CSS, providing a clean and responsive layout. The styling includes gradient backgrounds and text gradients for a visually appealing look.

Usage Instructions:
Enter the sender's email address, subject, and email message in the respective input fields.
Upload a CSV file containing the list of recipient email addresses.
Click the "Send Emails" button to trigger the email sending process (currently logging to the console).

Future Improvements:
Implement the actual email sending functionality using a backend service or an email API.
Add user authentication to ensure secure access to the email sending feature.
Enhance error handling and user feedback during the email sending process.
Implement a progress indicator for the email sending process.
Improve the overall user experience and add additional features based on user feedback.

