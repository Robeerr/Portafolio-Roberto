export const getGeoInfo = async () => {
  const ipResponse = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipResponse.json();
  const geoResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
  const geoData = await geoResponse.json();
  return geoData;
};
