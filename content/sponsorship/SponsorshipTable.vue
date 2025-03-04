<script setup lang="ts">
import { marked } from 'marked'
import { sponsors } from '#data/sponsorship'

function handlePrint() {
  const printContent = document.getElementById('sponsorship-table')!.innerHTML
  const printWindow = window.open('', '_blank')!
  printWindow.document.write(`
    <html>
      <head>
        <title>COSCUP 贊助方案</title>
        <style>
          table { 
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #000;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #4A4947;
            color: #FAF7F0;
            font-weight: bold;
          }
          .text-bold {
            font-weight: bold;
          }
          .price-details {
            margin: 0;
            padding-left: 20px;
          }
          .benefit-category {
            background-color: #B17457;
            border-color: #000;
            font-weight: bold;
            color: #FAF7F0;
            margin: 10px 0 5px;
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
    <VPButton @click="handlePrint">
      Print Sponsorship Table
    </VPButton>

    <div id="sponsorship-table">
      <table class="sponsorship-table">
        <thead>
          <tr>
            <th>贊助等級</th>
            <th>贊助金額</th>
            <th>贊助福利</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="sponsor in sponsors"
            :key="sponsor.level"
          >
            <td class="text-bold">
              {{ sponsor.level }}
            </td>
            <td class="text-bold">
              {{ sponsor.price.main }}
              <ul class="price-details">
                <li
                  v-for="detail in sponsor.price.details"
                  :key="detail"
                >
                  {{ detail }}
                </li>
              </ul>
            </td>
            <td>
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
                    <span v-html="marked(benefit)" />
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

<style scoped>
/* Table styling */
.sponsorship-table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #4a4947;
  border: 1px solid #000;
  color: #faf7f0;
  font-weight: bold;
  padding: 12px;
}

td {
  background-color: #faf7f0;
  color: #000;
  border: 1px solid #000;
  padding: 12px;
}

.text-bold {
  font-weight: bold;
}

.price-details {
  margin: 0;
  padding-left: 20px;
}

.benefit-category {
  background-color: #b17457;
  border: #000;
  margin: 10px 0 5px;
  color: #faf7f0;
  font-weight: bold;
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
</style>
