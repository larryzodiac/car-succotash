/**
 * Fetches the car data
 */
module.exports = async () => {
  try {
    const response = await fetch("http://www.cartrawler.com/ctabe/cars.json");
    const [VehAvailRSCore] = await response.json();
    return VehAvailRSCore;
  } catch (error) {
    console.error(error);
  }
};
