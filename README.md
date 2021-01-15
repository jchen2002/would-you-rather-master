"Would you rather" project is the second project for Udacity React class. The project has these featuers: a user needs to login to start with, then the login user can create a new "Would you rather?" question with optionOne and optionTwo, the new created question is available for all users, a user can vote for any questions that haven't been answered, the project shows all unanswered and answered quetions for any authorized users, the project shows all users voted scores with questions created and answered.

### instructions

1. clone the project from github:
2. cd to would-you-rather folder,
3. run the following dependencies:
   $npm install
   $npm install react-router-dom
   $npm install react-redux-loading
   $npm install react-redux
   $npm install semantic-ui-react
   $npm intall semantic-ui-css
   $npm install redux-thunk
4. start web server by $npm start
5. go to the website: http://localhost:3000
6. login the project by select an existing user.
7. "Home" page shows all unanswered and answered questions dashboard
8. "New Question" page allows users to create a new Question
9. "Leaderboard" shows user's score for created questions and answered questions.
10. "Logout" the site if user wants to exit the project.

### Source code Hierarchy

```bash
└── src
    ├── actions
    │   ├── authedUser.js
    │   └── questions.js
    │   └── shared.js
    │   └── users.js
    ├── reducers
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── index.js
    │   └── users.js
    ├── middleware
    │   ├── logger.js
    │   └── index.js
    ├── utils
    │   ├── _DATA.js
    │   ├── api.js
    │   └── helpers.js
    ├── components
    │   ├── App.js
    │   ├── Dashboard.js
    │   ├── Leaderboard.js
    │   ├── Login.js
    │   ├── Nav.js
    │   ├── NewQuestion.js
    │   ├── Question.js
    │   ├── QuestionPolljs
    │   ├── VoteResult.js
    │   └── NotFound.js
    ├── index.css
    └── index.js
```

### Data is stored in file as local database, it has data like questions, users and authedUser.

- To access the database by using methods file `api.js` in folder ./utils:

1. `getInitialData()` --> get the initial data in fake database
2. `saveQuestion()` --> save a new question
3. `saveQuestionAnswer()` --> save the voted result for a question

### project components and screenshots:

### Login Page

![Login Page](/public/screenshot/:Login.png)
Login.js is the component to create the login page.

### Home Page

![Home Page](/public/screenshot/Dashboard.png)
Dashboard.js he component to create the Dashboard page.

### View Voted Question Page

![View Answered Question Page](/public/screenshot/VoteResult.png)

### Vote Question Page

![Vote Question Page](/public/screenshot/voteQuestion.png)
VoteResult.js he component to create the VoteResult page.

### New Question Page

![New Question Page](/public/screenshot/NewQuestion.png)
NewQuestion.js is the component to create NewQuestion page.

### Leaderboard Page

![Leaderboard Page](/public/screenshot/Leaderboard.png)
Leaderboard.js he component to create the Leaderboard page.

### backend database API

Data is stored in utils/\_DATAT.js file, it has questions, users and authedUser.

- To access the database by using methods in ./utils/api.js

1. `getInitialData()` --> get the initial data in fake database
2. `saveQuestion()` --> create a new question
3. `saveQuestionAnswer()` --> save the voted result for a question

### Data objects

{
authedUser: userId
questions: {
questionId: {
id: questionId,
author: userId,
timestamp,
optionOne: {
votes: [userId],
text
},
optionTwo: {
votes: [userId],
text
}
}
},
users: {
userId: {
id: userId,
name,
avatarURL,
answers: {
questionId: 'optionOne' or 'optionTwo'
}
questions: [questionId]
}
}
}
