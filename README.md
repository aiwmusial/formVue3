### Prerequisites
Software Requirements:
Node.js, Git (for cloning the repository and managing version control)

# Steps to Run the Project

## 1. Install Dependencies
```
npm install
```
This command installs all the necessary dependencies specified in package.json.

## 2. Build the Project
```
npm run build
```
This command builds the project for production. Ensure this step is completed without errors.

## 3. Start the Development Server
```
npm run dev
```
This command starts a development server using Vite, which locally serves the Vue 3 application. Follow the link to the local server.

### Usage Instructions

1. Form Layout and Initial Setup:

    * Upon accessing the application, you will see a form with three text input fields arranged in a single column.

2. Dynamic Field Management:

    * Below the input fields, there is a button labeled "Add Field". Clicking this button adds additional input fields, up to a maximum of 10.
    * Each input field has a "trash" icon next to it to remove that specific field. At least one input field remains on the form at all times.

3. Vowel Count Display:

    * Next to each input field, a count of vowels (a, e, i, o, u) entered in that field is displayed dynamically.

4. Search Functionality:

    * At the top of the form, there is a text input labeled "Search". Typing text into this field will highlight any input field that contains the entered text with a green background.
    * If the search text matches any text in the input fields, the search field itself is also highlighted with a green background.
