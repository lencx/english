import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@layouts/base';

export default function PostsPage(props: any) {
  const data = props.data?.mdx;

  return (
    <Layout title={data.headings?.[0]?.value}>
      <MDXRenderer>{data.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      headings(depth: h1) {
        value
      }
    }
  }
`;
