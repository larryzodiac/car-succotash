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

Easiest method is to open a browser &amp; navigate to `http://localhost/api/v1`.

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

![Persona](http://url/to/img.png)

### How might we

- HMW make digestible documentation for Thomas.
- HMW include Thomas in the creation of a DX service?
- HMW alleviate the overhead for Thomas maintaining complex mappers functions.

## Options

1. NPM Package:

```
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

```
// 2.a
const { data } = axios.get(<DATA_ENDPOINT>)

const newData = axios.post('<API_ENDPOINT>/helper?cheapest=true&duplicates=false', { data })
```

```
// Alternatively 2.b
const { data } = axios.get('<API_ENDPOINT>/helper?cheapest=true&duplicates=false')
```

# Assessment

For this assessment, option 2.b was selected for the following reasons:

- A service can be queried by _both_ FE & BE.
- A service can be reused via terraform modules(w/Helm) & setup in multiple environments.
- One endpoint for helper functions reduces requests(important for FE).

See [GitHub Project](https://github.com/users/larryzodiac/projects/1) for broken down tasks.

Implement the following:

- [x] Create a small library in NodeJS or Groovy.
- [x] This library will contain API helper functionality that could be re-used and shared across multiple teams.
- [x] Create functionality that will - [x] Remove any duplicate Vehicle Models from the list - [x] Display cheapest of each car type - [x] Allow to pass filter for cars with code “CDAR” - [x] Sort by corporate (Corporate Cars are AVIS and ALAMO ) - [x] Within each group sort low-to-high price
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
