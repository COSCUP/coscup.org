<script setup lang="ts">
import { addons, sponsorLevels } from '#data/sponsorship'

function handlePrint() {
  const printContent = document.getElementById('addons-table')!.innerHTML
  const printWindow = window.open('', '_blank')!
  printWindow.document.write(`
    <html>
      <head>
        <title>COSCUP 贊助方案加價購</title>
        <style>
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
            background-color: #4A4947;
            border-color: #000;
            color: #FAF7F0;
          }
          .category-header {
            background-color: #B17457;
            border-color: #000;
            color: #FAF7F0;
          }
          .table-cell {
            background-color: #FAF7F0;
            border-color: #000;
            color: #000;
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
      @click="handlePrint"
    >
      Print Sponsorship Adds-on Table
    </button>

    <div id="addons-table">
      <table class="addons-table">
        <thead>
          <tr>
            <th>項目說明</th>
            <th
              v-for="level in sponsorLevels"
              :key="level"
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
                class="category-header"
                colspan="9"
              >
                {{ category.category }}
              </td>
            </tr>
            <tr
              v-for="item, index in category.items"
              :key="index"
            >
              <td class="table-cell">
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
                class="table-cell"
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
/* Container styling */
.addons-container {
  margin: 20px auto;
  max-width: 1200px;
}

/* Button styling */
.print-button {
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Table styling */
.addons-table {
  width: 100%;
  border-collapse: collapse;
}

td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background-color: #4a4947;
  border-color: #000;
  color: #faf7f0;
  padding: 12px;
}

.category-header {
  background-color: #b17457;
  border-color: #000;
  color: #faf7f0;
}

.table-cell {
  background-color: #faf7f0;
  border-color: #000;
  color: #000;
}

td {
  white-space: nowrap;
}

/* Status styling */
.available-mark {
  color: #16a34a;
  font-weight: bold;
}

.unavailable-mark {
  color: #dc2626;
}

/* Print-specific styles */
@media print {
  .no-print {
    display: none;
  }
}
</style>
