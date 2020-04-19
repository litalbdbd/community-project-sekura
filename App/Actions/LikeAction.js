


const LikeAction = (userID, postID) => {
    return {
        type: 'LIKE',
        payload: {
            userID: userID,
            postID: postID
        }
    };
};

const UnlikeAction = (userID, postID) => {
    return {
        type: 'UNLIKE',
        payload: {
            userID: userID,
            postID: postID
        }
    };
};