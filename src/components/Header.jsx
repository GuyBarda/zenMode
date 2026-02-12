import { useEffect, useState } from 'react';
import { getLocaleTime, getGreetingPeriod } from '../utils';

export const Header = () => {
  const [clock, setClock] = useState(getLocaleTime());
  const [greeting, setGreeting] = useState(getGreetingPeriod());

  useEffect(() => {
    const clockIntervalId = setInterval(() => {
      setClock(getLocaleTime());
    }, 1000);

    const greetingIntervalId = setInterval(() => {
      setGreeting(getGreetingPeriod());
    }, 1000 * 60);

    return () => {
      clearInterval(clockIntervalId);
      clearInterval(greetingIntervalId);
    };
  }, []);

  return (
    <>
      <h1 className="header-title">{clock}</h1>
      <h2 className="header-greeting">{greeting}</h2>
    </>
  );
};
