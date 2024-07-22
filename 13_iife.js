// immediately invoked function expression  (functions dont pollute with global scope)
// immeadiatly execute function after writing that function

(function hint() {          // when function has name it called "named iife"
     console.log(`Database connected`);
})();    //we need semicolon because when iife revoke function then it will not know when to stop so next code will not work 

( ()=>{                   //-- When function has empty and had no name called unamed iife
     console.log("DB Connected");
})();

        //write two iife together (use semi colon alwayssssssss)
( (user)=>{
     console.log(`DB Connected ${user}`);
})("gon");
