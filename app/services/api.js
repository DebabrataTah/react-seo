require('firebase/database');

const firebaseConfig = {
  databaseURL: 'https://react-seo.firebaseio.com'
};

class Api {

  constructor() {
    this.database = firebase.initializeApp(firebaseConfig).database();
  }

  fetchHomePage() {
    return Promise.all([this.fetchHead1(), this.fetchBody1()])
      .then(([head, body]) => ({ head, body }));
  }

  fetchBody1() {
    return this._fetchOnce(`body1`);
  }

  fetchBody2() {
    return this._fetchOnce(`body2`);
  }

  fetchHead1() {
    return this._fetchOnce(`head`);
  }

  fetchHead2() {
    return this._fetchOnce(`head2`);
  }
  
  _fetchOnce(endpoint) {
    return this.database.ref(endpoint)
      .once('value')
      .then(snapshot => snapshot.val());
  }
  
}

const api = new Api();
export default api;