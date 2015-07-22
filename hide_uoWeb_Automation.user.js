// ==UserScript==
// @name         Hide uoWeb Automation
// @namespace    https://github.com/lugray
// @version      0.1
// @description  Remove uoWeb Automation events from the gitlab feeds
// @author       Lisa Ugray
// @match        https://gitlab.uottawa.ca/*
// @grant        none
// ==/UserScript==

(function($) {
  $(document).bind('DOMSubtreeModified',
    function(){
      setTimeout(function(){ $(document).scroll(); }, 0);
    }
  );
  $(document).ajaxStop(
    function() {
      $('.event-block:has(.author_name:contains(uoWeb Automation))').remove();
    }
  );
  $('.event-block:has(.author_name:contains(uoWeb Automation))').remove();
})(jQuery);
