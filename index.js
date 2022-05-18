function scuberGreetingForFeet(x){
  if(x <= 400){
    return 'This one is on me!'
  }else if(x < 2000){
    return 'That will be twenty bucks.'
  }else if (x <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else {
    return 'No can do.'
  }
}

function ternaryCheckCity(x){
  // Write your code here!
  const message = x === "NYC" ? 'Ok, sounds good.' : "No go."
  return message
}

function switchOnCharmFromTip(x){
  // Write your code here!
  let message;

  switch(x){
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  }
  return message
}