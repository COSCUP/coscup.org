/**
 * Sponsorship data
 *
 * This is where you can define shared data specific to the current sponsorship.
 *
 * @example
 * <script setup lang="ts">
 * import { sponsorLevels, addons, sponsors, faqList } from '../data/sponsorship';
 * </script>
 */

import { ref } from 'vue'

export type I_SponsorLevels = string[]

export const sponsorLevels: I_SponsorLevels = [
  '鈦金級',
  '鑽石級',
  '黃金級',
  '白銀級',
  '青銅級',
  '好朋友級',
  '海外講者',
]

export interface I_Addon {
  category: string
  items: {
    details: string | string[]
    available: boolean
    eligibility: Record<string, string | false>
  }[]
}

export const addons = ref<I_Addon[]>([
  {
    category: '攤位',
    items: [
      {
        details: '',
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

export interface I_Sponsor {
  level: string
  price: {
    main: string
    details?: string[]
  }
  benefits: Record<string, string[]>
}

export const sponsors = ref<I_Sponsor[]>([
  {
    level: '鈦金級',
    price: {
      main: 'NT$ 238,000',
    },
    benefits: {
      '官網 及 OPass app': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '徵才版面牆獨家曝光',
        '演講廳垂吊布條曝光',
        '會前派對贊助',
        '會議桌前看板曝光',
        '大會點心桌旗曝光',
        '前夜派對飲料券 4 張',
      ],
      '社群網站': [
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
      '官網 及 OPass app': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '大會點心桌旗曝光',
        '前夜派對飲料券 2 張',
      ],
      '社群網站': [
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
      '官網 及 OPass app': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        '前夜派對飲料券 1 張',
      ],
      '社群網站': [
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
      '官網 及 OPass app': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站': [
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
      '官網 及 OPass app': [
        '公司簡介',
        '議程頁面廣告（按等級比重播出）',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站': [
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
      '官網 及 OPass app': [
        '公司簡介',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
      ],
      '社群網站': [
        '官方社群網站宣傳',
      ],
    },
  },
  {
    level: '海外講者 旅費贊助',
    price: {
      main: 'NTD 6,000 +',
      details: [
        '港中澳：NTD 15,000/位',
        '大洋洲、亞洲（除港中澳）：NTD 30,000/位',
        '非洲：NTD 45,000/位',
        '歐洲北美：NTD 60,000/位',
        '中南美洲：NTD 82,500/位',
      ],
    },
    benefits: {
      '官網 及 OPass app': [
        '公司簡介',
      ],
      '活動現場（與 COSCUP 聯名）': [
        '會場迎賓牆曝光',
        'Travel sponsor 胸針2枚 (Sponsor 1, Speaker 1)',
      ],
      '社群網站': [
        '官方社群網站宣傳',
      ],
      '截止收件日期': [
        '2024/6/14',
      ],
    },
  },
])
