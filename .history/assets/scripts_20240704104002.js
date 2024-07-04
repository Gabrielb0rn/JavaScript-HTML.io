// JavaScript code for the HTML page

// Function to calculate the average of three numbers
function calculateAverage() {
  // Get the input values from the text fields
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);

  // Calculate the average
  let average = (num1 + num2 + num3) / 3;

  // Display the average in the result field
  document.getElementById("result").innerHTML = "Average: " + average;
}

// Function to check if the student is approved or not
function checkApproval() {
  // Get the average from the result field
  let average = parseFloat(document.getElementById("result").innerHTML.split(": ")[1]);

  // Check if the average is greater than or equal to 7
  if (average >= 7) {
    // Display "Approved" in the approval field
    document.getElementById("approval").innerHTML = "Approved";
  } else {
    // Display "Reproved" in the approval field
    document.getElementById("approval").innerHTML = "Reproved";
  }
}
 // JavaScript code for the HTML page
 
// Function to calculate the average of three numbers
function calculateAverage() {
  // Get the input values from the text fields
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);
function calcularMedia() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);  let nota3 = parseFloat(document.getElementById("nota3").value);
 
  // Calculate the average
  let average = (num1 + num2 + num3) / 3;
  let media = (nota1 + nota2 + nota3) / 3;
 
  // Display the average in the result field
  document.getElementById("result").innerHTML = "Average: " + average;
  document.getElementById("media").innerHTML = "Média: " + media;

  if (media >= 7) {
    document.getElementById("resultado").innerHTML = "Aprovado";
  } else {
    document.getElementById("resultado").innerHTML = "Reprovado";
  }
 }
 
-// Function to check if the student is approved or not
function checkApproval() {
-  // Get the average from the result field
-  let average = parseFloat(document.getElementById("result").innerHTML.split(": ")[1]);
-
-  // Check if the average is greater than or equal to 7
-  if (average >= 7) {
-    // Display "Approved" in the approval field
-    document.getElementById("approval").innerHTML = "Approved";
-  } else {
-    // Display "Reproved" in the approval field
-    document.getElementById("approval").innerHTML = "Reproved";
-  }
document.getElementById("calcular").addEventListener("click", calcularMedia);
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calcular").addEventListener("click", calcularMedia);
 });
