export interface FetchPosts {
    posts: {
        loading: boolean;
        postArray: {
            id: number
            title: string;
            image?: string;
            text: string;

            user: {
                picture: string;
                username: string;
            };
            likes: {
                id: number
            }[]
        }[];
    }
}

export interface PostValues {
    user: string;
    title: string;
    picture?: string;
    text?: string;
}[]

export interface PostCard {

    user: { picture: string; username: string; };
    postImg?: string;
    title: string;
    text: string;
    likes?: { id: number }[];
}