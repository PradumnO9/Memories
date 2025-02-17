import React from "react";
import axios from "axios";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { FI_API } from "../utils/constants";

import './LikeDislike.css';

const DislikeImageButton = (props) => {
    const handleDislike = (e) => {
        axios
            .put(`${FI_API}/dislikeImage/${props.userId}/${props.imageId}`)
            .then((res) => { 
                props.socket.emit('likeAndDislike', res.data.removeId); })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <BsFillHeartbreakFill className="dislike" color={props.colour} size="22" onClick={handleDislike} />
        </>
    );
}

export default DislikeImageButton;