### TS_1 Home Page
* TC_1.1 Page loads  
    * TC_1.1.1 Page loads in less than 3 seconds  
        ```
        Description:
            Home page loads in less than 3 seconds

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/ 
            2. Observe how long it takes to load the page

        Expected Result:
            Page load in less than 3 seconds
        ```
    * TC_1.1.2 Header is visible  
        ```
        Description:
            Home page shows header

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/ 
            2. Observe the header

        Expected Result:
            Header shows text “Contact List App”
        ```
    * TC_1.1.3 Login forms are visible
        ```
        Description:
            Login form field should be visible on the main page

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/
            2. Observe result

        Expected result:
            1. Login input fields "email" and "password" are visible
            2. Submit button is visible
        ```
    * TC_1.1.4 Signup button is visible
        ```
        Description:
            Sign up button is visible on the home page

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/
            2. Observe result

        Expected result:
            Sign up button is visible
        ```
    * TC_1.1.5 Copyright footer is visible
        ```
        Description:
            Copyright footer should be visible

        Steps:  
            1. Go to https://thinking-tester-contact-list.herokuapp.com/
            2. Observe result

        Expected result:
            Footer shows "Created by Kristin Jackvony, Copyright 2021"
        ```

### TS_2 Register Page
* TC_2.1 Register with valid data  
    ```
    Description:
        Register user with valid data

    Test Data:
        First name: Bob
        Last name: Marley
        Email: [randomnumbers]@gmail.com
        Password: pass123

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
        2. Type first name
        3. Type last name
        4. Type email
        5. Type password
        6. Click submit

    Expected result:
        User is registered and contact list is visible
    ```
* TC_2.2 Register with invalid data  
    * TC_2.2.1 Register with invalid first name  
        * TC_2.2.1.1 Register with empty first name  
        ```
        Description:
            Should not register user if the first name is empty

        Test Data:
            Last name: Marley
            Email: [randomnumbers]@gmail.com
            Password: pass123

        Steps:
            1. Go to   
            https://thinking-tester-contact-list.herokuapp.com/addUser
            2. Type last name
            3. Type email
            4. Type password
            5. Click submit

        Expected result:
            It shows first name validation error.
        ```
        * TC_2.2.1.2 Register with first name longer than allowed  
        ```
        Description:
            Should not register user if the first name is too long

        Test Data:
            First name: Bobobobobobobobobobobobobobobobobobobobobobobob
            Last name: Marley
            Email: [randomnumbers]@gmail.com
            Password: pass123

        Steps:
            1. Go to 
            https://thinking-tester-contact-list.herokuapp.com/addUser
            2. Type first name
            3. Type last name
            4. Type email
            5. Type password
            6. Click submit

        Expected result:
            It shows first name validation error.
        ```
    * TC_2.2.2 Register with invalid last name  
        * TC_2.2.2.1 Register with empty last name  
            ```
            Description:
                Should not register if last name field is empty

            Test Data:
                First name: Bob
                Email: [randomnumbers]@gmail.com
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type email
                4. Type password
                5. Click submit

            Expected result:
                It shows last name validation error.
            ```
        * TC_2.2.2.2 Register with last name longer than allowed
            ```
            Description:
                Should not register user if the last name is too long

            Test Data:
                First name: Bob
                Last name: Marleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                Email: [randomnumbers]@gmail.com
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

            Expected result:
                It shows last name validation error.
            ```
    * TC_2.2.3 Register with invalid email  
        * TC_2.2.3.1 Register with empty email  
            ```
            Description:
                Should not register user if email is empty

            Test Data:
                First name: Bob
                Last name: Marleyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type password
                5. Click submit

            Expected result:
                It shows email validation error.
            ```
        * TC_2.2.3.2 Register with email longer than allowed
            ```
            Description:
                Registration should not register user if the email is too long

            Test Data:
                First name: Bob
                Last name: Marley
                Email: bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob@bob.com
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

            Expected result:
                It shows email validation error.
            ```
        * TC_2.2.3.3 Register with invalid email format  
            ```
            Description:
                Should not register if the email is invalid

            Test Data:
                First name: Bob
                Last name: Marley
                Email: bob.bob.com
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

            Expected result:
                It shows email validation error.
            ```
        * TC_2.2.3.4 Register with email that already exists 
            ```
            Description:
                Should not register if the email already exists

            Test Data:
                First name: Bob
                Last name: Marley
                Email: bobmarley@marley.com
                Password: pass123

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit
                7. Logout
                8. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                9. Type first name
                10. Type last name
                11. Type email
                12. Type password
                13. Click submit

            Expected result:
                It shows that email already exists
            ```
    * TC_2.2.4 Register with invalid password  
        * TC_2.2.4.1 Register with no password  
            ```
            Description:
                Should not register if password field is empty

            Test Data:
                First name: Bob
                Last name: Marley
                Email: [randomnumbers]@gmail.com

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Click submit

            Expected result:
                It shows password validation error.
            ```
        * TC_2.2.4.2 Register with password shorter than allowed
            ```
            Description:
                Should not register if the password is too short

            Test Data:
                First name: Bob
                Last name: Marley
                Email: [randomnumbers]@gmail.com
                Password: pass

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

            Expected result:
                It shows password validation error.
            ```
        * TC_2.2.4.3 Register with password longer than allowed
            ```
            Description:
                Should not register if the password is too long

            Test Data:
                First name: Bob
                Last name: Marley
                Email: [randomnumbers]@gmail.com
                Password: passpasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspass

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

            Expected result:
                It shows password validation error.
            ```


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