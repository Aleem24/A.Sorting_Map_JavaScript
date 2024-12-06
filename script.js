let marks = [100,80,83,43,-23];

function ascending(){
    marks.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML = marks;
};



function descending(){
    marks.sort(function(a,b){return b-a});
    document.getElementById("result").innerHTML = marks;
};






function updatingArrayElement(num){
    return num+10;};


let uptadedMarks = marks.map
(updatingArrayElement);

document.getElementById("map").innerHTML = uptadedMarks;