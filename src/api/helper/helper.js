const removeDuplicates = require("./removeDuplicates");
const getCheapestByFuelType = require("./getCheapestByFuelType");
const getByCodeCdar = require("./getByCodeCdar");
const getByCorporateVendor = require("./getByCorporateVendor");
const getPriceDescByVendor = require("./getPriceDescByVendor");

/**
 * Returns a Helper
 * @return {Function|Helper}
 */
module.exports = async function (VehVendorAvails) {
  // Instanciate Helper library
  return new Helper(VehVendorAvails);
};

/**
 * Represents a helper library.
 * @constructor
 * @param {array} VehVendorAvails - The list of vehicles
 */
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

  // Get vehicles with vendor name AVIS and ALAMO
  this.getByCorporateVendor = getByCorporateVendor;

  /**
   * Get vehicles by vendor & sort by price desc
   * Taking liberties with this function due to research findings
   */
  this.getPriceDescByVendor = getPriceDescByVendor;
}
