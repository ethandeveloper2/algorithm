function solution(n)
{
    const result = n
    .toString()
    .split('')
    .map(ele => parseInt(ele))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return result;
}