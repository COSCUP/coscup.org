<script setup>
import { ref } from 'vue'

const sponsorLevels = ['鈦金級', '鑽石級', '黃金級', '白銀級', '青銅級', '好朋友級', '海外講者']

const addons = ref([
  {
    category: '攤位',
    items: [
      {
        details: '',
        limit: '',
        available: true,
        eligibility: {
          鈦金級: '82,500',
          鑽石級: '60,500',
          黃金級: '27,500',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: 'Prime Session',
    items: [
      {
        details: [
          '議程長度：45分鐘',
          '議程時間：Day1 10:00 AM - 10:45 AM',
          '容納人數：500',
          '限量：1個',
        ],
        available: true,
        eligibility: {
          鈦金級: '45,000',
          鑽石級: '45,000',
          黃金級: false,
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: '技術演講',
    items: [
      {
        details: [
          '議程長度：30分鐘',
          '議程時間：Day1 11:00 AM - 14:00 PM',
          '容納人數：500',
        ],
        available: true,
        eligibility: {
          鈦金級: '27,500',
          鑽石級: '27,500',
          黃金級: '27,500',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: 'Workshop',
    items: [
      {
        details: [
          '議程長度：2小時',
          '議程時間：Day2 10:00 AM - 15:00 PM',
          '容納人數：60',
        ],
        available: true,
        eligibility: {
          鈦金級: '27,500',
          鑽石級: '27,500',
          黃金級: '27,500',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: 'Session',
    items: [
      {
        details: [
          '議程長度：30分鐘',
          '議程時間：Day2 10:00 AM - 15:00 PM',
          '容納人數：60',
        ],
        available: true,
        eligibility: {
          鈦金級: '13,750',
          鑽石級: '13,750',
          黃金級: '13,750',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: 'Keynote 演講廳 垂吊布條',
    items: [
      {
        details: '',
        available: true,
        eligibility: {
          鈦金級: '已包含',
          鑽石級: '110,000',
          黃金級: false,
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: '頸帶獨家贊助',
    items: [
      {
        details: '',
        available: true,
        eligibility: {
          鈦金級: '88,000',
          鑽石級: '88,000',
          黃金級: '88,000',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: '會前派對贊助 (與 COSCUP 聯名）',
    items: [
      {
        details: '',
        available: true,
        eligibility: {
          鈦金級: '已包含',
          鑽石級: '165,000',
          黃金級: '165,000',
          白銀級: false,
          青銅級: false,
          好朋友級: false,
          海外講者: false,
        },
      },
    ],
  },
  {
    category: '大會點心區桌旗（兩天）',
    items: [
      {
        details: '',
        available: true,
        eligibility: {
          鈦金級: '已包含',
          鑽石級: '已包含',
          黃金級: '33,000',
          白銀級: '33,000',
          青銅級: '33,000',
          好朋友級: '33,000',
          海外講者: false,
        },
      },
    ],
  },
  {
    category: '網站議程頁面廣告',
    items: [
      {
        details: '選擇：「提升廣告比重」或「新增廣告素材以增加曝光」',
        available: true,
        eligibility: {
          鈦金級: '13,200/則',
          鑽石級: '13,200/則',
          黃金級: '13,200/則',
          白銀級: '13,200/則',
          青銅級: '13,200/則',
          好朋友級: '13,200/則',
          海外講者: '13,200/則',
        },
      },
    ],
  },
])

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
