import Link from "next/link";
const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItems) => (
        <li key={newsItems.id}>
          <Link href={`/news/${newsItems.slug}`}>
            <img
              src={`/images/news/${newsItems.image}`}
              alt={newsItems.title}
            />
            <span>{newsItems.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NewsList;
