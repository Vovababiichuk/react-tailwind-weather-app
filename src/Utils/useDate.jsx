
export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60*1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  const day = today.toLocaleDateString(locale, {
    weekday: 'long',
    // day: 'numeric',
    // month: 'long',
    // year: 'numeric',
  })

  const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {
    // day: 'numeric',
    month: 'long',
    // year: 'numeric',
  })}\n\n`;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  })

  return { date, time };
}