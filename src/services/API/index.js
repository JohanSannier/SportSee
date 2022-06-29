/* eslint-disable eqeqeq */
export default class CallApi {
  constructor(userId) {
    this.baseURL = "http://localhost:3000/user/";
    this.userId = userId;
  }

  /**
   *
   * @returns {object} the user data
   */
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

  /**
   *
   * @returns {string} of the username
   */
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

  /**
   *
   * @returns {array} as the final data of the user performance
   */
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

  /**
   *
   * @param {array} data raw data of the user performance
   * @returns {array} as the formated data for the user performance
   */
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

  /**
   *
   * @returns {array} as the final data of the user activity
   */
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

  /**
   *
   * @param {array} data raw data of the user activity
   * @returns {array} as the formated data of the user activity
   */
  formatUserActivity(data) {
    const userActivity = data.data.sessions;
    userActivity.map((session, index) => (session.name = index + 1));
    return userActivity;
  }

  /**
   *
   * @returns {array} as the final data of the user sessions
   */
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

  /**
   *
   * @param {array} data raw data of the user sessions
   * @returns {array} as the formated data of the user sessions
   */
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

  /**
   *
   * @returns {object} as the final data of the user score
   */
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

  /**
   *
   * @param {object} data raw data of the user score
   * @returns {object} as the formated data of the user score
   */
  formatUserScore(data) {
    const userScore = data.data.score || data.data.todayScore;
    return { name: userScore, value: userScore * 100 };
  }

  /**
   *
   * @returns {array} as the final data of the user nutrients
   */
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

  /**
   *
   * @param {array} data the raw data of the user nutrients
   * @returns {array} as the formated data of the user nutrients
   */
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
