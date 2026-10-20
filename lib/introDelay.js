// Entrance animations wait for the preloader on the first page load only;
// after client-side navigation they start almost immediately.
export default function introDelay(full = 2.1) {
  return typeof window !== "undefined" && window.__dsIntroDone ? 0.15 : full;
}
