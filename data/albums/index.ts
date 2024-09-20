import albumsReducer, { fetchAlbums, selectAlbums } from './store/albumsSlice';
import { Album } from './model/Album.interface';
export { albumsReducer as albumsSlice, fetchAlbums, selectAlbums };
export type {Album};
