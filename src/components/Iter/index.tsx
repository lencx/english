import React, { FC, Fragment } from 'react';
import './index.scss';

interface IterProps {
  data: Array<React.ReactNode>;
}

const Iter: FC<IterProps> = ({ data }) => {
  return (
    <div className="iter">
      {data.map((item, idx) => {
        let child = item;
        if (idx < data.length - 1) {
          child = (
            <>
              {item}
              <> -&gt; </>
            </>
          );
        }
        return <Fragment key={+idx}>{child}</Fragment>;
      })}
    </div>
  );
};

export default Iter;
