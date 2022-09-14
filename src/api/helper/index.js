const removeDuplicates = require("./removeDuplicates");
const getCheapestByFuelType = require("./getCheapestByFuelType");
const getByCodeCdar = require("./getByCodeCdar");

/**
 * Sort against the given `VehAvailRSCore`,
 * returning a new `helper`.
 *
 * @param {Object} VehRentalCore
 * @param {Array} VehVendorAvails
 * @return {Object|Helper}
 * @api public
 */

module.exports = async function (VehVendorAvails) {
  // Instanciate Helper library
  return new Helper(VehVendorAvails);
};

function Helper(VehVendorAvails) {
  this.VehVendorAvails = VehVendorAvails;

  // Remove any duplicate Vehicle Models from the list
  this.removeDuplicates = removeDuplicates;

  /**
   * Get cheapest of each car type
   * Fuel Type or Transmission Type, etc?
   * Assuming Fuel Type e.g petrol, diesel, electric
   */
  this.getCheapestByFuelType = getCheapestByFuelType;

  // Get vehicles with code CDAR
  this.getByCodeCdar = getByCodeCdar;

  // Sort by corporate (Corporate Cars are AVIS and ALAMO )
  this.getByCorporateVendor = function () {
    console.log("sortByCorporate called!");
    return this;
  };

  // Within each group sort low-to-high price
  this.sortVendorVehiclesByPrice = function () {
    console.log("sortGroupsByPrice called!");
    return this;
  };
}
