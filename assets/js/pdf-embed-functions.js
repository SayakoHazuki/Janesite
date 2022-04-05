function gotoPage(page = 0) {
  page = isNaN(page) ? 0 : page;
  if (!adobeAPIs) return;
  adobeAPIs.gotoLocation(page, 0, 0).catch((error) => console.log(error));
}

for (const element of $(".pdf-goto-page")) {
  const target_page = Number(
    /pdf-to-([0-9]+)/.exec($(element).attr("id"))[1] || 0
  );
  $(element).click(function () {
    gotoPage(target_page);
  });
}
