import React from 'react';
import Section from '../../widgets/Section';
import styles from './listvideos.module.scss';
import { Card, CardContent, CardActionArea, Grid, Typography } from '@mui/material';
import { palette } from '../../muiTheme';

function VideosView({ videos = [], handleVideoClick = () => {} }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <Section label="videos">
        <div className={styles.blocContainer}>
          <Grid container spacing={4}>
            {videos.map((video, a) => (
              <Grid key={`${video.id}-${a}`} item xs={12} md={6}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardActionArea
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    onClick={() => handleVideoClick(video.id)}>
                    <div
                      style={{
                        backgroundColor: palette.primary.main,
                        height: 140,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}></div>
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {video.name}
                      </Typography>
                      <Typography variant="body2">
                        {video.description || 'No description'}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Section>
    </div>
  );
}

export default VideosView;
