# car-succotash

A containerised API helper library for car rental data that can be re-used &amp; shared across multiple teams.

## Design Principles

1. Minimal Setup(Limited Time).
2. Easy to use.
3. Re-usable.
4. Ignore TypeScript(Limited Time).

## Research

TO-DO.

## User Flow

TO-DO.

## Usage

TO-DO.

## Notes

```
/**
 * Method 1
 * NPM Package
 */

import Helper from 'car-succotash'

const { data } = axios.get('http://www.cartrawler.com/ctabe/cars.json')

const newData = new Helper(data)
  .removeDuplicates() // Remove any duplicate Vehicle Models from the list
  .sortCheapest() // Display cheapest of each car type
  .sortCorporate() // Sort by corporate (Corporate Cars are AVIS and ALAMO )
  .sortGroups('cheapest') // Within each group sort low-to-high price
  .filterCDAR() // Allow to pass filter for cars with code “CDAR”
```

```
/**
 * Method 2
 * Containerised Express API w/ params
 */

const { data } = axios.get('http://www.cartrawler.com/ctabe/cars.json')

const newData = axios.post('/helper?cheapest=true&duplicates=false', { data })
```
