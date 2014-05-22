/* http://github.com/stephan281094/scrollify.js
 v1.0 | 20140522
 License: none (public domain)
 */
(function() {
  $.fn.scrollify = function(parentElement) {
    if (parentElement == null) {
      parentElement = "body";
    }
    return $(this).hover(function() {
      if ($(this).get(0).scrollHeight > $(this).get(0).clientHeight) {
        return $(parentElement).css({
          "overflow-y": "hidden"
        });
      }
    }, function() {
      return $(parentElement).css({
        "overflow-y": "scroll"
      });
    });
  };

}).call(this);
