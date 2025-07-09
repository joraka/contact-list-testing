### TS_1 Home Page
* TC_1.1 Page loads  
    * TC_1.1.1 Page loads in less than 3 seconds
    * TC_1.1.2 Header is visible  
    * TC_1.1.3 Login forms are visible
    * TC_1.1.4 Signup button is visible
    * TC_1.1.5 Copyright footer is visible

### TS_2 Register Page
* TC_2.1 Register with valid data  
* TC_2.2 Register with invalid data  
    * TC_2.2.1 Register with invalid first name  
        * TC_2.2.1.1 Register with empty first name  
        * TC_2.2.1.2 Register with first name longer than allowed  
    * TC_2.2.2 Register with invalid last name  
        * TC_2.2.2.1 Register with empty last name  
        * TC_2.2.2.2 Register with last name longer than allowed
    * TC_2.2.3 Register with invalid email  
        * TC_2.2.3.1 Register with empty email  
        * TC_2.2.3.2 Register with email longer than allowed
        * TC_2.2.3.3 Register with invalid email format  
        * TC_2.2.3.4 Register with email that already exists 
    * TC_2.2.4 Register with invalid password  
        * TC_2.2.4.1 Register with no password  
        * TC_2.2.4.2 Register with password shorter than allowed
        * TC_2.2.4.3 Register with password longer than allowed


### TS_3 Login Page
* TC_3.1 Login with valid data
* TC_3.2 Login with invalid data
    * TC_3.2.1 Login with empty email
    * TC_3.2.2 Login with email longer than allowed
    * TC_3.2.3 Login with invalid email format 
    * TC_3.2.4 Login with incorrect email
    * TC_3.2.5 Login with empty password
    * TC_3.2.6 Login with password longer than allowed
    * TC_3.2.7 Login with incorrect password

### TS_4 Logout
* TC_4.1 Log out

### TS_5 Contacts Page
* TC_5.1 Page loads
* TC_5.2 Contacts list is displayed
* TC_5.3 Contact details is displayed

### TS_6 Add contact
* TC_5.1 Add contact with valid data, first name and last name only
* TC_5.2 Add contact with valid data with all fields
* TC_5.3 Add contact with invalid data
    * TC_5.3.1 Add contact with empty first name
    * TC_5.3.2 Add contact with first name longer than allowed
    * TC_5.3.3 Add contact with first name and numbers
    * TC_5.3.4 Add contact with empty last name
    * TC_5.3.5 Add contact with last name longer than allowed
    * TC_5.3.6 Add contact with last name andand numbers
    * TC_5.3.7 Add contact with invalid date of birth format
    * TC_5.3.8 Add contact with email longer than allowed
    * TC_5.3.9 Add contact with invalid email format 
    * TC_5.3.10 Add contact with phone number longer than allowed
    * TC_5.3.11 Add contact with street address 1 longer than allowed
    * TC_5.3.11 Add contact with street address 2 longer than allowed
    * TC_5.3.12 Add contact with state longer than allowed
    * TC_5.3.12 Add contact with city longer than allowed
    * TC_5.3.12 Add contact with invalid post code
    * TC_5.3.13 Add contact with country longer than allowed

### TS_7 Edit Contact
* TC_7.1 Edit contact with valid data, first name and last name only
* TC_7.2 Edit contact with valid data with all fields
* TC_7.3 Edit contact with invalid data
    * TC_7.3.1 Edit contact with empty first name
    * TC_7.3.2 Edit contact with first name longer than allowed
    * TC_7.3.3 Edit contact with first name and numbers
    * TC_7.3.4 Edit contact with empty last name
    * TC_7.3.5 Edit contact with last name longer than allowed
    * TC_7.3.6 Edit contact with last name andand numbers
    * TC_7.3.7 Edit contact with invalid date of birth format
    * TC_7.3.8 Edit contact with email longer than allowed
    * TC_7.3.9 Edit contact with invalid email format 
    * TC_7.3.10 Edit contact with phone number longer than allowed
    * TC_7.3.11 Edit contact with street address 1 longer than allowed
    * TC_7.3.11 Edit contact with street address 2 longer than allowed
    * TC_7.3.12 Edit contact with state longer than allowed
    * TC_7.3.12 Edit contact with city longer than allowed
    * TC_7.3.12 Edit contact with invalid post code
    * TC_7.3.13 Edit contact with country longer than allowed

### TS_8 Delete Contact
* TC_8.1 Delete contact

### TS_9 Edge cases
* add contact page shouldnt be displayed