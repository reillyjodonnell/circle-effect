export function Rings() {
  const radius = 4;

  const numOfRings = 1;

  const heightOfSVG = 24;
  const widthOfSVG = 24;

  return (
    <div className="flex w-full h-full bg-black justify-center items-center">
      <svg viewBox="0 0 24 24" fill="none">
        {Array.from({ length: numOfRings }).map((_, index) => {
          return (
            <circle
              cx={widthOfSVG / 2}
              cy={heightOfSVG / 2}
              r={radius - index}
              className="stroke-white"
              strokeWidth={0.1}
            />
          );
        })}
      </svg>

      <div />
    </div>
  );
}
