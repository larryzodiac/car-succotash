/**
 * Filter VehVendorAvails array of vehicle objects by code CDAR
 */
module.exports = function () {
  console.log("getByCorporateVendor called!");

  const vehiclesByCorporateVendor = this.VehVendorAvails.filter(
    (availability) => {
      return (
        availability.Vendor["@Name"] === "AVIS" ||
        availability.Vendor["@Name"] === "ALAMO"
      );
    }
  );

  // Set the new available vehicles
  this.VehVendorAvails =
    vehiclesByCorporateVendor.length > 0 ? vehiclesByCorporateVendor : [];

  // Required to chain functions
  return this;
};
