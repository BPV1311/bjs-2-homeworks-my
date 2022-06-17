function getArrayParams(arr) {
  let min, max, sum, avg;
  min = -100;
  max = 100;
  sum = -100 + 100;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];

    avg = sum / Number(arr.length).toFixed(2);


    return { min: min, max: max, avg: avg };
  }
}
  // Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    func(arrOfArr[i]);
    if (func(arrOfArr[i] > max)) {
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

  // Задание 3
function worker2(arr) {
  let min, max, diffirence;
  min = Infinity;
  max = -Infinity;
    
  for ( let i = 0; i < arr.length; i ++) {
    if (arr[i] < min) {
      min = arr[i];
    }
      
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return diff = Math.abs(max - min);

}
