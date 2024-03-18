import { FarzaaContext } from '@/context/FarzaaContext'
import React, { useContext } from 'react'
import { Modal, ModalHeader } from 'react-bootstrap'

const VideoModal = () => {
    const {
        showVideo,
        handleVideoClose,
    } = useContext(FarzaaContext)
  return (
    <Modal show={showVideo} onHide={handleVideoClose} size='lg' centered className="modal-video" id="LKQIY6EGFR9TU">
        <Modal.Header className='vidoe-modal-header' closeButton></Modal.Header>
        <Modal.Body className="modal-video-body">
            <div className="modal-video-inner" id="modal-video-inner-LKQIY6EGFR9TU" >
            <div className="modal-video-movie-wrap">
                <iframe 
                className='video-modal-iframe'
                src="https://www.youtube.com/embed/83-FcYZD8AE" 
                frameBorder="0" 
                tabIndex="-1" 
                allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default VideoModal