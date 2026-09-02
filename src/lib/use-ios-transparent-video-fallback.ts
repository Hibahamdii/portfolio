import { useEffect, useState } from "react";

export function useIosTransparentVideoFallback() {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const isAppleTouchDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setUseFallback(isAppleTouchDevice);
  }, []);

  return useFallback;
}
