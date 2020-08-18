export type FetchPosts = {
    posts: {
        loading: boolean;
        postArray: {
            user: string;
            title: string;
            picture?: string;
            text: string;

        }[];
    }
}

export interface PostValues {
    user: string;
    title: string;
    picture?: string;
    text?: string;
}[]