//counter code
var button = document.getElementById('counter');
button.onclick = function () {
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.InnerHTML = counter.toString();
                
                
            }
             request.open('GET', 'http://http://joardaraditya.imad.hasura-app.io/counter' , true);
             request.send(null);
        }
       
    };
    
    
        
        
    
    
    //Capture the request and store it in a variable
    //Render the variable in correct span
    
    
};