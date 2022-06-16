export default class CallApi {
  constructor(userId) {
    this.userId = userId;
  }

  async getUser() {
    try {
      let response = await fetch(`http://localhost:3000/user/${this.userId}/`);
      let allData = await response.json();
      let data = await allData.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserPerformance() {
    try {
      let response = await fetch(
        `http://localhost:3000/user/${this.userId}/performance`
      );
      let allData = await response.json();
      let data = allData.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserActivity() {
    try {
      let response = await fetch(
        `http://localhost:3000/user/${this.userId}/activity`
      );
      let allData = await response.json();
      let data = allData.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUserSessions() {
    try {
      let response = await fetch(
        `http://localhost:3000/user/${this.userId}/average-sessions`
      );
      let allData = await response.json();
      let data = allData.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
