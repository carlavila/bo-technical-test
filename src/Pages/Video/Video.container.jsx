import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoView from './Video.view';
import { fetchAdminPayload } from '../../utils/api/api';

function VideoContainer() {
  const { id } = useParams();
  const [details, setDetails] = useState({ title: '', description: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const videoFormDefaults = { title: details.title, description: details.description };

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const { sports } = await fetchAdminPayload();
        if (sports.length > 0) {
          const videoDetails = sports.find((video) => video.id === id);
          if (videoDetails) {
            const { name, description } = videoDetails;
            setDetails({ title: name, description });
          } else {
            console.error('Video not found');
          }
        } else {
          console.error('sport NOT found');
        }
      } catch (error) {
        console.error('Failed to fetch video details:', error);
      }
    };

    fetchVideoDetails();
  }, [id]);

  const handleSubmit = (value) => {
    setIsOpen(true);
    setDetails(value);
  };

  return (
    <div>
      <VideoView
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setDetail={setDetails}
        videoFormDefaults={videoFormDefaults}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        title={details.title ?? ''}
        description={details.description ?? ''}
      />
    </div>
  );
}

export default VideoContainer;
