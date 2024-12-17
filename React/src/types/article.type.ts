export type Article = {
  source: {
    id: null | string;
    name: string;
  };
  views?: number;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};
