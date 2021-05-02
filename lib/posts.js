import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsdata() {
    const res = await fetch(new URL(apiUrl));
    return await res.json();
}

export async function getAllPostIds(){
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();

    return posts.map((post) =>{
        return {
            params: {
                id : String(post.id),
            }
        }
    })
}

export async function getPostData(id){
    const res = await fetch(new URL(`${apiUrl}/${id}`));
    return await res.json();
}
