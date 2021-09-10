export default async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/');
  const result = await request.json();
  return result;
};
