const form = document.querySelector("form")

//this usecase will give you empty values
//const height = parseInt(document.querySelector("#height").value)
// const weight = parseInt(document.querySelector("#weight").value)
// therefore we use it after the call back


form.addEventListener('submit', function(e) {
    e.preventDefault() // do not submit
    


const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const results = document.querySelector("#results");

if (height==="" || height<0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
} else
if (weight==="" || weight<0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
} else {
    const bmi = (weight/((height*height)/10000).toFixed(2));

if(bmi<18.6){
        results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
} else if(bmi >=18.6 && bmi <= 24.9){
        results.innerHTML = `<span>Your BMI is ${bmi}. You are in normal range.</span>`;
} else if (bmi>24.9) {
    results.innerHTML=`<span> Your BMI is ${bmi}. You are Overweight.</span>`;
}}}
)
if(bmi<18.6){
        results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
} else if(bmi >=18.6 && bmi <= 24.9){
        results.innerHTML = `<span>Your BMI is ${bmi}. You are in normal range.</span>`;
} else if (bmi>24.9) {
    results.innerHTML=`<span> Your BMI is ${bmi}. You are Overweight.</span>`;
}






























