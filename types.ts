import { ReactNode } from 'react';

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
    title: string | ReactNode;
    titleHighlight: string | ReactNode;
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
    subtitle: string | ReactNode;
    description: string;
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
