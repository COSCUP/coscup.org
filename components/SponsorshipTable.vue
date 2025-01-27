<script setup>
import { marked } from 'marked'
import { sponsors } from '../data/sponsorship'

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
