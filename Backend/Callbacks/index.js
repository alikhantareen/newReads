const News = require("../Models/News");

async function getAllNews(req, res) {
    try {
        const news = await News.find({});
        res.status(200).json({news: news});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: false});
    }
}

module.exports = {
    getAllNews
}
