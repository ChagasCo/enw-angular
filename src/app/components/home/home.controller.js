

class HomeController {
  constructor($sce, $state, EmailService, $scope) {
    'ngInject';

    this.cards = this.getCards();
    this.images = this.getSliderImages();
    this.trustAsHtml = $sce.trustAsHtml;
    this.state = $state;
    this.register = {};
    this.EmailService = EmailService;

    this.main = $scope.$parent.$parent.$parent.main;
    this.registerValidating = false;
    this.scope = $scope;
  }

  registerSubmit() {
    this.registerValidating = true;
    var name = this.register.firstName + ' ' + this.register.lastName ;
    var email = this.register.email;
    var phone = this.register.phone;
    var notes = 'Preferred Phone Time: ' + this.register.preferredPhoneTime;

    this.EmailService.sendEmail(name, email, phone, notes)
      .success((response) => {
        this.registerValidating = false;
        this.main.broadcastToast(response.message);

        // reset form
        this.register = {};
        this.scope.registerForm.$setPristine();
        this.scope.registerForm.$setUntouched();
      })
      .error((response) => {
        this.registerValidating = false;
        this.main.broadcastToast("Error: Failed to send message.");

        // reset form
        this.register = {};
        this.scope.registerForm.$setPristine();
        this.scope.registerForm.$setUntouched();
      });
  }

  getCards() {
    return [
      new Card()
        .setTitle('Have a Go Sessions')
        .setSubTitle('Introduction')
        .setContent('Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.')
        .setImageUrl('./assets/images/cards/card1.jpg')
        .setSRef("services({'#': 'haveAGo'})"),
      new Card()
        .setTitle('Equipment')
        .setSubTitle('Buy or Hire Equipment')
        .setContent('Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire them for each session or purchase your own.')
        .setImageUrl('./assets/images/cards/card2.jpg')
        .setSRef('products'),
      new Card()
        .setTitle('Range of Group Classes')
        .setSubTitle('Classes')
        .setContent('Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next level and try out the course today.')
        .setImageUrl('../assets/images/cards/card3.jpg')
        .setSRef("services({'#': 'classes'})"),
    ];
  }

  getSliderImages() {
    return [
      new SliderImage('Weight Loss', './assets/images/promo-slider/promo1.jpg', `
          Nordic Walkers plant the poles in front of them with an outstretched arm,
          creating a full body movement and using 90 per cent of the body\'s muscles.
        `),
        new SliderImage('Challenge Your Brain', './assets/images/promo-slider/promo2.jpg', `
            Whenever you learn something new, you stimulate your brain. Research shows that
            activities which combine cognitive, physical and social aspects are especially beneficial
            for brain health. <br>(SEO - Cognitive, Brain Health)
          `),
    ];
  }

}

class Card {
  setTitle(title) {
    this.title = title;
    return this;
  }

  setSubTitle(subTitle) {
    this.subTitle = subTitle;
    return this;
  }

  setContent(content) {
    this.content = content;
    return this;
  }

  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
    return this;
  }

  setSRef(stateAnchor) {
    this.stateAnchor = stateAnchor;
    return this;
  }
}

class SliderImage {
  constructor(title, imageUrl, content) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
  }
}

export default HomeController;
