function gotoPage(page = 0) {
  page = isNaN(page) ? 0 : page;
  if (!adobeAPIs) {
    goto_page_onload = page;
    $("#pdf-frame").get(0).scrollIntoView(false);
  }
  adobeAPIs
    .gotoLocation(page, 0, 0)
    .then(() => {
      $("#pdf-frame").get(0).scrollIntoView(false);
    })
    .catch((error) => console.log(error));
}

for (const element of $(".pdf-goto-page")) {
  const target_page = Number(
    /pdf-to-([0-9]+)/.exec($(element).attr("id"))[1] || 0
  );
  $(element).click(function () {
    gotoPage(target_page);
  });
}
