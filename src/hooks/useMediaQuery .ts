import { useState, useEffect } from 'react';

// Custom useMediaQuery hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Initial check
    handleChange();

    // Add listener
    mediaQuery.addEventListener('change', handleChange);

    // Clean up listener on unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
