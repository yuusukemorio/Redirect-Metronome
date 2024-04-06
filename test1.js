window.onresize = function(event) {
    var imageContainers = document.getElementsByClassName('image-container');
    for (var i = 0; i < imageContainers.length; i++) {
        imageContainers[i].style.height = window.innerHeight + 'px';
    }
};