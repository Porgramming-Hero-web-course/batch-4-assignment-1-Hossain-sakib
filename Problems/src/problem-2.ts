{
  //

  const removeDuplicates = (numbers: number[]): number[] => {
    const newNumbersArray: number[] = [];
    for (const num of numbers) {
      if (!newNumbersArray.includes(num)) {
        newNumbersArray.push(num);
      }
    }
    return newNumbersArray;
  };

  const uniqueNumbersArray = removeDuplicates([1, 2, 2, 3, 4, 4,5, 5,6,6,6,7,8,8]);
  console.log(uniqueNumbersArray);

  //
}
