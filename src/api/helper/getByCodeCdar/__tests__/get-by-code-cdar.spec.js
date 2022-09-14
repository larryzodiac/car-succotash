const getByCodeCdar = require("../get-by-code-cdar.js");

const VehVendorAvails = [
  {
    "@Status": "Available",
    Vehicle: {
      "@Code": "CDAR",
    },
    TotalCharge: {},
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@Code": "ECAR",
    },
    TotalCharge: {},
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@Code": "ICAR",
    },
    TotalCharge: {},
    Vendor: {},
  },
];

describe("getByCodeCdar", () => {
  test("It should filter by vehicle code CDAR", async () => {
    const result = {
      VehVendorAvails,
      getByCodeCdar,
    };
    await result.getByCodeCdar();
    expect(result.VehVendorAvails).toEqual([
      {
        "@Status": "Available",
        Vehicle: {
          "@Code": "CDAR",
        },
        TotalCharge: {},
        Vendor: {},
      },
    ]);
  });
});
