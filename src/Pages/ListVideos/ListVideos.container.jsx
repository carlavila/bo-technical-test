import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchAdminPayload } from '../../utils/api/api';
import VideosView from './ListVideos.view';

function ListVideos() {
  const history = useHistory();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { sports } = await fetchAdminPayload();

        if (sports) {
          setVideos(sports);
        } else {
          console.error('Videos not found');
        }
      } catch (error) {
        console.error('Failed to fetch videos details:', error);
      }
    };
    fetchDetails();
  }, []);

  const handleVideoClick = (videoId) => {
    const videoPath = `/video/${videoId}`;
    if (videoId) {
      history.push(videoPath);
    } else {
      history.push('/videos');
    }
  };

  return (
    <div>
      <VideosView videos={videos} handleVideoClick={handleVideoClick} />
    </div>
  );
}

export default ListVideos;
