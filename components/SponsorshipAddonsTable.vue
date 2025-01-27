<script setup lang="ts">
import { addons, sponsorLevels } from '../data/sponsorship'

function handlePrint() {
  const printContent = document.getElementById('addons-table').innerHTML
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <html>
      <head>
        <title>COSCUP 贊助方案加價購項目</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
          table { 
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #f5f5f5;
          }
          .category-header {
            background-color: #eef2ff;
            font-weight: bold;
          }
          .available-mark {
            color: #16a34a;
            font-weight: bold;
          }
          .unavailable-mark {
            color: #dc2626;
          }
          @media print {
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.print()
}
</script>

<template>
  <div class="addons-container">
    <button
      class="print-button no-print"
      style="margin-bottom: 20px; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;"
      @click="handlePrint"
    >
      Print Sponsorship Adds-on Table
    </button>

    <div id="addons-table">
      <table class="min-w-full border-collapse">
        <thead>
          <tr>
            <th class="border p-3 bg-gray-50">
              項目說明
            </th>
            <th
              v-for="level in sponsorLevels"
              :key="level"
              class="border p-3 bg-gray-50 text-center"
            >
              {{ level }}
            </th>
          </tr>
        </thead>

        <tbody>
          <template
            v-for="category in addons"
            :key="category.category"
          >
            <tr>
              <td
                class="category-header border p-3"
                colspan="9"
              >
                {{ category.category }}
              </td>
            </tr>
            <tr
              v-for="item in category.items"
              :key="item.name"
            >
              <td class="border p-3">
                <ul v-if="Array.isArray(item.details)">
                  <li
                    v-for="detail in item.details"
                    :key="detail"
                  >
                    {{ detail }}
                  </li>
                </ul>
                <span v-else>{{ item.details }}</span>
              </td>
              <td
                v-for="level in sponsorLevels"
                :key="level"
                class="text-center"
              >
                <span
                  :class="item.eligibility[level] ? 'available-mark' : 'unavailable-mark'"
                >
                  {{
                    typeof item.eligibility[level] === 'string'
                      ? item.eligibility[level]
                      : item.eligibility[level]
                        ? '✓'
                        : '✗'
                  }}
                </span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.addons-container {
  margin: 20px auto;
  max-width: 1200px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  white-space: nowrap;
}

.category-header {
  background-color: #eef2ff;
  font-weight: bold;
}

.available-mark {
  color: #16a34a;
  font-weight: bold;
}

.unavailable-mark {
  color: #dc2626;
}
</style>
