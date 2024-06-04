Animal Management Application

This repository contains a web application designed to manage animals by type (Cats, Dogs, Birds) using a simple CRUD REST API. The application features both a user-friendly frontend and a robust backend to handle animal data efficiently.

Features
Frontend
HomePage:

Menu: Display types of animals.
About Us: A section detailing information about the application or organization.
Contact Us: A section for users to get in touch.
Animal Gallery:

Gallery: Displays Cards for each animal type selected from the Menu.
Each Card includes a Photo, Name, and Origin of the animal.
Clicking on a Card opens a Pop-up with all the animal's details.
Search Bar: Located above the Gallery, allows searching for animals by name within the selected type.
Admin Page:

Accessible via the ADMIN option in the Menu.
Create Animal: Form to create a new animal using the backend API.
Display Animals: Table listing all animals, fetched from the backend API.
Edit Animal: Functionality to update an animal's information using the backend API.
Delete Animal: Functionality to delete an animal using the backend API.

Backend

A simple application with CRUD REST APIs to manage animals by type (Cats, Dogs, Birds) should contain:

CREATE ONE (Create an animal)
GET ALL (Retrieve all animals)
UPDATE ONE (Update an animal)
DELETE ONE (Delete an animal)
Search by the parameter ‘Name’ for each animal type.

Modeled from the following APIs:

https://freetestapi.com/apis/dogs
https://freetestapi.com/apis/cats
https://freetestapi.com/apis/birds
