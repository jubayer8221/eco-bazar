import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "@/utils/api";
import CartItem from "@/types/types";

// Async thunk to fetch data from FastAPI
export const loadData = createAsyncThunk<CartItem, void, { rejectValue: string }>(
    "data/loadData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchData("https://ecobazar-backend-alpha.vercel.app/");
            return response as CartItem;
        } catch (error) {
            console.error(error);
            return rejectWithValue("Failed to load data");
        }
    }
);

interface DataState {
    data: CartItem | null;
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    data: null,
    loading: false,
    error: null,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadData.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loadData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load data";
            });
    },
});

export default dataSlice.reducer;
