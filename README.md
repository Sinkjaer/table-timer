# Table Timer

A turn timer for board games, for up to six players around a table. Open it on an iPhone and add it to the home screen.

**Open it:** https://sinkjaer.github.io/table-timer/

## Put it on your iPhone

1. Open the address above in Safari.
2. Tap Share, then **Add to Home Screen**.
3. Open **Table Timer** from the home screen. It runs full screen and works offline after the first visit.

Player names and photos are saved only on the phone.

## Updating

`index.html` is generated from `tabletop-timer.html` by `build-iphone-app.sh` (kept outside this repository).
After replacing `index.html`, change `VERSION` in `sw.js` (for example to `table-timer-v2`) so phones load the new copy.
