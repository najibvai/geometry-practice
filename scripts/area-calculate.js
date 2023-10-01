function calculateTriangleArea() {
    // Get the triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);
    baseField.value = '';

    // Get the triangle hight value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    heightField.value = '';

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle Area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

// Rectangle Area
function calculateRectangleArea() {
    // Rectangle Width Field
    const widthField = document.getElementById('triangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    widthField.value = '';

    // Rectangle Length Field
    const lengthField = document.getElementById('triangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    lengthField.value = '';

    const area = width * length;
    console.log(area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}