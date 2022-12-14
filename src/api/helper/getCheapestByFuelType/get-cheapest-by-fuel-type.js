/**
 * Filter VehVendorAvails array of vehicle objects by fuel type
 * sorting types by cheapest
 * pushing the cheapest of each type to a new array.
 */
module.exports = function () {
  console.log("getCheapestTypesByFuel called!");

  // Array to store top 3 cheapest fuel types
  const cheapestTypesByFuel = [];

  for (const type of ["Petrol", "Diesel", "Electric"]) {
    const cheapestType = this.VehVendorAvails.filter((availability) => {
      return availability.Vehicle["@FuelType"] === type;
    }).sort((a, b) => {
      return (
        a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
      );
    });

    // Add the cheapest of the current type
    if (cheapestType.length > 0) cheapestTypesByFuel.push(cheapestType[0]);
  }

  // Set the new available vehicles
  this.VehVendorAvails =
    cheapestTypesByFuel.length > 0 ? cheapestTypesByFuel : [];

  // Required to chain functions
  return this;
};
