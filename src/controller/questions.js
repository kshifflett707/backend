let questionsController = {
    get: {},
    post: {},
    patch: {}
};

questionsController.get.questions = (req, res) => {
    res.send('questionsController.get.questions');
};

questionsController.get.question = (req, res) => {
    res.send('questionsController.get.question');
};

questionsController.post.question = (req, res) => {
    res.send('questionsController.post.question');
};

questionsController.patch.question = (req, res) => {
    res.send('questionsController.patch.question');
};

export default questionsController