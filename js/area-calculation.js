function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseFieldTextString = baseField.value;
    const baseFieldText = parseFloat(baseFieldTextString);
    // console.log(baseFieldText);

    const heightField = document.getElementById('triangle-height');
    const heightFieldTextString = heightField.value;
    const heightFieldText = parseFloat(heightFieldTextString);
//     console.log(heightFieldText);

if(isNaN(width)){
    alert('please insert a number');
    return;
}
    const area = 0.5 * baseFieldText * heightFieldText;
    console.log(area);


    const areaSpan = document.getElementById('area-fields');
    areaSpan.innerText = area; 
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthFieldTextString = widthField.value;
    const widthFieldText = parseFloat(widthFieldTextString);

    const largeField = document.getElementById('rectangle-large');
    const largeFieldTextString = largeField.value;
    const largeFieldText = parseFloat(largeFieldTextString);

    if(isNaN(width)){
        alert('please insert a number');
        return;
    }

    const areaCalculate = widthFieldText * largeFieldText;
    console.log(areaCalculate);

    const areaRectangle = document.getElementById('area-rectangle');
    areaRectangle.innerText = areaCalculate;
}

// function calculateParallelogramArea(){
//     const paraWidthField = document.getElementById('parallelogram-base');
//     const paraWidthFieldTextString = paraWidthField.value;
//     const paraWidthFieldText = parseFloat(paraWidthFieldTextString);

//     const paraHeightField = document.getElementById('parallelogram-height');
//     const paraHeightFieldTextString = paraHeightField.value;
//     const paraHeightFieldText = parseFloat(paraHeightFieldTextString);
    
//     const constParallelogram = paraWidthFieldText * paraHeightFieldText;
//     console.log(constParallelogram);
// }

function inputValueId(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldTextString = inputField.value;
    const inputFieldText = parseFloat(inputFieldTextString);
    return inputFieldText;
}
function setElementInnerText(elementId , parallelogramTotal, ellipseTotal){
    const innerElement = document.getElementById(elementId);
    innerElement.innerText = parallelogramTotal, ellipseTotal;
}

function calculateParallelogramArea(){
    const base = inputValueId('parallelogram-base');
    const height = inputValueId('parallelogram-height');

    if(isNaN(width)){
        alert('please insert a number');
        return;
    }

    const parallelogramTotal = base * height;
    // console.log(parallelogramTotal);
    setElementInnerText('area-parallelogram', parallelogramTotal );

}

function calculateEllipseArea(){
    const ellipseLarge =inputValueId('ellipse-a');
    const ellipseShort = inputValueId('ellipse-b');

    if(isNaN(width)){
        alert('please insert a number');
        return;
    }

    const ellipseTotal = 3.14 * ellipseLarge * ellipseShort;
    setElementInnerText('area-ellipse', ellipseTotal);
}
