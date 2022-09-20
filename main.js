var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w_T76WzPk/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1; 

        document.getElementById("result_count").innerHTML = "Detected Dog - "+dog+" , Detected Cat - "+cat+" , Detected Lion - "+lion+" , Detected Cow - "+cow;
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_label").innerHTML = "Detected Voice Is Of - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_image");

        if(results[0].label == "Barking"){ 
            
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1; 
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Roaring"){
            img.src = "https://www.animatedimages.org/data/media/1322/animated-lion-image-0033.gif";
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://i.gifer.com/origin/8e/8e3ba71f0f7578623bacbc6dde005cd1.gif";
            cow = cow + 1;
        }
        else{
            img.src = "listen.gif";
        }
    }
}