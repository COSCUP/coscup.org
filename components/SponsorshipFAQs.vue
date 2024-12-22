<script setup>
import { ref } from 'vue'
import { marked } from 'marked'

const faqList = ref([
  {
    question: '除了目前的贊助方案，還可以贊助其他項目嗎？或是不需要某些項目換折扣',
    answer: 'COSCUP 歡迎洽談客製化贊助方案，請來信聯繫我們：sponsorship@coscup.org',
    isOpen: false,
  },
  {
    question: '我們公司想要在 COSCUP 擺攤位，要選擇哪個贊助級別呢？',
    answer: `<li>請選擇「黃金級」、「鑽石級」或「鈦金級」，接著再選擇攤位等級。</li>
    <li>實體攤位能夠和與會者互動，COSCUP 也會準備活動讓會眾前往各攤位參觀。贊助商可以透過問卷和送贈品等形式更加了解與會者，是招募人才、加深與會者印象的好管道。</li>
    <li>攤位是 <strong>加購的熱門選項</strong>，但因數量限制，<strong>黃金級以上（含）的贊助商</strong> 才擁有加購攤位的權利。</li>`,
    isOpen: false,
  },
  {
    question: 'Prime session 演講跟技術演講、Workshop、Session (30min) 演講的差別在於？',
    answer: `<table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: left;">
      <thead>
        <tr>
          <th>演講類型</th>
          <th>時間</th>
          <th>場地</th>
          <th>贊助商級別</th>
          <th>詳細說明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Prime Session</strong></td>
          <td>Day1，一場45分鐘</td>
          <td>RB 105<br>500人場地</td>
          <td>鑽石級以上（含）可加購</td>
          <td>非獨佔時段演講，僅限鑽石級以上贊助商加購。</td>
        </tr>
        <tr>
          <td><strong>技術演講</strong></td>
          <td>Day1，每場30分鐘</td>
          <td>RB 105<br>500人場地</td>
          <td>黃金級以上（含）可加購</td>
          <td>與其他議程同時進行，僅限黃金級以上贊助商加購。</td>
        </tr>
        <tr>
          <td><strong>Workshop</strong></td>
          <td>Day2，2小時</td>
          <td>研揚大樓<br>(TR Building)</td>
          <td>黃金級以上（含）可加購</td>
          <td>工作坊，僅限黃金級以上贊助商加購。</td>
        </tr>
        <tr>
          <td><strong>Session</strong></td>
          <td>Day2，每場30分鐘</td>
          <td>研揚大樓<br>(TR Building)</td>
          <td>黃金級以上（含）可加購</td>
          <td>每場30分鐘的演講，僅限黃金級以上贊助商加購。</td>
        </tr>
      </tbody>
    </table>
    <p><strong>注意:</strong> 所有演講時段數量有限，且有採購期限，請與贊助窗口確認是否還有時段，並盡早預訂以免向隅。除此之外，亦可關注議程徵稿資訊，鼓勵公司內的工程師投稿感興趣的社群議程。</p>`,
    isOpen: false,
  },
  {
    question: '贊助單位的 Logo 排序是怎麼訂的？攤位是怎麼選擇的？',
    answer: `<li>為了保障贊助商 Logo 位置及公平性，贊助商 Logo 的露出排名和攤位選擇皆是依照<strong>「贊助等級」和「贊助款項的入款順序」</strong>所決定。</li>
    <li>以有購買攤位的黃金級贊助商來說，最早入贊助款的贊助商的 logo 排序較優先，亦可優先選擇攤位位置。</li>`,
    isOpen: false,
  },
  {
    question: '贊助商可以索取參與會眾的個人資料嗎？',
    answer: 'COSCUP 大會 **無法提供** 與會者個人資料給贊助單位。<br>主辦單位同意贊助商在攤位進行行銷、提供紀念品、招募人才，以及在與會者同意的前提下收集會眾的個人資訊。',
    isOpen: false,
  },
  {
    question: '為什麼沒看到實體手冊和迎賓袋置入廣宣物？',
    answer: `<li>因應無紙化愛護地球，COSCUP 大會近幾年已使用 <strong>電子版手冊</strong>，會眾將透過網頁和 OPass app 閱讀議程資訊。</li>
    <li>除「好朋友級」贊助商，其他等級贊助商等級將贈送電子版廣告 （按贊助等級比重播出），廣告將在使用者閱讀議程資訊時隨機播放；如需增加廣告露出頻率，也歡迎加購網站議程頁面廣告。</li>`,
    isOpen: false,
  },
  {
    question: '如果疫情升溫，COSCUP 還會照常舉辦嗎？贊助金額會怎麼算？',
    answer: '如因應中央疫情指揮中心公告禁止集會活動，COSCUP 將改成線上影片直播進行，影片前後贊助商 logo 曝光。贊助費用為 60% 總贊助金（外稅）。',
    isOpen: false,
  },
  {
    question: '若有沒使用到的贊助福利，是否可以退款？',
    answer: '若當年度沒使用贊助福利（沒提供素材），將視為放棄，無法退款。',
    isOpen: false,
  },
  {
    question: '什麼是 OCF？',
    answer: 'OCF 為 Open Culture Foundation（[財團法人開放文化基金會](https://ocf.tw/)）的簡稱，是個協助社群獲得行政和財務服務的非營利組織。COSCUP 由「財團法人開放文化基金會（OCF）」協力開立 COSCUP 贊助收據、電子發票、簽訂贊助合約或其他法律文件。',
    isOpen: false,
  },
])

function renderMarkdown(text) {
  return marked(text)
}

function toggleAnswer(index) {
  faqList.value[index].isOpen = !faqList.value[index].isOpen
}
</script>

<template>
  <div class="faq-container">
    <div
      v-for="(item, index) in faqList"
      :key="index"
      class="faq-item"
    >
      <button
        class="faq-question"
        @click="toggleAnswer(index)"
      >
        {{ item.question }}
      </button>
      <div
        v-if="item.isOpen"
        class="faq-answer"
      >
        <span v-html="renderMarkdown(item.answer)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: auto;
}

.faq-item {
  margin-bottom: 16px;
}

.faq-question {
  background: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.faq-answer {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-top: 8px;
}
</style>
