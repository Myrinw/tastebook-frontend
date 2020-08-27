interface AuthState {
    auth: { loggedIn: boolean; token: string }
}
interface UserId {
    auth: {
        me: {
            id: number;
        }
    }
}
export const isLoggedIn = (state: AuthState) => state.auth.loggedIn;
export const userId = (state: UserId) => state.auth.me.id
export const me = state => state.auth.me;