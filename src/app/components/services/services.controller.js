class ServicesController {
  constructor($sce, AnchorSmoothScrollService, $location, $timeout, EmailService, $scope) {
    'ngInject';

    this.trustAsHtml = $sce.trustAsHtml;
    this.AnchorSmoothScrollService = AnchorSmoothScrollService;
    this.location = $location;
    this.timeout = $timeout;
    this.scope = $scope;

    this.EmailService = EmailService;
    this.main = $scope.$parent.$parent.$parent.main;

    this.classes = this.getClasses();

    // Default value
    this.classSession = {
      hireEquipment: "No"
    };


  }

  itemSliderClick(selectedClass, $event) {
    this.selectedClass = selectedClass;

    this.location.hash("bookingForm");
    var scrollSpeed = 25;
    this.AnchorSmoothScrollService.scrollTo("bookingForm", scrollSpeed);

    this.timeout(() => this.classSession.class = selectedClass.name , scrollSpeed * 25);
  }

  getClasses() {
    return [
      new ClassSession('Heart Foundation Walking Group', '../assets/images/baltas-patrick.jpg', `
        <strong>REPS ROMERS</strong> (Anyone welcome to join)<br><br>Moderate pace walks.
        It is opportunity to keep Nordic Walking and meet new people. Register your interest
        to find out more. <br><br> Join us after you\'ve experienced the Have a Go Session.
        <br><br>* Pole Hire Price $5.00
      `),
      new ClassSession('Once a Week for 4 Weeks', '../assets/images/vermont-south-seniors.jpg', `
        Participate in one Nordic Walks once a week for four weeks. If you\'re interested in
         being a more active Nordic Walker, then join us for 1 hour session for four weeks.
         <br><br><br>* We can also come to your location if requested over the phone.
      `),
      new ClassSession('4 Weeks in 1 Walk', '../assets/images/nordic-senior3.jpg', `
        Ready to take it to the next level? Join this 2 to 3 hour session (depending on the
          group size) and learn the complete technique.<br><br><br>* We can also come to your
          location if requested over the phone.
      `)
    ];
  }


  beginnerSessionSubmit() {
    this.beginnerSessionValidating = true;
    var name = this.beginnerSession.name;
    var email = this.beginnerSession.email;
    var phone = this.beginnerSession.phone;

    var notes = 'Have A Go Session';

    this.EmailService.sendEmail(name, email, phone, notes)
      .success((response) => {
        this.beginnerSessionValidating = false;
        this.main.broadcastToast(response.message);

        // reset form
        this.beginnerSession = {};
        this.scope.beginnerSessionForm.$setPristine();
        this.scope.beginnerSessionForm.$setUntouched();
      })
      .error((response) => {
        this.beginnerSessionValidating = false;
        this.main.broadcastToast("Error: Failed to send message.");

        // reset form
        this.beginnerSession = {};
        this.scope.beginnerSessionForm.$setPristine();
        this.scope.beginnerSessionForm.$setUntouched();
      });
  }

  classSessionSubmit() {
    this.classSessionValidating = true;
    var name = this.classSession.name;
    var email = this.classSession.email;
    var phone = this.classSession.phone;

    var notes = `
      Class Booking: ${this.classSession.class}, Hire Equipment: ${this.classSession.hireEquipment}
    `;

    this.EmailService.sendEmail(name, email, phone, notes)
      .success((response) => {
        this.classSessionValidating = false;
        this.main.broadcastToast(response.message);

        // reset form
        this.classSession = {};
        this.scope.classBookingForm.$setPristine();
        this.scope.classBookingForm.$setUntouched();
      })
      .error((response) => {
        this.classSessionValidating = false;
        this.main.broadcastToast("Error: Failed to send message.");

        // reset form
        this.classSession = {};
        this.scope.classBookingForm.$setPristine();
        this.scope.classBookingForm.$setUntouched();
      });
  }

  presentationSubmit() {
    this.presentationFormValidating = true;
    var name = this.presentation.fullname;
    var email = this.presentation.email;
    var organisationName = this.presentation.organisationName;
    var phone = this.presentation.phone;
    var notes = "";
    if (organisationName === undefined) {
      notes = `Presentation`;
    } else {
      notes = `Presentation - Organisation Name: ${organisationName}`;

    }

    this.EmailService.sendEmail(name, email, phone, notes)
      .success((response) => {
        if (response.error) {
          this.main.broadcastToast(response.error.message);
        } else {
          this.main.broadcastToast(response.message);
        }

        this.presentationFormValidating = false;
        // reset form
        this.presentation = {};
        this.scope.presentationForm.$setPristine();
        this.scope.presentationForm.$setUntouched();
      })
      .error((response) => {
        this.presentationFormValidating = false;
        this.main.broadcastToast("Error: Failed to send message.");

        // reset form
        this.presentation = {};
        this.scope.presentationForm.$setPristine();
        this.scope.presentationForm.$setUntouched();
      });
  }

}

class ClassSession {
  constructor(name, thumbnail, content) {
    this.name = name;
    this.thumbnail = thumbnail;
    this.content = content;
  }
}

export default ServicesController;
