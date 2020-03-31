const posts = {
	1: {
		id: '1',
		title: 'First Item',
		subTitle: 'blabla',
		text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
		I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
		likes: 0,
		imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
	},
	2: {
		id: '2',
		title: 'Second Item',
		subTitle: 'blabla',
		text: `There are enough articles on this site to fill two books, so it can sometimes be daunting to know where to start. Below are what many consider to be my “greatest hits,” the articles that have been the most popular, the most shared, or had the greatest effect on readers’ lives.
		I’ve listed the best four articles in five different categories below: Understanding Yourself, Emotional Intelligence, Life Purpose, Relationships, and Self-Discipline.`,
		likes: 0,
		imageUrl: 'https://dianasuemi.com/wp-content/uploads/2017/08/QwupPdD.png'
	}
}

const users = {
	1: {
		id: '1',
		name: 'name',
		last_name: 'last name',
		liked_posts: []
	},
	2: {
		id: '2',
		name: 'name2',
		last_name: 'last name 2',
		liked_posts: []
	}
}

module.exports = {
	posts,
	users
}