(()=>{
  [...document.querySelectorAll('#_BLOCK_ .question')].forEach($q=>$q.addEventListener('click', (e)=>{
    let $entry = e.target.closest('.entry');
    $entry.toggleAttribute('data-open');
    $entry.setAttribute('alpacapp-element', 'entry entry-open');
    $entry.querySelector('.question').setAttribute('alpacapp-element', 'question question-open');
    let $siblings = $entry.parentNode.children;
    if(!$entry.hasAttribute('data-open'))
      $entry = null;
    [...$siblings].forEach($c=>{
      if($c!==$entry) {
        $c.removeAttribute('data-open');
        $c.setAttribute('alpacapp-element', 'entry');
        $c.querySelector('.question').setAttribute('alpacapp-element', 'question');
      }
    });
  }));
})();