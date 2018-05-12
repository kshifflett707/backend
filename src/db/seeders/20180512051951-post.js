'use strict';
const postData = [
  {
    userid: 1,
    title: "This is question number 1?",
    body: "I am the body of question number 1.",
    type: 'Question'
  },
  {
    userid: 2,
    title: "This is question number 2?",
    body: "I am the body of question number 2.",
    type: 'Question'
  },
  {
    userid: 3,
    title: "This is question number 3?",
    body: "I am the body of question number 3.",
    type: 'Question'
  },
  {
    userid: 4,
    title: "This is question number 4?",
    body: "I am the body of question number 4.",
    type: 'Question'
  },
  {
    associatedQuestionId: 1,
    userid: 5,
    body: "I am the answer of question number 1.",
    type: 'Answer'
  },
  {
    associatedQuestionId: 2,
    userid: 6,
    body: "I am the answer of question number 2.",
    type: 'Answer'
  },
  {
    associatedQuestionId: 3,
    userid: 7,
    body: "I am the answer of question number 3.",
    type: 'Answer'
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', postData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
