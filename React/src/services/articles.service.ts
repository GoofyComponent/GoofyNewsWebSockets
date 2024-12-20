import { useQuery } from 'react-query';
import { Article } from '../types/article.type';

const getArticles = async (): Promise<Article[]> => {
  const response = await fetch('http://127.0.0.1/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await response.json();
  
  return data.data as Article[];
};

export const useGetArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ['articles'],
    queryFn: getArticles,
  });
};
