import Post from "~/components/post";
import { posts } from "~/mock/posts";

export default function ForYou() {
    return (
        <>
            {posts.map(post => <Post post={post} key={post.id} />)}
        </>
    )
}