import axios from 'axios';

// const axios = 
//     axios.create({ baseURL: 'http://localhost:3030'});

//get results per userId
async function createUser(username) {
    debugger;
    return (await axios.post(`http://localhost:3030/api/quiz/${username}/create`));
}
async function updateUser(username) {
    return (await axios.put(`http://localhost:3030/api/quiz/${username}/update`));
}
async function getUserQuestion(username,questionId) {
    return (await axios.get(`http://localhost:3030/api/quiz/${username}/get-question?question=${questionId}`)).data;
}
async function updateUserAnswer(username, userData) {
    return (await axios.put(`http://localhost:3030/api/quiz/${username}/update`, userData));
}
async function updateFriendAnswerForUser(username, userData) {
    return (await axios.post(`http://localhost:3030/api/quiz/${username}/answer`, userData));
}
async function getSummaryByFriend(friend)
{
    return (await axios.get(`http://localhost:3030/api/quiz/results/${friend}/summary`)).data;
}

export default {
    createUser,
    getUserQuestion,
    updateUser,
    updateUserAnswer,
    updateFriendAnswerForUser,
    getSummaryByFriend
};