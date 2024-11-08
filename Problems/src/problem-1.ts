{
  //
  const sumArray = (numbers: number[]): number => {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum;
  };


  const res = sumArray([10, 20, 30, 40,]);
  console.log(res);

  //
}
