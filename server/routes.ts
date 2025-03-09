import express, { Request, Response, Router } from "express";
import { getNews, getNewsBySlug } from "./data/newsService"; 
import { News, getAllNews } from "./services/newsService"; 

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

// Route om nieuws uit de database op te halen
router.get("/news", async (req: Request, res: Response): Promise<void> => {
  try {
    const news: News[] = await getAllNews(); 
    res.render("index", { news, title: "Recent nieuws" }); 
  } catch (error) {
    console.error("Fout bij ophalen nieuws:", error);
    res.status(500).send("Er is een fout opgetreden bij het ophalen van het nieuws.");
  }
});

// Specifieke artikelpagina (per artikel via de slug)
router.get("/newsArticle/:slug", async (req: Request, res: Response): Promise<void> => {
  const slug: string = req.params.slug; 
  try {
    const singleNews = await getNewsBySlug(slug); 
    if (singleNews) {
      res.render("detail", { title: singleNews.title, newsDetail: singleNews });  
    } else {
      res.status(404).send("Artikel niet gevonden"); 
    }
  } catch (error) {
    console.error("Fout bij ophalen artikel:", error);
    res.status(500).send("Er is een fout opgetreden bij het ophalen van het artikel.");
  }
});

export default router;




// import express, { Request, Response, Router } from "express";
// import { getNews, getNewsBySlug } from "./data/newsService";
// import { News, getAllNews } from "./services/newsService"; 

// const router: Router = express.Router();

// // Homepagina
// router.get("/", (req: Request, res: Response): void => {
//   const news = getNews();
//   console.log(news);
//   res.render("index", { title: "News", allNews: news });
// });

// // Route om nieuws uit database op te halen
// router.get("/news", async (req: Request, res: Response) => {
//   try {
//     const news: News[] = await getAllNews(); 
//     res.render("news", { news, title: "Recent nieuws" });
//   } catch (error) {
//     console.error("Fout bij ophalen nieuws:", error);
//     res.status(500).send("Er is een fout opgetreden bij het ophalen van het nieuws.");
//   }
// });

// // Alle artikels apart
// router.get("/newsArticle/:slug", (req: Request, res: Response): void => {
//   const slug: string = req.params.slug;
//   const singleNews = getNewsBySlug(slug);
//   console.log(singleNews);
//   res.render("detail", { title: "News", newsDetail: singleNews });
// });

// export default router;
