const MealsSlug = ({ params }) => {
  return (
    <main>
      <h1>Meals Slug</h1>
      <p>{params.slug}</p>
    </main>
  );
};
export default MealsSlug;
