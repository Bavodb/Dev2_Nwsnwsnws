import express, { Request, Response, Router } from "express";
import { News, getAllNews, getNewsBySlug} from "./services/newsService";

const router: Router = express.Router();

// Homepagina en de lijst van nieuwsitems
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const news: News[] = await getAllNews();
    console.log(news);
    res.render("index", { title: "News", news });
  } catch (error) {
    console.error("Fout bij ophalen nieuws:", error);
    res.status(500).send("Er is een fout opgetreden bij het ophalen van het nieuws.");
  }
});

// Specifieke artikelpagina
router.get("/newsArticle/:slug", async (req: Request, res: Response): Promise<void> => {
  const slug: string = req.params.slug;
    const singleNews: News = await getNewsBySlug(slug);

    res.render("detail", { title: "News Article", newsDetail: singleNews});
})

export default router;





