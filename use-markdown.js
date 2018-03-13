"use strict";

function loadMdFromUrl(url) {
  $.get(url, function(data) {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
    $("#markdown-content").html(html);
  });
}

// TODO: Add more, add menu, add ...
loadMdFromUrl("content/hello.md");
