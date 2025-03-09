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