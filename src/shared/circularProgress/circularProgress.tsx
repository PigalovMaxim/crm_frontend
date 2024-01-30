import { useEffect, useRef, useState } from "react";

export default function CircularProgress({
  size,
  color,
  width,
  progress,
}: {
  width: number;
  size: number;
  progress: number;
  color: string;
}) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const step = 2;
  const _currentProgress = useRef(0);
  const arcLength = 2 * Math.PI * (size / 2 - width);
  const arcOffset = arcLength * ((100 - currentProgress) / 100);

  const animateProgress = () => {
    _currentProgress.current += step;
    setCurrentProgress(_currentProgress.current);
    if (_currentProgress.current >= progress) {
      _currentProgress.current = progress;
      return;
    }
    requestAnimationFrame(() => animateProgress());
  };

  useEffect(() => {
    animateProgress();
  }, []);

  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-90deg)" }}
      fill="transparent"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - width}
        strokeWidth={width}
        strokeDashoffset={arcOffset}
        strokeDasharray={arcLength}
        stroke={color}
        strokeLinecap="round"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - width}
        strokeWidth={width}
        stroke={color + "50"}
      />
    </svg>
  );
}
