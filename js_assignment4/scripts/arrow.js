let ask=(question,yes,no)=> (confirm(question))? yes() : no();
let result=ask(
    "Do you agree?",
    function(){
        alert("You agreed.");
    },function() {
        alert("You canceled the execution.");
    }
)