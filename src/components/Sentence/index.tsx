import React, { FC } from 'react';

import { highlight } from '@utils/tools';
import './index.scss';

interface SentenceProps {
  data: {
    en: string;
    cn: string;
    highlight: string;
  };
}

const Sentence: FC<SentenceProps> = ({ data }) => {
  return (
    <div className="sentence">
      <div
        className="en"
        dangerouslySetInnerHTML={{
          __html: highlight(data.en, data.highlight),
        }}
      />
      <div className="cn">{data.cn}</div>
    </div>
  );
};

export default Sentence;
