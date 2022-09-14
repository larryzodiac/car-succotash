const getCheapestByFuelType = require("../get-cheapest-by-fuel-type.js");

const VehVendorAvails = [
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Petrol",
    },
    TotalCharge: {
      "@RateTotalAmount": "350",
      "@EstimatedTotalAmount": "350",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Petrol",
    },
    TotalCharge: {
      "@RateTotalAmount": "300.00",
      "@EstimatedTotalAmount": "300.00",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Diesel",
    },
    TotalCharge: {
      "@RateTotalAmount": "250.00",
      "@EstimatedTotalAmount": "250.00",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Diesel",
    },
    TotalCharge: {
      "@RateTotalAmount": "200.00",
      "@EstimatedTotalAmount": "200.00",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Electric",
    },
    TotalCharge: {
      "@RateTotalAmount": "150.00",
      "@EstimatedTotalAmount": "150.00",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
  {
    "@Status": "Available",
    Vehicle: {
      "@FuelType": "Electric",
    },
    TotalCharge: {
      "@RateTotalAmount": "100.00",
      "@EstimatedTotalAmount": "100.00",
      "@CurrencyCode": "CAD",
    },
    Vendor: {},
  },
];

describe("removeDuplicates", () => {
  test("It should remove duplicate vehicles", async () => {
    const result = {
      VehVendorAvails,
      getCheapestByFuelType,
    };
    await result.getCheapestByFuelType();
    expect(result.VehVendorAvails).toEqual([
      {
        "@Status": "Available",
        Vehicle: {
          "@FuelType": "Petrol",
        },
        TotalCharge: {
          "@RateTotalAmount": "300.00",
          "@EstimatedTotalAmount": "300.00",
          "@CurrencyCode": "CAD",
        },
        Vendor: {},
      },
      {
        "@Status": "Available",
        Vehicle: {
          "@FuelType": "Diesel",
        },
        TotalCharge: {
          "@RateTotalAmount": "200.00",
          "@EstimatedTotalAmount": "200.00",
          "@CurrencyCode": "CAD",
        },
        Vendor: {},
      },
      {
        "@Status": "Available",
        Vehicle: {
          "@FuelType": "Electric",
        },
        TotalCharge: {
          "@RateTotalAmount": "100.00",
          "@EstimatedTotalAmount": "100.00",
          "@CurrencyCode": "CAD",
        },
        Vendor: {},
      },
    ]);
  });
});
