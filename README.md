# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# How start testing

To start the test, you need to choose how many questions you want to answer. 

After that, you need to confirm the number of questions. If you want to choose another number, you can click on Cancel button. If you want to start, you can click on Start button.

After confirming the number of questions, you just have to answer all questions you choose. To send your answers, you need to select one answer for each question. We have two types of questions: multiple choice and boolean choice.

Sending your answers, you have access to your report, which will show you the number of questions you selected, the number of questions you answered correctly and the number of questions you answered incorrectly.

Your report will be saved in your Local Storage, and you can see it any time you want, until you start a new test.

# Developer Notes, warnings and greetings.

Hello ! I'm Carlos, and i'm very happy to be tested for your company. It's my dev notes, to explain how i thinked to make this application.

- First thing first, I added all the libs that i have to use, open a Jira board, to make a brainstorm and start a new repo in github, to set my start date. I'm not sure if it's the best way to do it, but it's the best way to start. 

- Second thing is create all the folders, to organize the project, and start coding.

- Third thing, for this project i'm using `Conventional commmits`, to make the code more readable and easy to understand, `theme` file to make the code look better, and `eslint`. I'm also using `Styled-components` and `Material-ui` to make easier to code, and style.

- - My first note is that i'm using react-router-dom v 5.0.0, to use useHistory instead useNavigation and your friends.
Other thing, is that i opted to use localStorage to store the user data, instead context Api, because i'm more confident to use LocalStorage.