<script setup>
import { ref } from 'vue'
import { marked } from 'marked'

const sponsors = ref([
  {
    level: '鈦金級',
    price: {
      main: 'NT$ 238,000',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '徵才版面牆獨家曝光',
        '演講廳垂吊布條曝光',
        '會前派對贊助',
        '會議桌前看板曝光',
        '大會點心桌旗曝光',
        '前夜派對飲料券 4 張',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
        '官方 blog 文章 1 篇',
      ],
    },
  },
  {
    level: '鑽石級',
    price: {
      main: 'NT$ 170,500',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '大會點心桌旗曝光',
        '前夜派對飲料券 2 張',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
        '官方 blog 文章 1 篇',
      ],
    },
  },
  {
    level: '黃金級',
    price: {
      main: 'NT$ 137,500',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '前夜派對飲料券 1 張',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
        '官方 blog 文章 1 篇',
      ],
    },
  },
  {
    level: '白銀級',
    price: {
      main: 'NT$ 82,500',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
      ],
    },
  },
  {
    level: '青銅級',
    price: {
      main: 'NT$ 38,500',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
      ],
    },
  },
  {
    level: '好朋友級',
    price: {
      main: 'NT$ 22,000',
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
      ],
    },
  },
  {
    level: '海外講者 旅費贊助',
    price: {
      main: 'NTD 6,000 ＋',
      details: [
        '港中澳：NTD 15,000/位',
        '大洋洲、亞洲（除港中澳）：NTD 30,000/位',
        '非洲：NTD 45,000/位',
        '歐洲北美：NTD 60,000/位',
        '中南美洲：NTD 82,500/位',
      ],
    },
    benefits: {
      '官網 及 OPass app：': [
        '公司簡介',
      ],
      '活動現場：（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        'Travel sponsor 胸針2枚 (Sponsor 1, Speaker 1)',
      ],
      '社群網站：': [
        '官方社群網站宣傳',
      ],
      '截止收件日期：': [
        '2024/6/14',
      ],
    },
  },
])

function renderMarkdown(text) {
  return marked(text)
}

function handlePrint() {
  // Create a new window with just the table content
  const printContent = document.getElementById('sponsorship-table').innerHTML
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <html>
      <head>
        <title>COSCUP Sponsorship Levels</title>
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
            background-color: #f5f5f5;
          }
          .benefit-category {
            font-weight: bold;
            color: #2c3e50;
            margin-top: 10px;
            margin-bottom: 5px;
          }
          .benefit-list {
            margin: 0;
            padding-left: 20px;
          }
          .benefit-item {
            margin: 3px 0;
          }
          .benefit-item p {
            margin: 0;
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
  <div class="sponsorship-container">
    <button
      class="print-button no-print"
      style="margin-bottom: 20px; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;"
      @click="handlePrint"
    >
      Print Sponsorship Table
    </button>

    <div id="sponsorship-table">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 12px; background-color: #f5f5f5;">
              贊助等級
            </th>
            <th style="border: 1px solid #ddd; padding: 12px; background-color: #f5f5f5;">
              贊助金額
            </th>
            <th style="border: 1px solid #ddd; padding: 12px; background-color: #f5f5f5;">
              贊助福利
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="sponsor in sponsors"
            :key="sponsor.level"
          >
            <td style="border: 1px solid #ddd; padding: 12px;">
              {{ sponsor.level }}
            </td>
            <td style="border: 1px solid #ddd; padding: 12px;">
              <div class="price-main">
                {{ sponsor.price.main }}
              </div>
              <ul class="price-details">
                <li
                  v-for="detail in sponsor.price.details"
                  :key="detail"
                >
                  {{ detail }}
                </li>
              </ul>
            </td>
            <td style="border: 1px solid #ddd; padding: 12px;">
              <template
                v-for="(benefits, category) in sponsor.benefits"
                :key="category"
              >
                <div class="benefit-category">
                  {{ category }}
                </div>
                <ul class="benefit-list">
                  <li
                    v-for="benefit in benefits"
                    :key="benefit"
                    class="benefit-item"
                  >
                    <span v-html="renderMarkdown(benefit)" />
                  </li>
                </ul>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
