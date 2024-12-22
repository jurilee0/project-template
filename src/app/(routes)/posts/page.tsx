import { Post } from '@/app/types/post';
import Link from 'next/link';

const getPosts = (): Post[] => {
  return [
    { id: 1, title: '첫 번째 포스트', content: '내용 1', excerpt: '요약 1', date: '2024-03-21' },
    { id: 2, title: '두 번째 포스트', content: '내용 2', excerpt: '요약 2', date: '2024-03-21' },
  ];
};

export default function Posts() {
  const posts = getPosts();

  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span>{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 