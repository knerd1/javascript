for (let i = 0; i <=10; i++) {
     const element = i;
     if (element == 5) {
         // console.log('five hunters');
     }
     //console.log(element);
}

//_______________________________
for (let i = 1; i <=10; i++) {
     //console.log(`outerloop:${i}`);
     for (let j = 1; j <=10; j++) {
    // console.log(`innerloop:${j} and outerloop${i }`);
   // console.log(i*j);
     }
}
const hunters =["gon","kurapika",'killua','leario']
for (let i = 0; i < hunters.length; i++) {
     const element = hunters[i];
     //console.log(element);
}

// Break And continue
for (let i = 0; i <= 20; i++) {
     if (i==5) {
         console.log("detected 5 now here loop will stop");
          break                         //loop will stop 
     }
     const element = i;
     //console.log(element);
}
for (let i = 0; i <= 20; i++) {
     if (i==5) {
          console.log("detected 5 now here loop will still continue");
          continue
     }
     const element = i;
     console.log(element);
}