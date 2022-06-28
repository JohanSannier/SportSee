/* eslint-disable eqeqeq */
export default class CallApi {
  constructor(userId) {
    this.baseURL = "http://localhost:3000/user/";
    this.userId = userId;
  }

  async getUser() {
    try {
      if (this.userId == 12 || this.userId == 18) {
        const response = await fetch(`${this.baseURL}${this.userId}/`);
        const data = await response.json();
        const user = data.data;
        return user;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
      alert(
        "Le service est actuellement indisponible, veuillez nous excuser pour la gêne occasionnée. Merci de réessayer dans quelques minutes."
      );
    }
  }

  async getUserName() {
    try {
      if (this.userId == 12 || this.userId == 18) {
        const response = await fetch(`${this.baseURL}${this.userId}/`);
        const data = await response.json();
        const userName = data.data.userInfos.firstName;
        return userName;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async getUserPerformance() {
    try {
      if (this.userId == 12 || this.userId == 18) {
        const response = await fetch(
          `${this.baseURL}${this.userId}/performance`
        );
        const data = await response.json();
        const formatedData = this.formatUserPerformance(data);
        return formatedData;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  formatUserPerformance(data) {
    const translatedLabels = [
      "Cardio",
      "Énergie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    translatedLabels.map(
      (kindOfData, index) => (data.data.data[index].kindOfData = kindOfData)
    );
    return data.data.data;
  }

  async getUserActivity() {
    try {
      if (this.userId == 12 || this.userId == 18) {
        const response = await fetch(`${this.baseURL}${this.userId}/activity`);
        const data = await response.json();
        const formatedData = this.formatUserActivity(data);
        return formatedData;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  formatUserActivity(data) {
    const userActivity = data.data.sessions;
    userActivity.map((session, index) => (session.name = index + 1));
    return userActivity;
  }

  async getUserSessions() {
    try {
      if (this.userId == 12 || this.userId == 18) {
        const response = await fetch(
          `${this.baseURL}${this.userId}/average-sessions`
        );
        const data = await response.json();
        const formatedData = this.formatUserSessions(data);
        return formatedData;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  }

  formatUserSessions(data) {
    const userSessions = data.data.sessions;
    const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
    const sessionData = userSessions.map((item) => {
      return {
        weekDays: weekDays[item.day - 1],
        sessionLength: item.sessionLength,
      };
    });
    return sessionData;
  }

  async getUserScore() {
    if (this.userId == 12 || this.userId == 18) {
      const response = await fetch(`${this.baseURL}${this.userId}`);
      const data = await response.json();
      const formatedData = this.formatUserScore(data);
      return formatedData;
    } else {
      return null;
    }
  }

  formatUserScore(data) {
    const userScore = data.data.score || data.data.todayScore;
    return { name: userScore, value: userScore * 100 };
  }

  async getUserNutrients() {
    if (this.userId == 12 || this.userId == 18) {
      const response = await fetch(`${this.baseURL}${this.userId}`);
      const data = await response.json();
      const formatedData = this.formatUserNutrients(data);
      return formatedData;
    } else {
      return null;
    }
  }

  formatUserNutrients(data) {
    const userCount = data.data.keyData;
    const userCalories = {
      type: "Calories",
      amount: userCount.calorieCount,
      unit: "kCal",
    };
    const userProteins = {
      type: "Protéines",
      amount: userCount.proteinCount,
      unit: "g",
    };
    const userCarbs = {
      type: "Glucides",
      amount: userCount.carbohydrateCount,
      unit: "g",
    };
    const userLipids = {
      type: "Lipides",
      amount: userCount.lipidCount,
      unit: "g",
    };
    return [userCalories, userProteins, userCarbs, userLipids];
  }
}
