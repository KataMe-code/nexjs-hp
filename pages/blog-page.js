// Next.js はデフォルトでReactをinportしているのでinport宣言が不要
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsdata } from "../lib/posts";

export default function Blog({ posts }){
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts &&
                    posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    );
};

// 必ずServer Sideで実行される
// npm run de > 陸枝うsと毎に実行される
// npm start > ビルド時に実行される
export async function getStaticProps() {
    const posts = await getAllPostsdata();
    return {
        props: { posts },
    };
}
