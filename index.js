var flag = document.getElementById('flag');
var model = document.getElementById('model');
var loadScreen = document.getElementById('loading-modal');
var content = document.getElementById('content');

model.addEventListener('load', function () {
    var button = model.shadowRoot.querySelector("#default-ar-button");
    loadScreen.style.opacity = '0'
    setTimeout(() => { loadScreen.style.display = 'none'; }, 3000);
    if (button.offsetParent !== null) {
        content.style.transition = 'opacity 0s';
        content.style.transitionDelay = '5s';
        setTimeout(() => button.click(), 2000);
    }
    content.style.opacity = '1'
});