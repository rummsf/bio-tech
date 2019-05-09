// This function is serving as the data source for the visualisation. Of
// course, in the real world, this data would be pulled from a device in a
// laboratory and funneled through a database. This is just meant to give a
// sense of what that data might look like. We're using pretty, smooth sine
// waves. In the real world, the data would be way, way messier.
const NUM_REACTORS = 12;
const POLLING_INTERVAL = 500;
export default function generateData(clientTimestamp) {
  const START_TIME = clientTimestamp - POLLING_INTERVAL;
  const reactorData = {};
  const dataPoints = 50;
  for (let reactorId = 1; reactorId <= NUM_REACTORS; reactorId += 1) {
    const waveHeight = (reactorId / NUM_REACTORS) * 50;
    const waveWidth = reactorId * (1 / dataPoints);
    const data = [];
    for (let i = 0; i < dataPoints; i += 1) {
      const timestamp =
        START_TIME + Math.round(i * (POLLING_INTERVAL / dataPoints));
      const value = waveHeight * Math.sin(START_TIME / 1000 + waveWidth * i);
      data.push({ timestamp, value });
    }
    reactorData['reactor-' + reactorId] = data;
  }

  return reactorData;
}
