let answersController = {
    get: {},
    post: {},
    patch: {}
};

answersController.get.answers = (req, res) => {
    res.send('answersController.get.answers');
};

answersController.get.answer = (req, res) => {
    res.send('answersController.get.answer');
};

answersController.post.answer = (req, res) => {
    res.send('answersController.post.answer');
};

answersController.patch.answer = (req, res) => {
    res.send('answersController.patch.answer');
};

export default answersController