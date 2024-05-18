import * as maptilersdk from '@maptiler/sdk';

maptilersdk.config.apiKey = 'zkCcGEA9E1IFjsh3UDW9';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [16.62662018, 49.2125578], // starting position [lng, lat]
  zoom: 14, // starting zoom
});

