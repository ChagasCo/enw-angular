class ServicesController {
  constructor($sce) {
    'ngInject';

    this.trustAsHtml = $sce.trustAsHtml;

    this.classes = this.getClasses();
    this.classBookingForm = {
      hireEquipment: false
    };
  }

  itemSliderClick(classSession, $event) {
      alert(classSession);
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
}

class ClassSession {
  constructor(name, thumbnail, content) {
    this.name = name;
    this.thumbnail = thumbnail;
    this.content = content;
  }
}

export default ServicesController;
