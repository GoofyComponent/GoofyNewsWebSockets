import { Article } from '../types/article.type';
import { getColorFromLetter } from '../utils/colors';
import { getTimeAgo } from '../utils/date';
import { getReadingTime } from '../utils/string';
import { IconEye } from './Icons';

const CardArticle = ({ article }: { article: Article }) => {
  const { author, content, title, urlToImage, source, publishedAt, views } =
    article;

  return (
    <div className='border relative overflow-hidden rounded-lg'>
      <div className='w-full aspect-video'>
        {urlToImage ? (
          <img
            className='object-cover w-full h-full '
            src={urlToImage}
            alt={title}
          />
        ) : (
          <img
            className='object-cover w-full h-full '
            src='/placeholder.png'
            alt={title}
          />
        )}
        <div className='rounded-full bg-gray-200 text-gray-700 text-xs px-2 py-1 w-fit absolute top-2 right-2 shadow-md'>
          {content && getReadingTime(content)}
        </div>
      </div>
      <div className='p-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-sm uppercase tracking-wide font-medium text-black/50'>
            {source.name}
          </p>
          <div className='flex items-center gap-2'>
            <p>
              {views
                ? views >= 1000
                  ? `${(views / 1000).toFixed(1)}k`
                  : views
                : '0'}
            </p>
            <IconEye />
          </div>
        </div>
        <h2 className='text-xl text-ellipsis-2 font-semibold'>{title}</h2>
        <hr />
        <div className='flex items-center gap-2'>
          <div
            className='uppercase text-xs rounded-full w-6 h-6 flex items-center justify-center text-white shrink-0'
            style={{
              backgroundColor: author
                ? getColorFromLetter(author[0])
                : '#00000050',
            }}
          >
            <p>{author ? author[0] : 'N/A'}</p>
          </div>
          <p className='text-ellipsis overflow-hidden whitespace-nowrap'>
            {author}
          </p>
          <p className='text-black/50 whitespace-nowrap text-sm'>- {getTimeAgo(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
