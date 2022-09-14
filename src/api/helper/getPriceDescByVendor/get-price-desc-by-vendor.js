/**
 * Filter VehVendorAvails array of vehicle objects by vendor name
 * sorting vehicles by cheapest
 * pushing the cheapest of each type to a new array.
 * @note this function could be merged with getCheapestByFuelType
 */
module.exports = function (vendorName) {
  console.log("getVendorVehiclesByPriceDesc called!");

  // Array to store vehicles by vendor price desc
  const vehiclesByVendorName = this.VehVendorAvails.filter((availability) => {
    return availability.Vendor["@Name"] === vendorName;
  }).sort((a, b) => {
    return (
      a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
    );
  });

  // Set the new available vehicles
  this.VehVendorAvails =
    vehiclesByVendorName.length > 0 ? vehiclesByVendorName : [];

  // Required to chain functions
  return this;
};
