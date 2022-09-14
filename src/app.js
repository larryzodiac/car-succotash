const express = require("express");
const fetchCarData = require("./api/utils/fetchCarData");
const mapVehicleData = require("./api/utils/mapVehicleData");
const helper = require("./api/helper");

const app = express();

/**
 * Sort against the given `VehAvailRSCore`,
 * returning a new `helper`.
 *
 * @param {Boolean} filterByCdar
 * @param {Boolean} removeDuplicates
 * @param {String} sortByCorporate
 * @param {Boolean} sortByPrice
 * @param {String} sortGroupsByPrice
 */
app.get("/api/v1", async ({ query }, response) => {
  // Fetch the data
  /**
   * Make a request to the data endpoint.
   * This would normally come from a db instead.
   */
  const {
    VehAvailRSCore: { VehRentalCore, VehVendorAvails },
  } = await fetchCarData();

  // Sort the vehicles into one single list
  const vehiclesList = await mapVehicleData(VehVendorAvails);

  // Invoke the helper
  data = await helper(vehiclesList);

  /**
   * Execute any methods using the helper library
   * using values provided by query param.
   */
  for (const method in query) {
    if (query.hasOwnProperty(method)) {
      // console.log(method + " -> " + query[method]);
      // await data[method]()
    }
  }

  await data.removeDuplicates().getCheapestByFuelType();

  response.status(200).send(data.VehVendorAvails);
});

module.exports = app;
