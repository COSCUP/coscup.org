/**
 * Conference data
 *
 * This is where you can define shared data specific to the current conference.
 *
 * @example
 * <script setup lang="ts">
 * import { conference } from '#data/conference'
 *
 * const start = conference.startDate.toLocaleDateString()
 * const end = conference.endDate.toLocaleDateString()
 * </script>
 *
 * Conference date: {{ start }} ~ {{ end }}
 */
export const conference = {
  title: 'COSCUP 2025',
  description: 'Conference for Open Source Coders, Users & Promoters',
  year: 2025,
  startDate: new Date('2025-08-09'),
  endDate: new Date('2025-08-10'),
}
