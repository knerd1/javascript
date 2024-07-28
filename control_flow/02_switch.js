const month = 3
switch (month) {
     case 1:
          console.log('Jan');
          break;
     case 2:
          console.log('feb');
          break;
     case 3:
          console.log('march');
          break;           //after case matching in this next case will also print 
     case 4:                //execpt default (but with break the control flow will break)
          console.log('april');
          break;     
     default:
          break;
}