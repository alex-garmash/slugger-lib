function slugger (strings) {
    let str = '';
    for(let i = 0; i < strings.length; i++){
        if(strings[i] === ' ' && strings[(i+1)] !== undefined && strings[i+1] !== ' '){
            str += '-';
        }
        else if(strings[i] !== ' '){
            str += strings[i];
        }
    }
  return str;
};

module.exports = slugger;