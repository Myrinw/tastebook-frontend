export interface FetchPosts {
    posts: {
        id: number;
        loading: boolean;
        postSuccess: boolean;
        postArray: {
            id: number
            title: string;
            image?: string;
            text: string;
            createdAt: string;

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
    id: number;
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
    id: number;
}

export type PostsArray = {

    id: number
    title: string;
    image?: string;
    text: string;
    createdAt: string;

    user: {
        picture: string;
        username: string;
    };
    likes: {
        id: number
    }[]

}[] | undefined