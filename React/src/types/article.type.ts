export type Article = {
  title: string;
  views?: number;
  description: string | null;
  slug: string;
  image: string | null;
  published_at: string;
  content: string | null;
  user: {
      name: string;
  }
};
