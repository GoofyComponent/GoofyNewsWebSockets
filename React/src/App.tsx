import { useQueryClient } from 'react-query';
import CardArticle from './components/CardArticle';
import NewArticleToast from './components/NewArticleToast';
import { useGetArticles } from './services/articles.service';
import { Article } from './types/article.type';

function App() {
  const queryClient = useQueryClient();
  const { isLoading, isError, isSuccess, data } = useGetArticles();

  const handleToastClick = () => {
    queryClient.invalidateQueries({ queryKey: ['articles'] });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sortedByDate = (a: Article, b: Article) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

  return (
    <main>
      <h1>GOOFY NEWS</h1>
      <section className='p-4'>
        <NewArticleToast onClick={handleToastClick} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {isSuccess && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data.sort(sortedByDate).map((article, index) => (
              <CardArticle
                key={'article-' + article.author + index}
                article={article}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
