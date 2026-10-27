// Filter buttons for the Work section.
(function () {
  var buttons = document.querySelectorAll('[data-filter]');
  var tiles = document.querySelectorAll('[data-cat]');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      tiles.forEach(function (tile) {
        tile.hidden = !(filter === 'all' || tile.getAttribute('data-cat') === filter);
      });
    });
  });
})();
