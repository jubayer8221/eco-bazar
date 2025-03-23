import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  results: { id: number; name: string; category: string }[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: SearchState = {
  query: "",
  results: [],
  status: "idle",
};

// Async function to fetch search results
export const fetchSearchResults = createAsyncThunk(
  "search/fetchResults",
  async (query: string) => {
    const res = await fetch(`https://ecobazar-backend-alpha.vercel.app/search?q=${query}`);
    const data = await res.json();
    return data.results;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action: PayloadAction<SearchState["results"]>) => {
        state.status = "succeeded";
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
