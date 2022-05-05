import React from 'react';
import { graphql } from 'gatsby';

import Sentence from '@comps/Sentence';

export default function IndexPage(props: any) {
  const data = props.data?.sentenceJson;
  return (
    <div>
      <h2>{data.name}</h2>
      {data?.list.map((i: any, idx: number) => {
        return <Sentence key={+idx} data={i} />;
      })}
    </div>
  );
}

export const query = graphql`
  {
    sentenceJson {
      name
      list {
        en
        cn
        highlight
      }
    }
  }
`;
