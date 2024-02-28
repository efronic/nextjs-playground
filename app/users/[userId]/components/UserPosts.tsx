import { Post } from '@/types';

type props = {
  promise: Promise<Post[] | undefined>;
};

export default async function UserPosts({ promise }: props) {
  const posts = await promise;

  const content = posts?.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </article>
    );
  });
  return content;
}
