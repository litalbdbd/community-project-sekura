



const LikeAction = (userID, postID) => {
    return {
        type: 'LIKE',
        payload: {
            userID: userID,
            postID: postID
        }
    }

}