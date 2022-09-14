/**
 * Filter VehVendorAvails array of vehicle objects
 * Finding unique vehicles by vehicle make/model.
 */
module.exports = function () {
  console.log("removeDuplicates called!");

  const uniqueVehiclesByName = this.VehVendorAvails.filter(
    (value, index, self) => {
      // return the index of the first element in VehAvails that matches by '@Name'
      const firstMatchingIndex = self.findIndex(
        (item) =>
          item.Vehicle.VehMakeModel["@Name"] ===
          value.Vehicle.VehMakeModel["@Name"]
      );
      // If the vehicle does not exist already, it passes
      // i.e if the vehicle is found at
      const vehicleDoesNotExist = firstMatchingIndex === index;
      return vehicleDoesNotExist;
    }
  );

  // Set the new available vehicles
  this.VehVendorAvails = uniqueVehiclesByName;

  // Required to chain functions
  return this;
};
