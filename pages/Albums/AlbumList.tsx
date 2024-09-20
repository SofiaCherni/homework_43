import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchAlbums } from '../../data/index';
import './AlbumList.css';
import { useAppDispatch, useAppSelector } from '../../app/store/store';


function AlbumList() {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(state => state.albums.albums);
  const albumStatus = useAppSelector(state => state.albums.status);
  const error = useAppSelector(state => state.albums.error);

  useEffect(() => {
    if (albumStatus === 'idle') {
      dispatch(fetchAlbums());
    }
  }, [albumStatus, dispatch]);

  return (
    <ul className="album-menu">
      {albumStatus === 'loading' && <div>Loading...</div>}
      {albumStatus === 'succeeded' && albums.map(album => (
        <li className="box" key={album.id}>
          <div>UserId: {album.userId}</div>
          <div>Id: {album.id}</div>
          <div>Title: <Link to={`/albums/${album.id}/photos`}>{album.title}</Link></div>
        </li>
      ))}
      {albumStatus === 'failed' && <div>{error}</div>}
    </ul>
  );
}

export default AlbumList;
