export default class CallApi {
  constructor(userId) {
    this.userId = userId;
  }

  async getUser() {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.userId}/`
      );
      const data = await response.json();
      const user = data.data;
      return user;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserName() {
    const response = await fetch(`http://localhost:3000/user/${this.userId}`);
    const data = await response.json();
    const userName = data.data.userInfos.firstName;
    return userName;
  }

  async getUserPerformance() {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.userId}/performance`
      );
      const data = await response.json();
      const userPerformance = Object.values(data.data.kind);
      userPerformance.map(
        (kindOfData, index) => (data.data.data[index].kindOfData = kindOfData)
      );
      return data.data.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserActivity() {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.userId}/activity`
      );
      const data = await response.json();
      const userActivity = data.data.sessions;
      userActivity.map((session, index) => (session.name = index + 1));
      return userActivity;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserSessions() {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${this.userId}/average-sessions`
      );
      const data = await response.json();
      const userSessions = data.data.sessions;
      const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
      const sessionData = userSessions.map((item) => {
        return {
          weekDays: weekDays[item.day - 1],
          sessionLength: item.sessionLength,
        };
      });
      return sessionData;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserScore() {
    const response = await fetch(`http://localhost:3000/user/${this.userId}`);
    const data = await response.json();
    const userScore = data.data.score || data.data.todayScore;
    return { name: userScore, value: userScore * 100 };
  }

  async getUserNutrients() {
    const response = await fetch(`http://localhost:3000/user/${this.userId}`);
    const data = await response.json();
    const userCount = data.data.keyData;
    const userCalories = userCount.calorieCount;
    const userProteins = userCount.proteinCount;
    const userCarbs = userCount.carbohydrateCount;
    const userLipids = userCount.lipidCount;
    return [userCalories, userProteins, userCarbs, userLipids];
  }
}
