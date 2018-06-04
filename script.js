/* Task 1 */

var heading = document.getElementById('heading')
console.log(heading.innerText)
/* Task 2 using plain JavaScript */

var textBtn = document.getElementById('textBtn2')
textBtn.addEventListener('click',function(){
    var task2 = document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="Hello world"
    task2.appendChild(paragraph)
})

//Task2b
function changeBgcolor(event){
    var body = document.getElementsByTagName('body')[0]
    if (event.target.innerText == "Red"){
        body.style.backgroundColor ='red'
    }
    if(event.target.innerText =="Green"){
        body.style.backgroundColor = 'green'
    }
}
//task 2c
function redirectToGoogle(){
    window.location.assign('https://www.google.com')
}

/* Task 4 using jQuery */


//task4

$('#addText4').click(function(event){
    var paragraph =$('<p>').text('Hello world')
    $('#task4a').append(paragraph)
    
})
