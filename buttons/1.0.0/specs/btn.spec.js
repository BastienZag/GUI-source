describe('Button .btn', function() {

  it('have a height equal to 36px', function () {
    var selector = 'button.btn:not(.btn-xl,.btn-lg,.btn-sm,.btn-link)';
    var attribute = 'height';
    var value = '36px';

    $(selector).each(function(index, element) {
      expect($(element).css(attribute)).to.equal(value);
    });
  });

});


describe('Button .btn-xl', function() {

  it('have a height equal to 48px', function () {
    var selector = 'button.btn-xl:not(.btn-link)';
    var attribute = 'height';
    var value = '48px';

    $(selector).each(function(index, element) {
      expect($(element).css(attribute)).to.equal(value);
    });
  });

});

describe('Button .btn-lg', function() {

  it('have a height equal to 42px', function () {
    var selector = 'button.btn-lg:not(.btn-link)';
    var attribute = 'height';
    var value = '42px';

    $(selector).each(function(index, element) {
      expect($(element).css(attribute)).to.equal(value);
    });
  });

});

describe('Button .btn-sm', function() {

  it('have a height equal to 30px', function () {
    var selector = 'button.btn-sm:not(.btn-link)';
    var attribute = 'height';
    var value = '30px';

    $(selector).each(function(index, element) {
      expect($(element).css(attribute)).to.equal(value);
    });
  });

});
