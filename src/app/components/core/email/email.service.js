import Email from '../models/email';

class EmailService {
  constructor($http, API, $q) {
    'ngInject';

    this.http = $http;
    this.baseUrl = API.url;
    this.q = $q;

  }

  sendEmail(name, email, phone, notes) {
    return this.http
      .post(this.baseUrl + '/emails', {
        name: name,
        email: email,
        phone: phone,
        notes: notes
      })
      .success((result) => {
        return this.q.resolve(result.data);
      });
  }
}

export default EmailService;
