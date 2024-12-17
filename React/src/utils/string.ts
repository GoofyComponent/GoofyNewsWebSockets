export const getReadingTime = (content: string): string => {
  const wordsCount = Math.ceil(content.length / 5);

  const readingTimeMinutes = Math.ceil(wordsCount / 225);

  if (readingTimeMinutes < 1) {
    return "moins d'une minute";
  } else if (readingTimeMinutes === 1) {
    return '1 minute';
  } else {
    return `${readingTimeMinutes} minutes`;
  }
};
