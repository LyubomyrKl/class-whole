const initialState : IAppState = {
    globalError: null,
    errors: [],
};

export const appSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setGlobalError: (state, action) => {
            state.globalError = action.payload;
        },
        showErrorNotification: (state, action: PayloadAction<IError>) => {
            state.errors.push(action.payload);
        },
        clearErrorNotifications: (state) => {
            state.errors = [];
        }
    }
});

export const { setGlobalError, showErrorNotification, clearErrorNotifications } = appSlice.actions;
export default appSlice.reducer;