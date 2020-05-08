document.addEventListener('DOMContentLoaded', function () {
  const navTabs = document.getElementById('nav-tabs');

  navTabs.addEventListener('click', switchTabs);

  function switchTabs (event) {
    if (event.target.classList.contains('inactive')) {
      const activeItems = document.querySelectorAll('.active');
      const inactiveItems = document.querySelectorAll('.inactive');

      activeItems.forEach((item) => {
        item.classList.remove('active');
        item.classList.add('inactive');
      });

      inactiveItems.forEach((item) => {
        item.classList.remove('inactive');
        item.classList.add('active');
      });
    }
  }
});
