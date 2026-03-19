import React from 'react';
import { Translation } from './types';
import { CreditCard, Zap, Globe, ShieldCheck } from 'lucide-react';
import gdcImg from './assets/gdc.png';
import tianxingImg from './assets/tianxing.jpeg';
import tianxingVideo from './assets/tianxing.mp4';
import ark2Img from './assets/ark2.png';
import alipayImg from './assets/alipay.jpg';

export const CONTENT: Record<string, Translation> = {
  en: {
    nav: {
      gdc: "GDC Card",
      ark2: "ARK2 Card",
      alipay: "Alipay",
    },
    hero: {
      badge: "NEW: CRYPTO SETTLEMENTS LIVE 🚀",
      title: "Scale Your Revenue",
      titleHighlight: "with COCOPAY",
      subtitle: "The only payment gateway that combines traditional currency processing with high-speed settlements. Seamless integration, massive reach, and zero friction.",
      ctaPrimary: "GET STARTED NOW",
      features: {
        pci: "PCI DSS LEVEL 1",
        payouts: "INSTANT PAYOUTS",
        global: "190+ COUNTRIES",
      }
    },
    products: {
      title: "Fees & Settlement",
      subtitle: "Maximum transparency. Minimal overhead. Grow with COCOPAY.",
      description: "",
      fees: "Fees",
      settlement: "Settlement",
      channels: "Channels",
      denominations: "Denominations",
      videoGuide: "Purchase Guide",
      contactSales: "CONTACT SALES",
      rules: "Settlement Rules",
    },
    cards: {
      gdc: {
        name: "GDC Card",
        type: "Premium Recharge Card",
        image: gdcImg,
      },
       ark2: {
        name: "ARK2 Card",
        type: "Standard Rate Card",
        image: ark2Img,
      },
      alipay: {
        name: "Alipay Collections",
        image: alipayImg,
        tiers: {
          small: "Small Amount UID",
          medium: "Medium Amount UID",
          large: "Large Amount UID",
          xlarge: "Super Large Amount UID",
        }
      }
    }
  },
  cn: {
    nav: {
      gdc: "GDC 卡",
      ark2: "ARK2 卡",
      alipay: "支付宝",
    },
    hero: {
      badge: "最新：加密货币结算已上线 🚀",
      title: "一站式全球支付解决方案 · 国际企业首选平台",
      titleHighlight: <><br className="block md:hidden" />COCOPAY</>,
      subtitle: "以专业构建的智能支付系统，打通本地与全球资金通道，助力企业无缝接收全球线上支付，轻松拓展国际市场版图，加速业务增长与资本流转。",
      ctaPrimary: "立即开始",
      features: {
        pci: "PCI DSS 1级认证",
        payouts: "实时结算",
        global: "覆盖190+国家",
      }
    },
    products: {
      title: "费率与结算",
      subtitle: <>与 COCOPAY 共同成长 · <br className="block sm:hidden" />极致透明 · 成本优化</>,
      description: "我们提供清晰透明的费率结构与高效结算机制，帮助企业有效降低交易成本，优化现金流管理。在保障安全与稳定的同时，让每一笔交易都更具价值，与您共同迈向长期增长",
      fees: "费用",
      settlement: "结算时间",
      channels: "购买渠道",
      denominations: "面值对应",
      videoGuide: "购买教程",
      contactSales: "联系销售",
      rules: "结算规则",
    },
    cards: {
      gdc: {
        name: "GDC 卡",
        type: "GDC 溢价卡",
      },
      ark2: {
        name: "ARK2 卡",
        type: "ARK2(平价卡)",
      },
      alipay: {
        name: "支付宝 (Alipay)",
        tiers: {
          small: "支付宝小额 UID",
          medium: "支付宝中额 UID",
          large: "大额 UID",
          xlarge: "超大额 UID",
        }
      }
    }
  }
};

// Raw data for tables that doesn't change structure but might change label based on language
export const PRODUCT_DETAILS = {
  gdc: {
    fees_cn: "询问",
    fees_en: "REQUEST",
    settlement_cn: "D0 (回U欧易支付宝三档上0.12)",
    settlement_en: "D0 (USDT/OKX Tier 3 + 0.12)",
    settlement_method_cn: "USDT (TRC-20)；国际remittance 可谈",
    settlement_method_en: "USDT (TRC-20); Intl Remittance Negotiable",
    channels_cn: "淘宝, 天猫, 京东 (搜 GDC Card / GDC 卡)",
    channels_en: "Taobao, Tmall, JD (Search GDC Card)",
    denominations: [
      "EUR 7 = CNY 50",
      "EUR 14 = CNY 100",
      "EUR 28 = CNY 200",
      "EUR 42 = CNY 300",
      "EUR 70 = CNY 500",
      "EUR 140 = CNY 1,000"
    ]
  },
  ark2: {
    fees_cn: "询问",
    fees_en: "REQUEST",
    settlement_cn: "D0 (回U欧易支付宝三档上0.12)",
    settlement_en: "D0 (USDT/OKX Tier 3 + 0.12)",
    settlement_method_cn: "USDT (TRC-20)；国际remittance 可谈",
    settlement_method_en: "USDT (TRC-20); Intl Remittance Negotiable",
    channels_cn: "淘宝, 天猫, 京东 (搜 ARK2 卡)",
    channels_en: "Taobao, Tmall, JD (Search ARK2 Card)",
    denominations: [
      "EUR 1.5 = CNY 10",
      "EUR 3 = CNY 20",
      "EUR 4.5 = CNY 30",
      "EUR 7 = CNY 50",
      "EUR 14 = CNY 100",
      "EUR 28 = CNY 200",
      "EUR 42 = CNY 300",
      "EUR 70 = CNY 500",
      "EUR 140 = CNY 1,000"
    ]
  },
  alipay: {
    tiers: [
      {
        key: 'small',
        code: '8035',
        amount: '200-1000',
      },
      {
        key: 'medium',
        code: '8034',
        amount: '500-3000',
      },
      {
        key: 'large',
        code: '8029',
        amount: '800-5000',
      },
      {
        key: 'xlarge',
        code: '8022',
        amount: '2000-20000',
      },
    ],
    rules_cn: [
      "支付宝代收：询问",
      "结算USDT 汇率参考okx c2c 盘口模式第三档 上浮最高0.12",
      "支付宝代收交易时间：9:00-24:00 每日23:00-24:00为日切时间",
      "结算USDT，最低结算要求7000U起",
      "结算 D0",
      "实时结算客户，日切时间结清当日全部款项"
    ],
    rules_en: [
      "Alipay Collection Fee: REQUEST",
      "USDT Settlement Rate: OKX C2C Market Tier 3 + max 0.12",
      "Transaction Hours: 09:00 - 24:00 (Daily cut-off 23:00-24:00)",
      "Min Settlement: 7000 USDT",
      "Settlement Time: D0",
      "Real-time settlement customers: All funds cleared at daily cut-off"
    ]
  }
};
