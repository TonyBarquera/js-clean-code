// A class can't has more than one specific functionality
// * Unique task

// Not recommended
// class UserSettings {
//   constructor(user, settings) {
//     this.user = user;
//     this.settings = settings;
//   }

//   changeSettings(settings) {
//     if(this.verifyCredentials()) {}
//   }

//   verifyCredentials() {}
// }

// Recommended
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return true;
  }
}

class UserSettings extends UserAuth {
  constructor(user, settings) {
    super(user);
    this.settings = settings;
  }

  changeSettings(settings) {
    if(this.verifyCredentials()) {
      console.log('You can change the settings :)');
    }
  }
}

const newAccess = new UserSettings('Tony', 'Dark Mode');
newAccess.changeSettings('Light Mode');