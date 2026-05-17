function student(score){

    switch(score){
  case"100":
  return "A grade";
  break;
  case"70":
  return "B grade";
  break;
  case"50":
     return "C grade";
    break;
    case"30":
     return "D grade";
    break;
default:
   return"no grade";
    }
}

let studentScore = "100";
let result= student(studentScore);
console.log(result);
