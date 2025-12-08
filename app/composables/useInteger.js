// Composable pro generování náhodných celých čísel v zadaném rozsahu
export const UseInteger = (min, max) => {
  const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return {getRandomInteger}
}
