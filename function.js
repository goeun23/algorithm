<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>
<p id="demo"></p>

<script>
function insertionSortDescending(arr) {
  let n = arr.length;
  
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // 현재 삽입할 요소
    let j = i - 1;

    // key보다 큰 값들은 오른쪽으로 이동
    while (j >= 0 && arr[j] > key) {
    console.log(`while진입 j : ${j}, arr[j]:${arr[j]}, key:${key}`);
      arr[j + 1] = arr[j];
      j--;
    }
	console.log(`while을 빠져나옴 j : ${j}, arr:${arr}`)
    // 적절한 위치에 key 삽입
    arr[j + 1] = key;
    console.log(`적절한위치에 key 삽입 j+1:${j+1}, arr[j+1] : ${arr[j+1]}, key: ${key}, arr:${arr}`);
  }
console.log(`for문을 빠져나옴: arr : ${arr}`)
  return arr;
}

const cars = insertionSortDescending([5, 3, 8, 6, 2]);
document.getElementById("demo").innerHTML = cars

</script>
</body>
</html>
