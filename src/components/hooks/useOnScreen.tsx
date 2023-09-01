import { Ref, RefObject, useEffect, useState } from "react";

export const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver!(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return isOnScreen;
};
