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


### TS_6 Add contact
* TC_5.1 Add contact with valid data, first name and last name only
* TC_5.2 Add contact with valid data with all fields
* TC_5.3 Add contact with invalid data
    * TC_5.3.1 Add contact with empty first name
    * TC_5.3.2 Add contact with first name longer than allowed
    * TC_5.3.3 Add contact with empty last name
    * TC_5.3.4 Add contact with last name longer than allowed
    * TC_5.3.6 Add contact with invalid date of birth format
    * TC_3.2.2 Add contact with email longer than allowed
    * TC_3.2.3 Add contact with invalid email format 
    * TC_3.2.3 Add contact with invalid phone longer than allowed
    * TC_3.2.3 Add contact with invalid street address 1 longer than allowed
    * TC_3.2.3 Add contact with post code with 
    * TC_3.2.3 Add contact with post code format
    * TC_3.2.3 Add contact with invalid post code
    * TC_3.2.3 Add contact with invalid country

### TS_7 Edit Contact

### TS_8 Delete Contact

### TS_9 Edge cases
* add contact page shouldnt be displayed