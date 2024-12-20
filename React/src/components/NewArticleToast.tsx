import clsx from 'clsx';
import { useEffect, useState } from 'react';

const NewArticleToast = ({ onClick }: { onClick?: () => void }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      onClick={onClick}
      className={clsx(
        'fixed top-4 right-1/2 translate-x-1/2 bg-white shadow-md rounded-lg p-4 flex gap-4 z-50 transition-[transform,opacity] cursor-pointer',
        isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      )}
    >
      <p>New Article!</p>
      Clic to refresh
    </div>
  );
};

export default NewArticleToast;