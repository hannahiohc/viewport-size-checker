javascript: (function() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');
    document.head.appendChild(link);
    
    var container;
    function viewportSize() {
        var width, height, size;
        height = window.innerHeight;
        width = window.innerWidth;
        size = width + ' X ' + height;
        container.innerHTML = '<span>' + size + '</span>';
    }

    container = document.createElement('div');
    container.style.cssText = 'position: fixed; padding: 1px 14px; top: 18px; right: 20px; text-align: center; border-radius: 7px; background-color: rgba(255, 106, 69, 0.8); color: #fff; font-family: 'Barlow', 'sans-serif'; font-size: 18px; line-height: 28px; height: 30px; z-index: 10000; font-weight: normal;';
    container.innerHTML = '<span>' + window.innerWidth + ' X ' + window.innerHeight + '</span>';
    document.body.appendChild(container);
    window.onresize = viewportSize;

    container.addEventListener('click', function(e) {
        e.preventDefault();
        container.parentNode.removeChild(container);
        window.onresize = null;
    })
})();
