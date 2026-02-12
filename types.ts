export type Language = 'en' | 'cn';

export interface Translation {
  nav: {
    raft: string;
    tianxing: string;
    afl: string;
    alipay: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    features: {
      pci: string;
      payouts: string;
      global: string;
    }
  };
  products: {
    title: string;
    subtitle: string;
    fees: string;
    settlement: string;
    channels: string;
    denominations: string;
    videoGuide: string;
    contactSales: string;
    rules: string;
  };
  cards: {
    raft: {
      name: string;
      type: string;
      desc: string;
    };
    tianxing: {
      name: string;
      type: string;
      desc: string;
    };
    afl: {
      name: string;
      type: string;
      desc: string;
    };
    alipay: {
      name: string;
      desc: string;
      tiers: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      }
    }
  }
}