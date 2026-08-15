// ============================================
// REVEAL ON SCROLL
// Goal: sections with class "reveal" fade in
// smoothly the moment they enter the screen.
// ============================================

// 1. Select every element that has the "reveal" class.
//    document.querySelectorAll returns a list of ALL
//    matches (not just the first one).
const revealItems = document.querySelectorAll('.reveal');

// 2. Hide them first, right now, using JavaScript
//    (not CSS) — this is "progressive enhancement":
//    if this script ever fails to run, the elements
//    were never hidden in the first place, so content
//    stays visible and readable no matter what.
revealItems.forEach(function (item) {
  item.classList.add('pre-reveal');
});

// 3. Create an "observer" — a built-in browser tool
//    that watches elements and tells us when they
//    enter or leave the visible screen (the "viewport").
const observer = new IntersectionObserver(
  function (entries) {
    // "entries" is the list of elements the observer
    // is reporting on right now.
    entries.forEach(function (entry) {
      // entry.isIntersecting is true when the element
      // has scrolled into view.
      if (entry.isIntersecting) {
        entry.target.classList.remove('pre-reveal');
        entry.target.classList.add('in-view');

        // Stop watching this element — we only want
        // the animation to happen once, not every
        // time the user scrolls past it.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // threshold: 0.15 means "trigger once 15% of the
    // element is visible" — feels natural, not too early.
    threshold: 0.15,
  }
);

// 4. Tell the observer to start watching each
//    .reveal element.
revealItems.forEach(function (item) {
  observer.observe(item);
});
