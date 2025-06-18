const GREETING = ['Welcome!', 'Nice day', 'Good evening'];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random() * GREETING.length)],
    });
};
