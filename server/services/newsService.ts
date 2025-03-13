// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een nieuwsartikel
export interface News {
  id?: number;
  slug?: string;
  title: string;
  content?: string;
  image_url?: string;
  created_at?: string;
}

// Alle nieuwsartikelen ophalen
export async function getAllNews(): Promise<News[]> {
    const data : News[] = await sql`select * from news`;
    return data;
}

export async function getNewsBySlug(slug: string): Promise<News> {
    const data : News[] = await sql`select * from news where slug = ${slug}`;
    return data[0];
}

// Comments 
export async function getComments(): Promise<News[]> {
  try{
    const data: News[] = await sql`select * from comments`;
    return data;
  }
  catch(error){
    console.log("Error could not load comments", error);
    throw new Error ("Comments not fetched")
  }
}