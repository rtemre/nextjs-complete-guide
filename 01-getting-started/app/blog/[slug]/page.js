const BlogSlugPage = ({ params }) => {
  return (
    <main>
      <h1>Blog Slug Page</h1>
      <p>{params.slug}</p>
    </main>
  );
};
export default BlogSlugPage;
