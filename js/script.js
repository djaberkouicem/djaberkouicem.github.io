
// ============================================
// RESOURCES: SUBJECT LIST (on resources.html)
// Reads the RESOURCES array (from resources-data.js)
// and builds the list of subject links automatically.
// ============================================
const subjectsListEl = document.querySelector('#subjects-list');

if (subjectsListEl && typeof RESOURCES !== 'undefined') {
  RESOURCES.forEach(function (subject) {
    const link = document.createElement('a');
    link.className = 'post-row';
    link.href = 'subjects/subject.html?slug=' + subject.slug;

    const count = subject.chapters.length;
    const countLabel = count === 1 ? '1 chapter' : count + ' chapters';

    link.innerHTML =
      '<div>' +
        '<div class="post-title">' + subject.title + '</div>' +
        '<p class="post-excerpt">' + subject.description + '</p>' +
      '</div>' +
      '<span class="post-meta">' + countLabel + '</span>';

    subjectsListEl.appendChild(link);
  });
}

// ============================================
// RESOURCES: SUBJECT PAGE (on subjects/subject.html)
// Reads ?slug=xxx from the URL, finds that subject in
// RESOURCES, and renders its title + chapter list.
// ============================================
const chaptersListEl = document.querySelector('#chapters-list');

if (chaptersListEl && typeof RESOURCES !== 'undefined') {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const subject = RESOURCES.find(function (s) { return s.slug === slug; });

  const titleEl = document.querySelector('#subject-title');
  const pageTitleTag = document.querySelector('title');

  if (subject) {
    if (titleEl) titleEl.textContent = subject.title;
    if (pageTitleTag) pageTitleTag.textContent = subject.title + ' — Djaber Kouicem';

    if (subject.chapters.length === 0) {
      chaptersListEl.innerHTML = '<p style="color:var(--ink-soft);">No summaries uploaded yet for this subject — check back soon.</p>';
    } else {
      subject.chapters.forEach(function (chapter) {
        const link = document.createElement('a');
        link.className = 'post-row';
        link.href = '../' + chapter.file;
        link.target = '_blank';
        link.rel = 'noopener';
        link.innerHTML =
          '<div>' +
            '<div class="post-title">' + chapter.title + '</div>' +
            '<p class="post-excerpt">' + chapter.description + '</p>' +
          '</div>' +
          '<span class="post-meta">PDF</span>';
        chaptersListEl.appendChild(link);
      });
    }
  } else if (titleEl) {
    titleEl.textContent = 'Subject not found';
  }
}
