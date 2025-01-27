/**
 * Sponsorship data
 *
 * This is where you can define shared data specific to the current sponsorship.
 *
 * @example
 * <script setup lang="ts">
 * import { sponsorLevels, addons, sponsors, faqList } from '../data/sponsorship';
 *
 * const start = sponsorship.startDate.toLocaleDateString()
 * const end = sponsorship.endDate.toLocaleDateString()
 * </script>
 *
 * Sponsorship date: {{ start }} ~ {{ end }}
 */

import { ref } from 'vue'

export const sponsorLevels = [
  '鈦金級',
  '鑽石級',
  '黃金級',
  '白銀級',
  '青銅級',
  '好朋友級',
  '海外講者',
]

export const addons = ref([
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

export const sponsors = ref([
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

export const faqList = ref([
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
