function problem7(user, friends, visitors) {
	//추천 친구 목록을 반환할 함수 -> solution
	/* 친구가 아닌 유저의 목록을 구할 함수 -> getNotFriends 
		1. 전체 사용자 아이디 목록을 구할 함수 -> getUserList
		2. 유저 리스트에 없는 사용자를 등록해주는 함수 -> register
		3. 사용자의 현재 친구 목록을 구하는 함수 -> friendNow
		4. 함께 아는 친구(현재 친구가 아닌)를 구할 함수 -> friendWith
		5. 사용자 점수 목록을 만들어 반환할 함수 -> pointForm
	*/

	/*사용자의 점수를 구할 함수 -> getUserPoint
		1. 함께 아는 친구의 수를 구할 함수 -> countFriend
		2. 타임라인 방문 횟수를 구할 함수 -> countVisit
	 */

	return solution({ me: user, users: friends, visitors });
}

function solution(inputData) {
	const userPoints = getNotFriends(inputData);

	getUserPoint(inputData, userPoints);
}

function getNotFriends(inputData) {
	const userList = getUserList(inputData);
	const friends = friendNow(inputData);
	const notFriends = friendWith(userList, friends, inputData);
	return pointForm(notFriends);
}

function getUserList(inputData) {
	const { me, users, visitors } = inputData;
	let userList = [me];

	userList = register(userList, users.flat());
	userList = register(userList, visitors);

	return userList;
}

function register(userList, list) {
	list.forEach((id) => {
		if (!userList.includes(id)) userList.push(id);
	});

	return userList;
}

function friendNow({ me, users }) {
	let friends = [];

	users.forEach((user) => {
		if (user.includes(me)) friends.push(...user);
	});

	friends = friends.filter((friend) => friend !== me);

	return friends;
}

function friendWith(userList, friends, { me }) {
	return userList.filter((user) => !friends.includes(user) && user !== me);
}

function pointForm(userList) {
	let pointList = {};

	userList.forEach((user) => (pointList[user] = 0));

	return pointList;
}

function getUserPoint() {}

function countFriend() {}

function countVisit() {}

module.exports = problem7;
