function CalculateBMI(){
    let feet = document.getElementById('feet').value
    let inch= document.getElementById('inch').value
    let weight = document.getElementById('kg').value


    feet= parseInt(feet)
    inch= parseInt(inch)
    weight= parseInt(kg)
    let height =(feet*12*inch)/39.37007874
    let bmi =weight/(height*height)
    document.getElementById('result').innerHTML="Your bmi is :"+bmi


}