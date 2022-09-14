const getPriceDescByVendor = require("../get-price-desc-by-vendor.js");

const VehVendorAvails = [
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {
      "@RateTotalAmount": "100",
    },
    Vendor: { "@Name": "ALAMO" },
  },
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {
      "@RateTotalAmount": "200",
    },
    Vendor: { "@Name": "ALAMO" },
  },
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {
      "@RateTotalAmount": "100",
    },
    Vendor: { "@Name": "HERTZ" },
  },
  {
    "@Status": "Available",
    Vehicle: {},
    TotalCharge: {
      "@RateTotalAmount": "200",
    },
    Vendor: { "@Name": "HERTZ" },
  },
];

describe("getPriceDescByVendor", () => {
  test.each(["ALAMO", "HERTZ"])(
    "It should get the vehicles by vendor name %s & sort by price desc",
    async (vendorName) => {
      const result = {
        VehVendorAvails,
        getPriceDescByVendor,
      };
      await result.getPriceDescByVendor(vendorName);
      expect(result.VehVendorAvails).toEqual([
        {
          "@Status": "Available",
          Vehicle: {},
          TotalCharge: {
            "@RateTotalAmount": "100",
          },
          Vendor: { "@Name": vendorName },
        },
        {
          "@Status": "Available",
          Vehicle: {},
          TotalCharge: {
            "@RateTotalAmount": "200",
          },
          Vendor: { "@Name": vendorName },
        },
      ]);
    }
  );
});
