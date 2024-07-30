import React from "react";
import axios from "axios";
import { GoHeartFill } from "react-icons/go";
import { FI_API } from "../utils/constants";

import './LikeDislike.css';

const LikeFileButton = (props) => {

    const handleLike = (e) => { 
        axios
            .put(`${FI_API}/likeFile/${props.userId}/${props.fileId}`)
            .then((res) => {
                props.socket.emit("likeAndDislikeFile", res.data.totalLikes);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <GoHeartFill className="like" color={props.colour} size="25" onClick={handleLike} />
        </>
    );
}

export default LikeFileButton;