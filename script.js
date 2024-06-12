.parallax__layer--background {
  min-height: max(100vh, var(--parallax-min-height));
}

.parallax__group {
  margin-top: calc(-1 * max(100vh, var(--parallax-min-height)));
  z-index: -1;
  position: relative;
}

.parallax__layer--foreground {
  margin-top: calc(-1 * max(100vh, var(--parallax-min-height)));
}