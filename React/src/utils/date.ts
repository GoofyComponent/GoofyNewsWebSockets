export const getTimeAgo = (publishedAt: string): string => {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInSeconds = Math.floor(
    (now.getTime() - publishedDate.getTime()) / 1000
  );

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / secondsInUnit);

    if (interval >= 1) {
      const plural = interval > 1 ? 's' : '';
      return `${interval} ${unit}${plural} ago`;
    }
  }

  return 'just now';
};
