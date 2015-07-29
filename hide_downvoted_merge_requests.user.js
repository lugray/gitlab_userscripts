// ==UserScript==
// @name         Hide downvoted merge requests
// @namespace    https://github.com/lugray
// @version      0.1
// @description  Add a button to show/hide merge requests with downvotes
// @author       Lisa Ugray
// @match        https://gitlab.uottawa.ca/*/merge_requests
// @grant        none
// ==/UserScript==

(function($) {
  $(".issues-other-filters").append($("<div></div>")
    .addClass("inline")
    .addClass("prepend-left-10")
    .append($("<button></button>")
      .addClass("btn")
      .append($("<i></i>")
        .addClass("fa")
        .addClass("fa-eye")
      )
      .append($("<span></span>")
        .addClass("light")
        .append("Toggle downvoted")
      )
      .click(function() {
        $('.panel').show();
        $('li.merge-request:has(.downvotes)').toggle();
        $('.panel:not(:has(li.merge-request:visible))').hide();
      })
    )
  )
})(jQuery);