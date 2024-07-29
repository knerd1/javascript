for (let i = 0; i <=10; i++) {
     const element = i;
     if (element == 5) {
         // console.log('five hunters');
     }
     //console.log(element);
}

//_______________________________
for (let i = 0; i <=10; i++) {
     console.log(`outerloop:${i}`);
     for (let j = 0; j <=10; j++) {
    // console.log(`innerloop:${j} and outerloop${i }`);
    console.log(i + '*' + j + "=" + i*j  );
     }
}