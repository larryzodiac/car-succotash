module.exports = async (VehVendorAvails) => {
  const newCars = [];

  for (const { Vendor, VehAvails } of VehVendorAvails) {
    const mappedVehicles = VehAvails.map((vehicle) => {
      vehicle.Vendor = Vendor;
      return vehicle;
    });
    newCars.push(...mappedVehicles);
  }

  return newCars;
};
