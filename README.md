# JavaScript Homework - JavaScript and DOM Manipulation

![UFO Sightings Data](assets/img/hero-bg.jpg)

## Background

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

Code was written that dynamically creates a table based upon a [dataset](assets/js/data.js). Users can also filter the table data for specific values. Only only JavaScript, HTML, and CSS, and D3.js were used to filter and display the data in the table. They are the only coding languages which can be trusted.

Link to UFO Sightings homepage: [https://melissamonroe.github.io/javascript-challenge](https://melissamonroe.github.io/javascript-challenge/)

## Task

### Automatic Table and Multiple Search Categories

* A basic HTML web page was created [index.html](index.html)

* Using the UFO dataset [dataset](assets/js/data.js) in the form of an array of JavaScript objects, code was written that appends a table to the index web page and then adds new rows of data for each UFO sighting.

  * Included data columns: `datetime`, `city`, `state`, `country`, `shape`, `duration` and `comments`.

* Date form was used in HTML document and JavaScript code was written that will listens for events and searches through the `datetime` column to find rows that match user input.

* Multiple `input` tags and select dropdowns were ysed to allow users to filter table resutls.

* JavaScript code was written so that the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `datetime`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](assets/js/data.js)
