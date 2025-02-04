```javascript
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function MyComponent() {
  const router = useRouter();
  const [navigateTo, setNavigateTo] = useState(null);

  useEffect(() => {
    if (navigateTo) {
      router.push(navigateTo);
      setNavigateTo(null);
    }
  }, [navigateTo, router]);

  const handleClick = () => {
    setNavigateTo('/another-page');
  };

  return (
    <button onClick={handleClick}>
      Go to Another Page
    </button>
  );
}

```