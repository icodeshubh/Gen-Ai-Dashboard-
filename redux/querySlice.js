import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Simulated AI response
export const fetchQueryResults = createAsyncThunk(
  "query/fetchResults",
  async (query) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          query,
          data: [
            { name: "A", value: Math.random() * 100 },
            { name: "B", value: Math.random() * 100 },
            { name: "C", value: Math.random() * 100 },
          ],
        });
      }, 1500)
    );
  }
);

const querySlice = createSlice({
  name: "query",
  initialState: {
    query: "",
    history: [],
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueryResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQueryResults.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.history.unshift(action.payload.query);
      })
      .addCase(fetchQueryResults.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data.";
      });
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
