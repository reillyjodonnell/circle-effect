import './App.css';
import { Rings } from './examples/rings';

function logisticFunction(x, L, k, x0) {
  return L / (1 + Math.exp(-k * (x - x0)));
}

function App() {
  const numOfRings = 14;
  const height = 30;
  const width = 30;

  return (
    <div className="flex w-full h-full bg-black justify-center items-center">
      <svg
        viewBox={`0 0 ${height} ${width}`}
        className="w-full h-full"
        fill="none"
      >
        {/* loops from outter ring to inner */}
        {Array.from({ length: numOfRings + 1 }).map((_, index) => {
          const dynamicRadius = numOfRings - index;
          const numberOfCircles = 7 * dynamicRadius || 1;
          return Array.from({ length: numberOfCircles }).map((_, index) => {
            const angle = (index * 2 * Math.PI) / numberOfCircles;
            const x = Math.cos(angle) * dynamicRadius + width / 2;
            const y = Math.sin(angle) * dynamicRadius + height / 2;

            return (
              <circle
                cx={x}
                cy={y}
                r={logisticFunction(dynamicRadius, -0.5, 0.4, 6) + 0.5}
                className="fill-white"
              />
            );
          });
        })}
      </svg>

      <div />
    </div>
  );
}

export default App;
