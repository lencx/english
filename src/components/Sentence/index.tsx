import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react/dist/offline';
// import translateIcon from '@iconify-icons/mdi/google-translate';
import arrowIcon from '@iconify-icons/mdi/navigation';

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
  const [isActive, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!isActive);
  };

  return (
    <div className={clsx('sentence', { active: isActive })}>
      <Icon className="arrow-ico" icon={arrowIcon} onClick={handleToogle} />
      <div>
        <div
          className="en"
          dangerouslySetInnerHTML={{
            __html: highlight(data.en, data.highlight),
          }}
        />
        <div className="cn">{data.cn}</div>
      </div>
    </div>
  );
};

export default Sentence;
