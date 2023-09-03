const News = require("../Models/News");

async function getAllNews(req, res) {
  try {
    const news = await News.find({});
    res.status(200).json({ news: news });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: false });
  }
}

async function getSpecificNews(req, res) {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    res.status(200).json({ news: news });
  } catch (error) {
    res.status(401).json({ message: false });
  }
}

async function getNewsByCategory(req, res) {
  try {
    const category = req.params.category;
    const newsByCategory = await News.find({ category: category });
    res.status(200).json(newsByCategory);
  } catch (error) {
    res.status(401).json({ message: error });
  }
}

module.exports = {
  getAllNews,
  getSpecificNews,
  getNewsByCategory
};
