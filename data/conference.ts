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
  title: 'COSCUP 2024',
  year: 2024,
  startDate: new Date('2024-08-03'),
  endDate: new Date('2024-08-04'),
}
