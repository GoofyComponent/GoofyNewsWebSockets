import { useQuery } from 'react-query';
import articles from '../data/articles.json';
import { Article } from '../types/article.type';

const getArticles = async (): Promise<Article[]> => {
  const response = articles.articles;
  return response;
};

export const useGetArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ['articles'],
    queryFn: getArticles,
  });
};
