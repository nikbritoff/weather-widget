export const getDate = () => {
  const d = new Date();
  let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  let weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);

  return `${weekday}, ${day} ${month}`;
}