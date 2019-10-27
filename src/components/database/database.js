import perguntas from './data/quiz.json';

export default class LocalStorageDatabase {

    perguntas;

    constructor() {
        localStorage.clear();
        this.perguntas = perguntas;
    }


  initialize() {
    try {
      localStorage.setItem('scenarios', JSON.stringify(this.perguntas));

      return true;

    } catch (error) {
      console.error('Could not create local storage database', error);
      return false;
    }
  }
}