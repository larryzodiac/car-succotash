const removeDuplicates = require("../remove-duplicates.js");

const VehVendorAvails = [
  {
    "@Status": "Available",
    Vehicle: {
      VehMakeModel: {
        "@Name": "Toyota Rav4 or similar",
      },
    },
    TotalCharge: {},
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      VehMakeModel: {
        "@Name": "Chrysler 300 or similar",
      },
    },
    TotalCharge: {},
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      VehMakeModel: {
        "@Name": "Toyota Rav4 or similar",
      },
    },
    TotalCharge: {},
    Vendor: {},
  },
];

describe("removeDuplicates", () => {
  test("It should remove duplicate vehicles", async () => {
    const result = {
      VehVendorAvails,
      removeDuplicates,
    };
    await result.removeDuplicates();
    expect(result.VehVendorAvails).toEqual([
      {
        "@Status": "Available",
        Vehicle: {
          VehMakeModel: {
            "@Name": "Toyota Rav4 or similar",
          },
        },
        TotalCharge: {},
        Vendor: {},
      },
      {
        "@Status": "Available",
        Vehicle: {
          VehMakeModel: {
            "@Name": "Chrysler 300 or similar",
          },
        },
        TotalCharge: {},
        Vendor: {},
      },
    ]);
  });
});
