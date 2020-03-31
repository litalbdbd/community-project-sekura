import cloneDeep from 'lodash/cloneDeep';

const {posts: initialPosts, users: initialUsers} = require('../data');
let posts;
let users

function initData() {
	posts = cloneDeep(initialPosts);
	users = cloneDeep(initialUsers);
}

initData();
const LATENCY = 1000;

function addLikedPostToUser(userId, postId) {
	const user = users[userId];
	if (!user) {
		return;
	}
	const likedPost = user.liked_posts.find(p => p === postId);
	if (likedPost) { //post is already in the liked list
		return;
	}
	user.liked_posts.push(postId);
}

function removeLikedPostFromUser(userId, postId) {
	const user = users[userId];
	if (!user) {
		return;
	}
	const likedPostIndex = user.liked_posts.findIndex(p => p === postId);
	if (likedPostIndex === -1) { //post is not in the liked list
		return;
	}
	user.liked_posts.splice(likedPostIndex, 1);
}

const updatePostLikes = resolve => (postId, userId, action) => {
	const post = posts[postId];

	if (!post) {
		resolve({error: 'no post found for this id'});
		return;
	}

	switch (action) {
		case 'like':
			post.likes = post.likes + 1;
			addLikedPostToUser(userId, postId);
			break;

		case 'unlike':
			post.likes = post.likes - 1;
			removeLikedPostFromUser(userId, postId)
			break;

		default:
			break;
	}

	resolve({posts: cloneDeep(posts), users: cloneDeep(users)})
}

const getPosts = resolve => () => {
	resolve(Object.values(cloneDeep(posts)));
}

const getUsers = resolve => () => {
	resolve(Object.values(cloneDeep(users)));
}

//TODO:
const getUserFavoritePosts = resolve => () => {
	//should return an array of posts items the user liked.
}

const methodFactory = func => (...args) => {
	return new Promise(resolve => {
		setTimeout(() => {
			func(resolve)(...args);
		}, LATENCY)
	})
}

const resetData = () => {
	console.log('resetData')
	initData();
}

const API = {
	updatePostLikes: methodFactory(updatePostLikes),
	getPosts: methodFactory(getPosts),
	getUsers: methodFactory(getUsers),
	resetData
};

module.exports = {
	API
};
