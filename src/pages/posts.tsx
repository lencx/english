import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '@layouts/base';

export default function PostsPage(props: any) {
  const data = props.data?.allMdx?.nodes;

  return (
    <Layout title="Posts">
      {data.map((post: any) => {
        return (
          <div key={post.id}>
            <h2>{post.headings?.[0]?.value}</h2>
            <div>{post.excerpt}</div>
          </div>
        );
        // return <MDXRenderer key={post.id}>{post.body}</MDXRenderer>;
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        # body
        excerpt
        headings(depth: h1) {
          value
        }
      }
    }
  }
`;
