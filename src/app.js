const fetchCarData = require("./api/utils/fetchCarData");
const mapVehicleData = require("./api/utils/mapVehicleData");
const helper = require("./api/helper");
const express = require("express");
const app = express();

/**
 * API Route
 * @note query params
 * @param removeDuplicates
 * @param {String} getCheapestByFuelType e.g electric
 * @param getByCodeCdar
 * @param getByCorporateVendor
 * @param {String} getPriceDescByVendor e.g avis
 * @returns {array} of vehicles objects
 */
app.get("/api/v1", async ({ query }, response) => {
  // This would normally come from a db instead.
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
      console.log(method + " -> " + query[method]);
      if (query[method] !== undefined) {
        const argument = query[method];
        await data[method](argument);
      } else {
        await data[method]();
      }
    }
  }

  response.status(200).send(data.VehVendorAvails);
});

module.exports = app;
