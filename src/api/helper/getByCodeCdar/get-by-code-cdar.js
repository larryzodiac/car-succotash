/**
 * Filter VehVendorAvails array of vehicle objects by code CDAR
 */
module.exports = function () {
  console.log("getByCodeCdar called!");

  const vehiclesByCodeCdar = this.VehVendorAvails.filter((availability) => {
    return availability.Vehicle["@Code"] === "CDAR";
  });

  // Set the new available vehicles
  this.VehVendorAvails =
    vehiclesByCodeCdar.length > 0 ? vehiclesByCodeCdar : [];

  // Required to chain functions
  return this;
};
