import "@components/graphics/planets/PlanetBackground.scss";

function Random(seed) {
  this.seed = seed % 2147483647;
  if (this.seed <= 0) this.seed += 2147483646;
}

Random.prototype.next = function () {
  return (this.seed = (this.seed * 16807) % 2147483647);
};

Random.prototype.nextInt = function (min, max) {
  return Math.floor((this.next() / 2147483647) * (max - min + 1) + min);
};

function generateClipPathFront(currentPlanet, windowWidth) {
  const random = new Random(currentPlanet.seed);

  const points = [];
  for (let x = 0; x <= 100; x += 5) {
    points.push({
      x,
      y: random.nextInt(
        windowWidth > 650 ? 52 : 52 * (windowWidth / 638),
        windowWidth > 650 ? 53 : 53 * (windowWidth / 638)
      ),
    });
  }

  points.push({ x: 100, y: 100 });
  points.push({ x: 0, y: 100 });
  points.push({ x: 0, y: 5 });

  const path = points.map((point) => `${point.x}% ${point.y}%`).join(", ");

  return `polygon(${path})`;
}

function generateClipPathMid(currentPlanet, windowWidth) {
  const random = new Random(currentPlanet.seed);

  const points = [];
  for (let x = 0; x <= 100; x += 10) {
    points.push({
      x,
      y: random.nextInt(
        windowWidth > 650 ? 38 : 38 * (windowWidth / 638),
        windowWidth > 650 ? 48 : 48 * (windowWidth / 638)
      ),
    });
  }

  points.push({ x: 100, y: 100 });
  points.push({ x: 0, y: 100 });
  points.push({ x: 0, y: 5 });

  const path = points.map((point) => `${point.x}% ${point.y}%`).join(", ");

  return `polygon(${path})`;
}

function PlanetBackground({ currentPlanet, windowWidth }) {
  const clipPathFront = generateClipPathFront(currentPlanet, windowWidth);
  const clipPathMid = generateClipPathMid(currentPlanet, windowWidth);

  if (currentPlanet.id !== 1) {
    return (
      <>
        <div
          className="planet-background-sky"
          style={{ background: currentPlanet.skyColor }}
        />
        <div
          className="planet-background-mid"
          style={{ clipPath: clipPathMid, background: currentPlanet.midColor }}
        />
        <div
          className="planet-background-front"
          style={{
            clipPath: clipPathFront,
            background: currentPlanet.frontColor,
            zIndex: 1,
          }}
        />
      </>
    );
  }
  return null;
}

export default PlanetBackground;
