# car-succotash

> A containerised API helper library for car rental data that can be re-used &amp; shared across multiple teams.

This is a week long project undertaken as part of an engineering challenge from a company hiring for a full-stack role.

## Setup

how to run / build.

**`npm run dev`**

Runs the app in the development mode. Nodemon will reload if you make edits.

**`npm run preview`**

Builds the app for production to the `dist` folder. Runs the app in the production mode.

**`npm run lint`**

Run code quality tools, e.g. ESLint, Prettier & Jest.

## Docker

**`npm run build`**

Builds the app for production to the `dist` folder. Used for best performance when deploying.

**`docker-compose up`**

Builds, (re)creates, starts, &amp; attaches to containers for a service.

Use `--build` to re-build images for a service.

## Usage

Easiest method is to open a browser &amp; navigate to http://localhost/api/v1 for Docker & http://localhost:8080/api/v1 for Node. 

Play around with the following query params:

```javascript
/**
 * @note API Route query params
 * @param removeDuplicates
 * @param getCheapestByFuelType
 * @param getByCodeCdar
 * @param getByCorporateVendor
 * @param {String} getPriceDescByVendor e.g avis
 * @returns {array} of vehicles objects
 */
```

```javascript
// e.g
http://localhost/api/v1?getPriceDescByVendor=AVIS&removeDuplicates
```

```javascript
// e.g all params in use.
http://localhost/api/v1?removeDuplicates&getCheapestByFuelType&getByCorporateVendor&getByCodeCdar&getPriceDescByVendor=AVIS
```

# Report

Detailing user research & outcomes.

## Design Principles

- Quality Code.
- Interview at least one engineer.
- Re-usable.
- Easy to use.
- Try something new!

## Time Constraints

Make a conscious decision to ignore the following due to the time frame:

1. Mock database.
2. AWS deployment.
3. TypeScript.

## Persona

![Persona](https://github.com/larryzodiac/car-succotash/blob/main/report/persona.png)

### How might we

- HMW make digestible documentation for Thomas.
- HMW include Thomas in the creation of a DX service?
- HMW alleviate the overhead for Thomas maintaining complex mappers functions.

## Options

1. NPM Package:

```javascript
import Helper from 'car-succotash'

const { data } = axios.get(<DATA_ENDPOINT>)

const newData = new Helper(data)
  .removeDuplicates()
  .sortCheapest()
  .sortCorporate()
  .sortGroups()
  .filterCDAR()
```

2. Containerised Node/Groovy API w/ params

```javascript
// 2.a
const { data } = axios.get(<DATA_ENDPOINT>)

const newData = axios.post('<API_ENDPOINT>/helper?cheapest=true&duplicates=false', { data })
```

```javascript
// Alternatively 2.b
const { data } = axios.get('<API_ENDPOINT>/helper?cheapest=true&duplicates=false')
```

# Assessment

See [GitHub Project](https://github.com/users/larryzodiac/projects/1) for broken down tasks.

For this assessment, option 2.b was selected. This includes an Express API served through an Nginx reverse proxy.

The Express API leverages a `Helper` library to perform operations on the vehicle data. 

This approach was chosen for the following reasons:

- A service can be queried by _both_ FE & BE.
- A service can be reused via terraform modules(w/Helm) & setup in multiple environments.
- One endpoint for helper functions reduces requests(important for FE).

### How might this work in production

- A Helm chart could be created for this docker image to deploy `car-succotash` to Kubernetes.
- A Terraform module would point to said Helm chart which may be used to install `car-succotash`.
- The Terraform module could be shared and re-used between teams/products.

### How might this work on a FE
```javascript
import axios from 'axios';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';

export function getVehciles({
  getCheapestByFuelType,
  getByCodeCdar,
  getByCorporateVendor,
  getPriceDescByVendor,
  removeDuplicates
  dateTo,
} = {}) {
  const filteredParameters = omitBy({
    getCheapestByFuelType,
    getByCodeCdar,
    getByCorporateVendor,
    getPriceDescByVendor,
    removeDuplicates
  }, isNil);
  const queryParameters = new URLSearchParams(filteredParameters);
  
  return axios.get(`${carEndpoint}/api/v1`, { params: queryParameters });
}
```

### Checklist

- [x] Create a small library in NodeJS or Groovy.
- [x] This library will contain API helper functionality that could be re-used and shared across multiple teams.
- [x] Create functionality that will - [x] Remove any duplicate Vehicle Models from the list - [x] Display cheapest of each car type - [x] Allow to pass filter for cars with code ???CDAR??? - [x] Sort by corporate (Corporate Cars are AVIS and ALAMO ) - [x] Within each group sort low-to-high price
- [x] Outline how we would run this application in your README.md to verify functionality
- [x] Create unit tests to validate this functionality
- [x] Code quality such as linting etc.(Optional)
- [x] Create a Dockerfile and Containerize your application (Optional)

## Conclusion

If more time were allowed, the project would implement the following :

1. Test the API & library with engineers.
1. Create a composite front-end e.g Swagger.
1. GitHub Actions deployment to AWS ECR.
1. Create generic filtering functions that can be reused by each helper method.
1. SSL certificate.
