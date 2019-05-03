function houses(n, p, connections) {
    const graph = new Array(n);
    for(let i = 0; i < n; i++) {
      graph[i] = [];
    }
    for(let i = 0; i < p; i++) {
      const conn = connections[i];
      graph[conn[0] -1].push({
        end: conn[1] - 1,
        dia: conn[2]
      });
    }
    
    function processGraph(graph) {
      const status = new Array(n);
      
      for(let i = 0; i < n; i++) {
        status[i] = {
          traversed: false,
          startsHere: true,
          endsHere: false
        };
      }
      
      for(let i = 0; i < n; i++) {
        // if(!graph[i].length) {
        //     status[i].endsHere = true;
        //     continue;
        // }

        if(status[i].traversed) {
          continue;
        }

        if(graph[i].length) {
          const queue = [i];
          let min = 1000;
          while(queue.length) {
            const node = queue.pop();
            if(!status[node].traversed) {
              status[node].traversed = true;
              if(!graph[node].length) {
                  status[node].start = i;
                  status[node].min = min;
              }
              graph[node].forEach(item => {
                status[item.end].startsHere = false;
                queue.push(item.end);
                if(item.dia < min) {
                    min = item.dia;
                }
              });
            }
          }
        }
      }
      
      return status;
    }
    
    console.log(processGraph(graph));
  }
  
  
  houses(4, 2, [[1,2,33], [3,4,55]]);
  console.log("--")
  houses(9, 6,  [[7, 4, 98],
    [5, 9, 72],
    [4, 6, 10],
    [2, 8, 22],
    [9, 7, 17],
    [3, 1, 66]]);
  
  
  
  
  
  
  