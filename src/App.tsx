import { useEffect, useState } from 'react';
import Infographic from './Infographic';
import Walkthrough from './Walkthrough';

// Minimal hash-based routing so the landing page stays static while the
// interactive guide remains reachable at "#walkthrough".
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHash();

  return hash === '#walkthrough' ? <Walkthrough /> : <Infographic />;
}
