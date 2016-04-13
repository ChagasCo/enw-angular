import Email from '../models/email';

class EmailService {
  constructor($http, API, $q) {
    'ngInject';

    this.http = $http;
    this.baseUrl = API.url;
    this.q = $q;

  }

  sendEmail(name, email, phone, notes) {
    if (!angular.isDefined(name) || !angular.isDefined(email)) {
      return this.q.reject({
        "message" : "Invalid arguments specified. "
      });
    }

    if (name === "" || email === "") {
      return this.q.reject({
        "message" : "Invalid arguments specified. "
      });
    }

    return this.http
      .post(this.baseUrl + '/emails', {
        name: name,
        email: email,
        phone: phone,
        notes: notes
      })
      .success((result) => {
        return this.q.resolve(result);
      });
  }
}

export default EmailService;
