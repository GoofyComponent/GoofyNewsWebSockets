export const getColorFromLetter = (letter: string): string => {
  const colors = {
    a: '#FF6B6B',
    b: '#4ECDC4',
    c: '#45B7D1',
    d: '#96CEB4',
    e: '#FFEEAD',
    f: '#D4A5A5',
    g: '#9B59B6',
    h: '#3498DB',
    i: '#E74C3C',
    j: '#2ECC71',
    k: '#F1C40F',
    l: '#1ABC9C',
    m: '#E67E22',
    n: '#C0392B',
    o: '#8E44AD',
    p: '#16A085',
    q: '#D35400',
    r: '#7F8C8D',
    s: '#2C3E50',
    t: '#F39C12',
    u: '#BDC3C7',
    v: '#C0392B',
    w: '#27AE60',
    x: '#8E44AD',
    y: '#2980B9',
    z: '#F1C40F',
  };

  const defaultColor = '#95A5A6';
  const normalizedLetter = letter.toLowerCase().charAt(0);

  return colors[normalizedLetter as keyof typeof colors] || defaultColor;
};
