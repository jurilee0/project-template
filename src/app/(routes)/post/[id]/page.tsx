interface PostParams {
  params: {
    id: string;
  };
}

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
}

// 나중에 실제 데이터로 대체
const getPost = (id: string): Post => {
  return {
    id: parseInt(id),
    title: `포스트 ${id}`,
    content: `포스트 ${id}의 상세 내용입니다.`,
    date: "2024-03-21"
  };
};

export default function PostDetail({ params }: PostParams) {
  const post = getPost(params.id);

  return (
    <article>
        <h1> {post.title}</h1>
        <div>{post.date}</div>
      <div>{post.content}</div>
    </article>
  );
}