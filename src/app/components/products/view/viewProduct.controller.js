class ViewProductController {
  constructor(ProductsService, $sce, $stateParams, taOptions) {
    'ngInject';

    taOptions.toolbar = [
      ['h1', 'h2', 'h3', 'p', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'indent', 'outdent', 'clear', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount'],
      // ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      // ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];

    var id = $stateParams.id;

    this.loading = true;
    ProductsService.getProduct(id)
      .success((product) => {
        this.product = product;
        this.loading = false;
      });

    this.trustAsHtml = $sce.trustAsHtml;
  }

  filePicked(event) {
    console.log(this.value);

    this.product.imageUrl = this.value;
  }
}

export default ViewProductController;
