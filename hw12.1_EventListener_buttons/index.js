let saveUrl = '';
const buttonSetUrl = document.getElementById('setUrlButton');
buttonSetUrl.addEventListener('click', function(e) {
    saveUrl = prompt('Enter URL:', 'www.google.com');
});

const buttonOpenUrl = document.getElementById('openUrlButton');
buttonOpenUrl.addEventListener('click', function(e) {
    if (saveUrl) {
        window.location = `https://${saveUrl}`;
    } else alert('Press button enter URL.');
})




