function solution(ingredient) {
    var answer = 0;
    const ingredientLength = ingredient.length;
    let array = [];
    for(let i=0; i<ingredientLength; i++){
        if(i>=3 && ingredient[i]==1){
                if(array.at(-1)==3 && array.at(-2)==2 && array.at(-3)==1){
                    array.pop();
                    array.pop();
                    array.pop();
                    answer++
                } else {
                    array.push(ingredient[i]);
                }
        } else {
        array.push(ingredient[i]);
        }
    }
    return answer;
}