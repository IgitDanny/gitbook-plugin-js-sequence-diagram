require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    $('code.lang-sequence-hand').each(function(index, element) {
      var $element = $(element);
      $element.sequenceDiagram({theme: 'hand'});

      var wrapper = $("<div class='scroll'></div>");
      wrapper.html($element.html());
      $element.parent().replaceWith(wrapper);
    });
  });
});
