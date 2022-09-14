const removeDuplicates = require("./removeDuplicates");

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

  // Display cheapest of each car type
  this.getCheapestTypes = function () {
    console.log("sortByPrice called!");
    return this;
  };

  // Allow to pass filter for cars with code “CDAR”
  this.filterByCdar = function () {
    console.log("filterByCdar called!");
    return this;
  };

  // Sort by corporate (Corporate Cars are AVIS and ALAMO )
  this.sortByCorporate = function () {
    console.log("sortByCorporate called!");
    return this;
  };

  // Within each group sort low-to-high price
  this.sortGroupsByPrice = function () {
    console.log("sortGroupsByPrice called!");
    return this;
  };
}