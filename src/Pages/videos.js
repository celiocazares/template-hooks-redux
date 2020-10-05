import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from "react-redux";
import { videosActions } from "../actions/videosActions"

const Videos = ({ videosList }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(videosActions.fetchVideos())
    });

    return (
        <>
            <h1>Videos</h1>
            <ul>

            </ul>
        </>
    )
}


const mapStateToProps = state => {
    debugger
    return {
        videosList: state.videos.videosList
    }
}

export default connect(mapStateToProps)(Videos)
