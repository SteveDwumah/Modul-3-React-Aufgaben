interface NewsCardProps {
  author: string;
  title: string;
  content: string;
  description: string;
}

function NewsCard(props: NewsCardProps) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default NewsCard;
