const fetchVideos = response => ({
    type: 'FETCH_VIDEOS',
    response
  })

const addVideo = response => ({
  type: 'ADD_VIDEO',
  response
})

export const videosActions = {
  fetchVideos,
  addVideo
};
