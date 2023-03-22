export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAccessToken = state => state.auth.isRefreshing;
export const selectSid = state => state.auth.sid;
export const selectBalance = state => state.auth.user.balance;
