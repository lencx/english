import path from 'path';

exports.createPages = async ({ graphql, actions }: any) => {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `);

  data?.allMdx?.nodes?.forEach((post: any) => {
    actions.createPage({
      path: `post/${post.slug}`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: { slug: post.slug }
    });
  })
}