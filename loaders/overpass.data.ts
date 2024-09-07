import osmToGeoJSON from 'osmtogeojson'
import { defineLoader } from 'vitepress'

/**
 * Query the Overpass API for the geometry of the given objects.
 * @see https://wiki.openstreetmap.org/wiki/Overpass_API
 * @param objects The OSM IDs of the objects to query.
 * @example const geometry = await queryOverpass(['way(1159328965)'])
 */
function queryOverpass(objects: string[]): Promise<GeoJSON.GeoJsonObject> {
  /* eslint-disable prefer-template --
   * string concatenation is more readable across multiple lines
   */
  // Build the Overpass API query
  const query =
    '[out:json];' +         // Set the output format to JSON
    objects.map((object) => // For each object
      `${object};` +        // Query the object
      'out geom;',          // Output the geometry
    ).join('')              // Join the queries
  /* eslint-enable prefer-template */

  return fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: `data=${query}`,
  })
    .then((response) => response.json())
    .then(osmToGeoJSON)
}

interface OverpassData {
  venueGeometry: GeoJSON.GeoJsonObject
  buildingGeometries: GeoJSON.GeoJsonObject
}

/**
 * The geometry of the venue and its buildings.
 */
declare const data: OverpassData
export { data }

export default defineLoader({
  async load(): Promise<OverpassData> {
    const [venueGeometry, buildingGeometries] = await Promise.all([
      queryOverpass([
        'relation(5355856)', // 國立台灣科技大學
      ]),
      queryOverpass([
        'way(646301762)', // 研揚大樓 (RB)
        'way(646293060)', // 綜合研究大樓 (TR)
      ]),
    ])

    return { venueGeometry, buildingGeometries }
  },
})
