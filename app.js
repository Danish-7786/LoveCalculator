let yourName = document.getElementById('male');
let partnerName = document.getElementById('female')
let parinaam = document.getElementById('parinaam');
let lovePercentage =()=> {return Math.floor(Math.random() *50 +50 )};
let resultDiv = document.getElementById('results')
// console.log(parinaam);
let yourNameValue =0;
let partnerNameValue = 0;
let love = 0;

const generatePercentage =()=> {
 yourNameValue =Number(yourName.value.length);
    partnerNameValue = Number(partnerName.value.length);
 
    love = lovePercentage();


}
const lovePer = () => {
 

    if(yourNameValue>0 && partnerNameValue>0){

        resultDiv.innerHTML = `<h2>Results:  ${love} %</h2>`;
  
    }
    else{

        resultDiv.innerHTML ='<h2>Please enter both names</h2>'
    }
}