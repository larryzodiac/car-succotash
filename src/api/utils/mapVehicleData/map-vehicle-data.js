/**
 * Returns a mapped array of availability objects
 * @param {Array} of vendor availability {Objects}
 * @note contains vendor object of vehicle availability array
 * @return {Function|Helper}
 */
module.exports = async (VehVendorAvails) => {
  const vehicleAvailabilities = [];

  for (const { Vendor, VehAvails } of VehVendorAvails) {
    // Add a vendor object to each object in the availability array.
    const mappedVehicles = VehAvails.map((availability) => {
      availability.Vendor = Vendor;
      return availability;
    });
    vehicleAvailabilities.push(...mappedVehicles);
  }

  return vehicleAvailabilities;
};
