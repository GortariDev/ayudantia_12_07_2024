let text;

document.getElementById('jsButton').addEventListener('click', function() {
    text = document.getElementById('text').innerText;

    if(text === "Texto inicial"){
        document.getElementById('text').innerText = 'Texto cambiado con JavaScript';
    }else {
        document.getElementById('text').innerText = 'Texto inicial';
    }
});

document.getElementById('box').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById('box').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'lightblue';
});
