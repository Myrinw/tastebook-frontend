//import { FetchPosts } from '../../types';

export const postState = (state) => state.posts;

export const rightPost = (id) => (state) => state.posts.postArray.find(post => id === post.id);