import { UserStore } from './UserStore'
const englishCode = "en-US";
const spanishCode = "es-ES";

function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}

function  getUserDisplayName(){
    const user = UserStore.getUser(userId);
    return `${user.LastName}, ${user.FirstName}`;
  }

module.exports = getAboutUsLink;