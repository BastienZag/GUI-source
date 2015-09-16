var expect = chai.expect;
var should = chai.should();

describe('Soft button .btn-soft', function() {

  it('have a white backgrond color', function () {
    var selector = '.btn-soft';
    var attribute = 'background-color';
    var value = 'rgb(255, 255, 255)';

    $(selector).each(function(index, element) {
      expect($(element).css(attribute)).to.equal(value);
    });
  });

});
