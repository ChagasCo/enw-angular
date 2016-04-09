class HomeController {
  constructor($sce) {
    'ngInject';

    this.cards = this.getCards();
    this.images = this.getSliderImages();
    this.trustAsHtml = $sce.trustAsHtml;
  }

  getCards() {
    return [
      new Card()
        .setTitle('Have a Go Sessions')
        .setSubTitle('Introduction')
        .setContent('Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.')
        .setImageUrl('./assets/images/cards/card1.jpg'),
      new Card()
        .setTitle('Equipment')
        .setSubTitle('Buy or Hire Equipment')
        .setContent('Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire them for each session or purchase your own.')
        .setImageUrl('./assets/images/cards/card2.jpg'),
      new Card()
        .setTitle('Range of Group Classes')
        .setSubTitle('Classes')
        .setContent('Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next level and try out the course today.')
        .setImageUrl('../assets/images/cards/card3.jpg'),
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
}

class SliderImage {
  constructor(title, imageUrl, content) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
  }
}

export default HomeController;
