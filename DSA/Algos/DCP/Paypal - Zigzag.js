function zigzag(str, k) {
    const n = str.length;
    const matrix = new Array(k);
    for(let i = 0; i < k; i++) {
      matrix[i] = new Array(n);
    }
    
    let x = 0;
    let y = 0;
    let act = 1;
    while(x < n) {
      matrix[y][x] = str[x];
      
      if(y === k-1) {
        act = -1;
      }
      
      if(y === 0) {
        act = +1;
      }
      
      y = y + act;
      x++;
    }
    
    for(let i = 0; i < k; i++) {
      let strP = "";
      for(let j = 0; j < n; j++) {
        strP = matrix[i][j] ? strP + matrix[i][j] : strP + " ";
      }
      console.log(strP);
    }
  }
  zigzag("thisisazigzkhjhvkhvkhmchgvhghfdfyjfjyfjyfjfjytjhvjvjhvgfxgnxfag", 7);
  zigzag3("thisisazigzkhjhvkhvkhmchgvhghfdfyjfjyfjyfjfjytjhvjvjhvgfxgnxfag", 7);
  // zigzag2("thisisazigzkhjhvkhvkhmchgvhghfdfyjfjyfjyfjfjytjhvjvjhvgfxgnxfag", 7);
  
  function getSpacesOfLength(len) {
    let str = ""
    for(let i = 0; i < len; i++) {
      str+=" ";
    }
    return str;
  }
  
  function zigzag2(string, k) {
    const n = string.length;
    let index = 0;
    for(let i = 0; i < k; i++) {
      let before = i;
      let after = k - 1 - i;
      index = 0;
      let str = "";
      while(index < n) {
        index+=before;
        str = str + getSpacesOfLength(before) + (string[index] || "") + getSpacesOfLength(after);
        index+=after;
        let temp = before;
        before = after;
        after = temp;
      }
      console.log(str);
    }
  }
  
  function zigzag3(string, k) {
    for(let i = 0; i < k; i++) {
      let str = "";
      let prefix = i, suffix = 2*k - 2 - i;
      for(j = 0; j < string.length; j++) {
        const index = j % (2*k - 2);
        if(index === prefix || index === suffix) {
          str+=string[j]; 
        } else {
          str+=" "
        }
      }
      console.log(str);
    }
  }
  
  
  
  
  
  
  
  
  