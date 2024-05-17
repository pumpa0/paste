document.addEventListener('DOMContentLoaded', function() {
  const contentDiv = document.getElementById('content');
  const data = ['contoh1', 'contoh2', 'contoh3', /* tambahkan teks selanjutnya di sini */];

  data.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('copyable');
    paragraph.textContent = text;
    contentDiv.appendChild(paragraph);
  });

  const paragraphs = document.querySelectorAll('.copyable');

  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('dblclick', function() {
      const range = document.createRange();
      range.selectNode(paragraph);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Oops, unable to copy', err);
      }

      window.getSelection().removeAllRanges();
    });

    paragraph.addEventListener('mousedown', function(event) {
      if (event.detail > 1) {
        event.preventDefault();
      }
    });

    paragraph.addEventListener('selectstart', function(event) {
      event.preventDefault();
    });

    paragraph.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });

    paragraph.addEventListener('copy', function(event) {
      event.preventDefault();
      event.clipboardData.setData('text/plain', paragraph.textContent);
    });
  });

  document.addEventListener('copy', function(event) {
    event.preventDefault();
  });
});
