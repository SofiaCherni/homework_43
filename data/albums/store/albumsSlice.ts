import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Album } from '../index';

interface AlbumsState {
  albums: Album[];
  loading: boolean;
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AlbumsState = {
  albums: [],
  loading: false,
  error: null,
  status: 'idle',
};

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  return (await response.json()) as Album[];
});

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(fetchAlbums.pending, (state) => {
              state.loading = true;
              state.status = 'loading';
          })
          .addCase(fetchAlbums.fulfilled, (state, action) => {
              state.loading = false;
              state.albums = action.payload;
              state.status = 'succeeded';
          })
          .addCase(fetchAlbums.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message || 'Something went wrong';
              state.status = 'failed';
          });
  },
});

export const selectAlbums = (state: { albums: AlbumsState }) => state.albums.albums;

export default albumsSlice.reducer;
