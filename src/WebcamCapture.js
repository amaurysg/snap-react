import React, {useState, useRef, useCallback} from 'react'
import Webcam from 'react-webcam'
import { Button } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
};

const WebcamCapture = () => {
  //Select element
  const webcamRef = useRef(null)
  //Created const img
  const dispatch = useDispatch()
  const history = useHistory()

  const [image, setImage] = useState(null)

  //Function button
  const capture = useCallback(() => {
      //So, I created const of state
      //Next this const image is assign in src of <img> (Method getScreenshot is of the dependency)
     const imageSrc = webcamRef.current.getScreenshot()
     /* console.log(imageSrc) //code base64 of img */
     /* setImage(imageSrc) */
     dispatch(setCameraImage(imageSrc))
    history.push('/preview')

    },
    [webcamRef],
  )

  const goChat = () =>{
    history.push('/chats')
  }


  return (
    <div className="webcamCapture">
      <Webcam 
        ref={webcamRef}
        audio={false}
        height={videoConstraints.height}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <ChatBubbleIcon
       className="webcamCapture__chatIcon"
        onClick={goChat}
     
      ></ChatBubbleIcon>
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
      <img src={image} alt=""/>
      
    </div>
  )
}

export default WebcamCapture
