"use strict";

function loadMdFromUrl(url) {
  $.get(url, function(date) {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(text);
    $("#markdown-content").html(html);
  });

// TODO: Add more, add menu, add ...
loadMdFromUrl("content/hello.md");
