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


// -------------------------------------Rectangle Area--------------------------------------
function calculateRectangleArea() {
    // Rectangle Width Field
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    widthField.value = '';

    // Rectangle Length Field
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    lengthField.value = '';

    const area = width * length;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

// --------------------------------------------------------------

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height);
    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}
// --------------------------------------------------------------

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const ellipseResult = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', ellipseResult)
}
// --------------------------------------------------------------

// reusable function -----> reduce duplicate code

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function setElementInnerText(elementId, result){
    const element = document.getElementById(elementId);
    element.innerText = result;
}

