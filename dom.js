document.addEventListener('DOMContentLoaded', function() {
    var colorBox = document.getElementById("color-box");
    console.log('colorBox',colorBox);
    var changeColorBtn = document.getElementById('change-color-btn');
    console.log('changeColorBtn',changeColorBtn);


    function getRandomColor() {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 16).toString(16);
        }
        return color;
    }
    

    changeColorBtn.addEventListener('click', function() {
        var randomColor = getRandomColor();
        console.log('randomColor',randomColor);
        colorBox.style.backgroundColor = randomColor;
    });
});
