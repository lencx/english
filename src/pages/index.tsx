import React from 'react';
import { graphql } from 'gatsby';

import Sentence from '@comps/Sentence';
import Layout from '@layouts/base';

export default function IndexPage(props: any) {
  const data = props.data?.allSentenceJson;

  return (
    <Layout title="Posts">
      <h2>{data.name}</h2>
      {data.nodes?.map((item: any) => {
        return item?.list.map((i: any, idx: number) => {
          if (!i.en) return null;
          return <Sentence key={+idx} data={i} />;
        });
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    allSentenceJson {
      nodes {
        name
        list {
          en
          cn
          highlight
        }
      }
    }
  }
`;
