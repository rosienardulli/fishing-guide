String.prototype.isEmpty = function(){
    return (this.length === 0 || !this.trim());
};

var guestMessages = {
    msgs: [],

    getMessages: function(msg){
        this.msgs.push("User: " + value + new Date + " ");
    },

    printMessages: function(){
        guestMessages.getMessages();
        var showEntry = document.getElementById("first-entry").innerHTML = this.msgs;

    }
};

var getEntry = function(){
    value = document.getElementById("content").value;
    return value;
};

var clearDiv = function(){
  document.getElementById("content").value = "";
}


var isEmpty = function(entry){
    entry = getEntry();
    var output = document.getElementById("content").value;
    if ( output == '' ){
              alert("Enter a message");
    }
     else {
      guestMessages.printMessages();
    }
}




// updateEntry();
