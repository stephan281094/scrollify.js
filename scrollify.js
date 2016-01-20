var $ = window.$;

/* http://github.com/stephan281094/scrollify.js
 v1.0 | 20140522
 License: none (public domain)
 */
(function () {
  $.fn.scrollify = function (parentElement) {
    var $scope = $(this)
    var $parentElement = parentElement == null ? $('body') : $(parentElement)

    return $scope.hover(function () {
      if ($scope.get(0).scrollHeight > $scope.get(0).clientHeight) {
        return $parentElement.css({
          'overflow-y': 'hidden'
        })
      }
    }, function () {
      return $parentElement.css({
        'overflow-y': 'scroll'
      })
    })
  }
}).call(this)
