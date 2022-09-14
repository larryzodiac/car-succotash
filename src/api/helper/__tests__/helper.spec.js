const helper = require("../helper.js");

const vehiclesList = [
  {
    "@Status": "Available",
    Vehicle: {
      "@Code": "CDAR",
    },
    TotalCharge: {},
    Vendor: {},
  },
];

describe("helper", () => {
  test("It return a new helper with the correct properties", async () => {
    const result = await helper(vehiclesList);
    for (const property of [
      "getByCodeCdar",
      "getByCorporateVendor",
      "getCheapestByFuelType",
      "getPriceDescByVendor",
      "removeDuplicates",
    ]) {
      expect(result[property]).toBeDefined();
    }
    expect(result.VehVendorAvails).toHaveLength(1);
  });
});
