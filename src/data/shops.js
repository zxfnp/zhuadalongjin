const config = {
  // 你的微信ID，客户预约后会复制话术发给你
  yourWechatId: "tszlj11",
  // 你的微信号，用于一键复制
  yourWechatName: "薇薇泰式抓龙筋",
};

const shops = [
  {
    id: 1,
    name: "天河员村抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 53,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "60分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "60分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "90分钟"
      }
    ],
    description: "从业8年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:00",
    featured: true,
    reviews: []
  },
  {
    id: 2,
    name: "天河潭村抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 159,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "61分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "61分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "91分钟"
      }
    ],
    description: "从业9年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:01",
    featured: true,
    reviews: []
  },
  {
    id: 3,
    name: "天河东圃抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 87,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "62分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "62分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "92分钟"
      }
    ],
    description: "从业10年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:02",
    featured: true,
    reviews: []
  },
  {
    id: 4,
    name: "天河车陂抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.6",
    reviewCount: 88,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "63分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "63分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "93分钟"
      }
    ],
    description: "从业11年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:03",
    featured: true,
    reviews: []
  },
  {
    id: 5,
    name: "天河梅花园抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 54,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "64分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "64分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "94分钟"
      }
    ],
    description: "从业12年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:04",
    featured: true,
    reviews: []
  },
  {
    id: 6,
    name: "白云嘉禾抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.5",
    reviewCount: 118,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "65分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "65分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "95分钟"
      }
    ],
    description: "从业13年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:05",
    featured: true,
    reviews: []
  },
  {
    id: 7,
    name: "白云钟落潭抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.7",
    reviewCount: 119,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "66分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "66分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "96分钟"
      }
    ],
    description: "从业14年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:06",
    featured: false,
    reviews: []
  },
  {
    id: 8,
    name: "番禺南村万博抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 149,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "67分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "67分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "97分钟"
      }
    ],
    description: "从业15年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:07",
    featured: false,
    reviews: []
  },
  {
    id: 9,
    name: "番禺市桥抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 151,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "68分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "68分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "98分钟"
      }
    ],
    description: "从业16年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:08",
    featured: false,
    reviews: []
  },
  {
    id: 10,
    name: "海珠东晓南抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.7",
    reviewCount: 101,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "69分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "69分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "99分钟"
      }
    ],
    description: "从业17年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:09",
    featured: false,
    reviews: []
  },
  {
    id: 11,
    name: "黄埔大沙地抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 140,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "70分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "70分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "100分钟"
      }
    ],
    description: "从业18年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:10",
    featured: false,
    reviews: []
  },
  {
    id: 12,
    name: "黄埔香雪抓龙筋",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.8",
    reviewCount: 98,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "正宗泰式抓龙筋",
        price: 328,
        duration: "71分钟"
      },
      {
        name: "精油SPA推拿",
        price: 298,
        duration: "71分钟"
      },
      {
        name: "深层经络疏通",
        price: 398,
        duration: "101分钟"
      }
    ],
    description: "从业19年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-22:11",
    featured: false,
    reviews: []
  }
];

export { config, shops };
