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
    addToCalculationEntry('triangle', area);
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
    addToCalculationEntry('rectangle', area);
}

// --------------------------------------------------------------

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area)


    addToCalculationEntry('parallelogram', area);
}



// --------------------------------------------------------------






function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please type a number');
        return;
    }
    const ellipseTwoDecimal = 3.14 * majorRadius * minorRadius;
    const ellipseResult = ellipseTwoDecimal.toFixed(2);
    setElementInnerText('ellipse-area', ellipseResult);
    addToCalculationEntry('ellipse', ellipseResult);
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



// -------------------------------------------------------
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}