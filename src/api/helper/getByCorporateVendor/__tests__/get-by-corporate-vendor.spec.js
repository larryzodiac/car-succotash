const getByCorporateVendor = require("../get-by-corporate-vendor.js");

const VehVendorAvails = [
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {},
    Vendor: { "@Name": "AVIS" },
  },
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {},
    Vendor: { "@Name": "HERTZ" },
  },
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {},
    Vendor: { "@Name": "ALAMO" },
  },
];

describe("getByCorporateVendor", () => {
  test("It should filter by vendor name AVIS or ALAMO", async () => {
    const result = {
      VehVendorAvails,
      getByCorporateVendor,
    };
    await result.getByCorporateVendor();
    expect(result.VehVendorAvails).toEqual([
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
        Vendor: { "@Name": "AVIS" },
      },
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
        Vendor: { "@Name": "ALAMO" },
      },
    ]);
  });
});
