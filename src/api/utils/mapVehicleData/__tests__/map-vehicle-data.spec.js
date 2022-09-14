const mapVehicleData = require("../map-vehicle-data.js");

const VehVendorAvails = [
  {
    Vendor: {
      "@Code": "125",
      "@Name": "ALAMO",
    },
    VehAvails: [
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
      },
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
      },
    ],
  },
  {
    Vendor: {
      "@Code": "2338",
      "@Name": "HERTZ",
    },
    VehAvails: [
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
      },
    ],
  },
];

describe("mapVehicleData", () => {
  test("It should map vendor vehicles", async () => {
    const result = await mapVehicleData(VehVendorAvails);
    expect(result).toEqual([
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
        Vendor: {
          "@Code": "125",
          "@Name": "ALAMO",
        },
      },
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
        Vendor: {
          "@Code": "125",
          "@Name": "ALAMO",
        },
      },
      {
        "@Status": "Available",
        Vehicle: {},
        TotalCharge: {},
        Vendor: {
          "@Code": "2338",
          "@Name": "HERTZ",
        },
      },
    ]);
  });
});
