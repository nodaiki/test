// src/components/BottomTab.tsx

import React from 'react';
import './bottomtab.css';

const Bottomtab: React.FC = () => {
  return (
    <div className="bottom-tab">
      <div className="tab-item">ホーム</div>
      <div className="tab-item">研究ゼミ</div>
      <div className="tab-item">バイト記入</div>
    </div>
  );
};
export default Bottomtab;
