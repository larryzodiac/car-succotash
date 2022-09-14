/**
 * Filter VehVendorAvails array of vehicle objects
 * Finding unique vehicles by vehicle make/model.
 */
module.exports = function () {
  console.log("getCheapestTypesByFuel called!");

  // Array to store top 3 cheapest fuel types
  const cheapestTypesByFuel = [];

  for (const type of ["Petrol", "Diesel", "Electric"]) {
    const cheapestType = this.VehVendorAvails.filter(({ Vehicle }) => {
      return Vehicle["@FuelType"] === type;
    }).sort((a, b) => {
      return (
        a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
      );
    });

    // Add the cheapest of the current type
    cheapestTypesByFuel.push(cheapestType[0]);
  }

  // Set the new available vehicles
  this.VehVendorAvails = cheapestTypesByFuel;

  // Required to chain functions
  return this;
};
