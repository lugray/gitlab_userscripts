// ==UserScript==
// @name         Hide bot
// @namespace    https://github.com/lugray
// @version      0.1
// @description  Remove bot events from the gitlab feeds
// @author       Lisa Ugray
// @match        http*://gitlab.uottawa.ca/*
// @grant        none
// ==/UserScript==

(function($) {
  var bot_pattern = 'uoWeb Automation';
  $(document).bind('DOMSubtreeModified',
    function(){
      setTimeout(function(){ $(document).scroll(); }, 0);
    }
  );
  $(document).ajaxStop(
    function() {
      $('.event-block:has(.author_name:contains(' + bot_pattern + '))').remove();
    }
  );
})(jQuery);
