interface AuthState {
    auth: { loggedIn: boolean; token: string }
}
export const isLoggedIn = (state: AuthState) => state.auth.loggedIn;