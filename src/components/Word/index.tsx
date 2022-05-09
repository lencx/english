import React, { FC } from 'react';

import { highlight } from '@utils/tools';
import './index.scss';

interface WordProps {
  en: string;
  cn: string;
  highlight: string;
}

const Word: FC<WordProps> = (props) => {
  return (
    <span className="word">
      <span
        className="en"
        dangerouslySetInnerHTML={{
          __html: highlight(props.en, props.highlight),
        }}
      />
      {props.cn && <span className="cn">({props.cn})</span>}
    </span>
  );
};

export default Word;
