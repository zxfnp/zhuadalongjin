const config = {
  yourWechatId: "tszlj11",
  yourWechatName: "薇薇泰式抓龙筋",
};

const shops = [
  {
    id: 1,
    name: "天河员村",
    type: "个人工作室",
    area: "天河区",
    address: "东璟花园",
    photos: [],
    rating: "4.8",
    reviewCount: 71,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业8年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 2,
    name: "天河潭村",
    type: "个人工作室",
    area: "天河区",
    address: "珠光新城御景二期B区",
    photos: [],
    rating: "4.6",
    reviewCount: 79,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业9年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 3,
    name: "天河东圃",
    type: "个人工作室",
    area: "天河区",
    address: "兰亭盛荟3期东门",
    photos: [],
    rating: "4.5",
    reviewCount: 129,
    tags: [
      "专业抓龙筋",
      "萝莉"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业10年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 4,
    name: "天河车陂1店",
    type: "个人工作室",
    area: "天河区",
    address: "领汇国际公寓",
    photos: [],
    rating: "4.6",
    reviewCount: 126,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业11年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 5,
    name: "天河车陂2店",
    type: "个人工作室",
    area: "天河区",
    address: "车陂社区卫生服务中心",
    photos: [],
    rating: "4.8",
    reviewCount: 90,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业12年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 6,
    name: "天河梅花园",
    type: "个人工作室",
    area: "天河区",
    address: "信达天河金茂广场C座",
    photos: [],
    rating: "4.8",
    reviewCount: 153,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业13年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 7,
    name: "白云嘉禾1店",
    type: "个人工作室",
    area: "白云区",
    address: "千味小厨",
    photos: [],
    rating: "4.7",
    reviewCount: 99,
    tags: [
      "专业抓龙筋",
      "少妇"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业14年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 8,
    name: "白云嘉禾2店",
    type: "个人工作室",
    area: "白云区",
    address: "云都商城",
    photos: [],
    rating: "4.7",
    reviewCount: 62,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业15年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 9,
    name: "白云嘉禾3店",
    type: "个人工作室",
    area: "白云区",
    address: "黄厂长重庆火锅",
    photos: [],
    rating: "4.6",
    reviewCount: 76,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多",
      "御姐"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业16年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 10,
    name: "白云嘉禾4店",
    type: "个人工作室",
    area: "白云区",
    address: "嘉禾豪泉酒店",
    photos: [],
    rating: "4.6",
    reviewCount: 197,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业17年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: true,
    reviews: []
  },
  {
    id: 11,
    name: "白云钟落潭",
    type: "个人工作室",
    area: "白云区",
    address: "钟兴小区",
    photos: [],
    rating: "4.6",
    reviewCount: 103,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业18年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 12,
    name: "番禺南村万博",
    type: "个人工作室",
    area: "番禺区",
    address: "晟誉B座",
    photos: [],
    rating: "4.8",
    reviewCount: 57,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业19年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 13,
    name: "番禺市桥",
    type: "个人工作室",
    area: "番禺区",
    address: "信业悦都汇",
    photos: [],
    rating: "4.8",
    reviewCount: 116,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业20年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 14,
    name: "海珠东晓南",
    type: "个人工作室",
    area: "海珠区",
    address: "新城国际寓",
    photos: [],
    rating: "4.7",
    reviewCount: 66,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业21年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 15,
    name: "黄埔大沙地",
    type: "个人工作室",
    area: "黄埔区",
    address: "东城广场",
    photos: [],
    rating: "4.6",
    reviewCount: 71,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业22年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 16,
    name: "黄埔香雪",
    type: "个人工作室",
    area: "黄埔区",
    address: "锐丰中心",
    photos: [],
    rating: "4.7",
    reviewCount: 59,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多",
      "00后"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业23年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 17,
    name: "荔湾坑口",
    type: "个人工作室",
    area: "荔湾区",
    address: "东漖新村",
    photos: [],
    rating: "4.8",
    reviewCount: 118,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业24年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  },
  {
    id: 18,
    name: "花都融创",
    type: "个人工作室",
    area: "花都区",
    address: "斗记普洱茶花都旗舰店",
    photos: [],
    rating: "4.5",
    reviewCount: 175,
    tags: [
      "专业抓龙筋",
      "环境优雅",
      "手法正宗",
      "回头客多"
    ],
    services: [
      {
        name: "体验套餐",
        price: 398,
        duration: "70分钟"
      },
      {
        name: "尊享套餐",
        price: 598,
        duration: "120分钟"
      },
      {
        name: "至尊套餐",
        price: 1298,
        duration: "150分钟"
      }
    ],
    description: "从业25年专注正宗抓龙筋手法，位于天河核心商圈交通便利环境私密",
    businessHours: "10:00-24:00",
    featured: false,
    reviews: []
  }
];

export { config, shops };
