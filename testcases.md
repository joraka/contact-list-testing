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

            Precondition:
                The user must be registered using the email and password specified in the Test Data section.

            Steps:
                1. Go to https://thinking-tester-contact-list.herokuapp.com/addUser
                2. Type first name
                3. Type last name
                4. Type email
                5. Type password
                6. Click submit

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
    ```
    Description:
        Login the user with valid data

    Test Data:
        First name: Bob
        Last name: Marley
        Email: [randomString]@marley.com
        Password: pass123

    Precondition:
        The user must be registered using the data specified in the Test Data section.

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/login
        2. Type email
        3. Type password
        4. Click submit

    Expected result:
        User succesfully logs in, contact list is visible
    ```
* TC_3.2 Login with invalid data
    * TC_3.2.1 Login with empty email
        ```
        Description:
            Login the user with empty email

        Test Data:
            First name: Bob
            Last name: Marley
            Email: [randomString]@marley.com
            Password: pass123

        Precondition:
            The user must be registered using the data specified in the Test Data section.

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type password
            3. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.2 Login with email longer than allowed
        ```
        Description:
            Login the user with email that is longer than allowed

        Test Data:
            Email: bobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbobbob@marley.com
            Password: pass123

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Type password
            4. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.3 Login with invalid email format
        ```
        Description:
            Login the user with invalid email format using no @ symbol

        Test Data:
            Email: bob.marley.com
            Password: pass123

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Type password
            4. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.4 Login with incorrect email
        ```
        Description:
            Login the user with incorrect email

        Test Data:
            First name: Bob
            Last name: Marley
            Registration email: [randomString]@marley.com
            Login email: [randomString]123@marley.com
            password: pass123

        Precondition:
            The user must be registered using the details in Test Data section.

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Type login password
            4. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.5 Login with empty password
        ```
        Description:
            Login the user with empty password

        Test Data:
            Email: [randomString]@marley.com

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.6 Login with password longer than allowed
        ```
        Description:
            Login the user with password that is longer than allowed

        Test Data:
            Email: [randomString]@marley.com
            Password: pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123pass123

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Type password
            4. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```
    * TC_3.2.7 Login with incorrect password
        ```
        Description:
            Login the user with incorrect password

        Test Data:
            First name: Bob
            Last name: Marley
            Email: [randomString]@marley.com
            Registration password: 123pass
            Login password: pass123

        Precondition:
            The user must be registered using the details in Test Data section.

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/login
            2. Type email
            3. Type login password
            4. Click submit

        Expected result:
            Shows "Incorrect username or password"
        ```

### TS_4 Logout
* TC_4.1 Log out
    ```
    Description:
        Logs out user
        
    Precondition:
        User must be registered and signed in

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Click Logout

    Expected result:
        User is logged out, login screen visible.
    ```

### TS_5 Contacts Page
* TC_5.1 Contacts list page loads
    ```
    Description:
        Contact page loads
        
    Precondition:
        Must be signed in as a user

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Observe the page

    Expected result:
        1. Contact List header is visible
        2. Table is visible

    ```
* TC_5.2 Contact details is displayed
    ```
    Description:
        Contact details are displayed
        
    Precondition:
        1. Must be signed in as a user
        2. Must have at least one contact

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Click on any contact
        3. Observe result

    Expected result:
        1. First Name, Last Name, Date of Birth, Email, Phone, Street Address 1, Street Address 2, City, State or Province, Postal Code, Country fields are visible
        2. "Edit Contact" button is visible
        3. "Delete Contact" button is visible
        3. "Return to Contact List" button is visible
    ```
### TS_6 Add contact
* TC_5.1 Add contact with valid data, first name and last name only
    ```
    Description:
        Add contact with valid data, first name and last name only

    Precondition:
        1. Must be registered user
        2. Must be logged in

    Test Data:
        First name: Bob
        Last name: Marley

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Click "Add a New Contact" button
        3. Enter first name
        4. Enter last name
        5. Click submit button
        6. Observe the contact list

    Expected result:
        New contact is added to the list
    ```
* TC_5.2 Add contact with valid data with all fields
    ```
    Description:
        Add contact with valid data, first name and last name only

    Precondition:
        1. Must be registered user
        2. Must be logged in

    Test Data:
        First name: Bob
        Last name: Marley
        Date of Birth: 1999-09-09
        Email: bob@marley.com
        Phone: 123123123
        Street Address 1: Bob marley street 1
        Street Address 2: 123
        City: Los Angeles
        State or Province: California
        Postal Code: 123123
        Country: United States

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Click "Add a New Contact" button
        3. Enter First name
        4. Enter Last name
        5. Enter Date of Birth
        6. Enter Email
        7. Enter Phone
        8. Enter Street Address 1
        9. Enter Street Address 2
        10. Enter City
        11. Enter State or Province
        12. Enter Postal Code
        13. Enter Country
        14. Click submit button
        15. Observe the contact list

    Expected result:
        New contact with the matching data is added to the list
    ```
* TC_5.3 Add contact with invalid data
    * TC_5.3.1 Add contact with empty first name
    ```
    Description:
        Add contact with empty first name

    Precondition:
        1. Must be registered user
        2. Must be logged in

    Test Data:
        Last name: Marley

    Steps:
        1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
        2. Click "Add a New Contact" button
        3. Enter Last name
        4. Click submit button
        5. Observe the contact list

    Expected result:
        First name validation input error visible
    ```
    * TC_5.3.2a Add contact with first name longer than allowed
        ```
        Description:
            Add contact with first name longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Boboboboboboboboboboboboboboboboobb
            Last name: Marley

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            First name validation input error visible
        ```
    * TC_5.3.2b Add contact with first name shorter than allowed
        ```
        Description:
            Add contact with first name shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: B
            Last name: Marley

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            First name validation input error visible
        ```

    * TC_5.3.3 Add contact with first name that has numbers
        ```
        Description:
            Add contact with first name that has numbers

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob123
            Last name: Marley

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            First name validation input error visible
        ```
    * TC_5.3.4 Add contact with empty last name
        ```
        Description:
            Add contact with empty last name

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Click submit button
            5. Observe the contact list

        Expected result:
            Last name validation input error visible
        ```
    * TC_5.3.5a Add contact with last name longer than allowed
        ```
        Description:
            Add contact with last name longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marleyleyleyleyleyleyleyleyleyleyley

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            Last name validation input error visible
        ```
    * TC_5.3.5b Add contact with last name shorter than allowed
        ```
        Description:
            Add contact with last name shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: M

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            Last name validation input error visible
        ```
    * TC_5.3.6 Add contact with last name that has numbers in it
        ```
        Description:
            Add contact with last name that has numbers in it

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley123

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Click submit button
            6. Observe the contact list

        Expected result:
            Last name validation input error visible
        ```
    * TC_5.3.7 Add contact with invalid date of birth format
        ```
        Description:
            Add contact with invalid date of birth format

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Date of Birth: 1111-20-20

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Date of Birth
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Date of birth validation input error visible
        ```
    * TC_5.3.8 Add contact with email longer than allowed
        ```
        Description:
            Add contact with email longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Email: asdfasgasdasdgasdgdsggasgdsagasdgasdgadsgasdgasdgasdgasdgasgasdgasgdasdgasdgasdh@gmail.com

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Email
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Email validation input error visible
        ```
    * TC_5.3.9 Add contact with invalid email format 
        ```
        Description:
            Add contact with invalid email format

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Email: bob.marley.com

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Email
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Email validation input error visible
        ```
    * TC_5.3.10a Add contact with phone number longer than allowed
        ```
        Description:
            Add contact with phone number longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Phone: 12312312312123123123123132

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Phone
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Phone validation input error visible
        ```
    * TC_5.3.10b Add contact with phone number shorter than allowed
        ```
        Description:
            Add contact with phone number shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Phone: 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Phone
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Phone validation input error visible
        ```
    * TC_5.3.11 Add contact with phone number shorter than allowed
        ```
        Description:
            Add contact with phone number shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Phone: 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Phone
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Phone validation input error visible
        ```
    * TC_5.3.12 Add contact with street address 1 longer than allowed
        ```
        Description:
            Add contact with street address 1 longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Street Address 1: agsdgasdg jasdgju asbdgasd ibgasiugiua sibdugbi absidguiuais duigasui dgiuasd iugui 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Street Address 1
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Street Address 1 validation input error visible
        ```
    * TC_5.3.12a Add contact with street address 1 shorter than allowed
        ```
        Description:
            Add contact with street address 1 shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Street Address 1: 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Street Address 1
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Street Address 1 validation input error visible
        ```
    * TC_5.3.13 Add contact with street address 2 longer than allowed
        ```
        Description:
            Add contact with street address 2 longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Street Address 2: agsdgasdg jasdgju asbdgasd ibgasiugiua sibdugbi absidguiuais duigasui dgiuasd iugui 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Street Address 2
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Street Address 2 validation input error visible
        ```
    * TC_5.3.13a Add contact with street address 2 shorter than allowed
        ```
        Description:
            Add contact with street address 2 shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Street Address 2: 1

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Street Address 2
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Street Address 2 validation input error visible
        ```
    * TC_5.3.14 Add contact with state longer than allowed
        ```
        Description:
            Add contact with state longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            State: Californianianianianianianianianianianianiania

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter State
            6. Click submit button
            7. Observe the contact list

        Expected result:
            State validation input error visible
        ```
    * TC_5.3.14a Add contact with state shorter than allowed
        ```
        Description:
            Add contact with state shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            State: C

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter State
            6. Click submit button
            7. Observe the contact list

        Expected result:
            State validation input error visible
        ```
    * TC_5.3.15a Add contact with city longer than allowed
        ```
        Description:
            Add contact with city longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            City: Los Angeleslesleslesleslesleslesleslesleslesleslesleslesles

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter City
            6. Click submit button
            7. Observe the contact list

        Expected result:
            City validation input error visible
        ```
    * TC_5.3.15b Add contact with city shorter than allowed
        ```
        Description:
            Add contact with city shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            City: L

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter City
            6. Click submit button
            7. Observe the contact list

        Expected result:
            City validation input error visible
        ```
    * TC_5.3.16 Add contact with invalid post code
        ```
        Description:
            Add contact with invalid post code

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Postal Code: AAAAAAA

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Postal Code
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Postal Code validation input error visible
        ```
    * TC_5.3.17a Add contact with country longer than allowed
        ```
        Description:
            Add contact with country longer than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Country: United States States States States States States States States

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Country
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Country validation input error visible
        ```
    * TC_5.3.17b Add contact with country shorter than allowed
        ```
        Description:
            Add contact with country shorter than allowed

        Precondition:
            1. Must be registered user
            2. Must be logged in

        Test Data:
            First name: Bob
            Last name: Marley
            Country: U

        Steps:
            1. Go to https://thinking-tester-contact-list.herokuapp.com/contactList
            2. Click "Add a New Contact" button
            3. Enter First name
            4. Enter Last name
            5. Enter Country
            6. Click submit button
            7. Observe the contact list

        Expected result:
            Country validation input error visible
        ```

### TS_7 Edit Contact
* TC_7.1 Edit contact with valid data, first name and last name only
* TC_7.2 Edit contact with valid data with all fields
* TC_7.3 Edit contact with invalid data
    * TC_7.3.1 Edit contact with empty first name
    * TC_7.3.2 Edit contact with first name longer than allowed
    * TC_7.3.3 Edit contact with first name and numbers
    * TC_7.3.4 Edit contact with empty last name
    * TC_7.3.5 Edit contact with last name longer than allowed
    * TC_7.3.6 Edit contact with last name and numbers
    * TC_7.3.7 Edit contact with invalid date of birth format
    * TC_7.3.8 Edit contact with email longer than allowed
    * TC_7.3.9 Edit contact with invalid email format 
    * TC_7.3.10 Edit contact with phone number longer than allowed
    * TC_7.3.11 Edit contact with street address 1 longer than allowed
    * TC_7.3.12 Edit contact with street address 2 longer than allowed
    * TC_7.3.13 Edit contact with state longer than allowed
    * TC_7.3.14 Edit contact with city longer than allowed
    * TC_7.3.15 Edit contact with invalid post code
    * TC_7.3.16 Edit contact with country longer than allowed

### TS_8 Delete Contact
* TC_8.1 Delete contact

### TS_9 Edge cases
* add contact page shouldnt be displayed