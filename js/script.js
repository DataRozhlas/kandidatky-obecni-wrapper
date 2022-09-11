import "./byeie"; // loučíme se s IE

window.addEventListener("message", function (a) {
  if (void 0 !== a.data["cro-embed-height"])
    for (var e in a.data["cro-embed-height"])
      if ("cro-interaktivni-kandidatky" == e) {
        var d = document.querySelector("#cro-interaktivni-kandidatky");
        d && (d.style.height = a.data["cro-embed-height"][e] + "px");
      }
});
