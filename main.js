function start_classification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oo8rqQeEp/model.json', modelReady);
}

function modelReady(){
    classifier.classify(got_results);
}

function got_results(error, results){

}