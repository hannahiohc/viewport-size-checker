javascript: (function() {
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap");
    document.head.appendChild(link);
    
    let viewportSizeContainerClass = "viewport-size-container";

    function createViewportSizeContainer() {
        let existingContainer = document.getElementsByClassName(viewportSizeContainerClass);
        if (existingContainer.length > 0) {
            existingContainer[0].parentNode.removeChild(existingContainer[0]);
        }
        
        let viewportSizeContainer = document.createElement("div");
        viewportSizeContainer.className = viewportSizeContainerClass;
        viewportSizeContainer.style.cssText = "position: fixed; padding: 1px 14px; top: 18px; right: 20px; text-align: center; border-radius: 7px; background-color: rgba(255, 106, 69, 0.8); color: #fff; font-family: 'Barlow', 'sans-serif'; font-size: 18px; line-height: 28px; height: 30px; z-index: 10000; font-weight: normal;";
        document.body.appendChild(viewportSizeContainer);
        viewportSize(); 
        window.onresize = viewportSize;
        viewportSizeContainer.addEventListener('click', function(e) {
            e.preventDefault();
            viewportSizeContainer.parentNode.removeChild(viewportSizeContainer);
            window.onresize = null;
        });
    }

    function viewportSize() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let size = width + " X " + height;
        let viewportSizeContainers = document.getElementsByClassName(viewportSizeContainerClass);
        if (viewportSizeContainers.length > 0) {
            viewportSizeContainers[0].innerHTML = "<span>" + size + "</span>";
        }
    }

    createViewportSizeContainer();
})();
