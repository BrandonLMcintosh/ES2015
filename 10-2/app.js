// var PI = 3.14;
// PI = 42;

//We do not want to be able to do that

//solution
const PI = 3.14;
PI = 42;
//received error: TypeError: Assignment to constant variable at app.js:8. We know that CONST is preventing us from re-assigning the variable. Excellent. 

//if we want to actually change the value of CONST, we can't. We will need to create a new variable and assign 42 to that new CONST

//quiz: 

/* 

1. Question: 
    What is the difference between VAR and LET?
    Answer: 
    They are both variable types, but you cannot you cannot redeclare LET like you can with VAR. You can access a hoisted variable with VAR, and let is block-scoped. 

2. Question: 
    What is the difference between VAR and CONST: 
    Answer: 
    with CONST, you can neither redeclare or reassign a variable. You can do both with VAR. You can also access a hoisted variable with VAR, and CONST is block-scoped. 

3. Question: 
    What is the difference between LET and CONST: 
    Answer: 
    With LET, We can reassign a variable (give it a new value at its reference), but we cannot redeclare the variable (change its reference). With CONST, you can do neither of those things.

4. Question: 
    What is hoisting?
    Answer: 
    Hoisting is JavaScripts process of compiling all variable declarations first in a JavaScript document. This allows you to access the variable and its undefined value before an assignment is actually made. The same thing is done with functions.

*/

