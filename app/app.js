import { pages } from './model.js';

function loadPageContent(pageID) {
  $("#app").html(pages[pageID] || "<h2>Page Not Found</h2>");
}

function initListeners() {
  $("nav a").on("click", function (e) {
    e.preventDefault();
    const pageID = $(this).attr("id");
    window.location.hash = pageID;
    loadPageContent(pageID);

    $("nav a").removeClass("active");
    $(this).addClass("active");
  });
}

function initApp() {
  const hash = window.location.hash.replace("#", "") || "home";
  loadPageContent(hash);
  $(`#${hash}`).addClass("active");
  initListeners();
}

$(document).ready(function () {
  initApp();
});
