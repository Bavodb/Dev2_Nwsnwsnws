import express, { Request, Response, Router } from "express";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";
const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  const news = getNews()
  console.log(news);
  res.render("index", { title: "News", allNews: news });
});


// Alle artikels apart
router.get("/newsArticle/:slug", (req: Request, res: Response): void =>{
  const slug: string = req.params.slug;
  const singleNews = getNewsBySlug(slug);
  console.log(singleNews);
  res.render("detail", { title: "News", newsDetail : singleNews });
})

export default router;
