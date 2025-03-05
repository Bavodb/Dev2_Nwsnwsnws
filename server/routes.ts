import express, { Request, Response, Router } from "express";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";
const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  const news = getNews()
  console.log(news);
  res.render("index", { title: "News", allNews: news });
});

// DetailPagina
router.get("/newsArticle", (req: Request, res: Response): void => {
  res.render("detail", { title: "Quiz" });
});

// Quiz verwerken


export default router;
