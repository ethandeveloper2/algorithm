function solution(cards1, cards2, goal) {
        let idx1 = 0;
    let idx2 = 0;

    for (let word of goal) {
        if (idx1 < cards1.length && word === cards1[idx1]) {
            idx1++;
        } else if (idx2 < cards2.length && word === cards2[idx2]) {
            idx2++;
        } else {
            return "No";
        }
    }

    return "Yes";
//     var answer = 'Yes';
//     let left1 = 0;
//     let left2 = 0;
//     let answerIdx = 0;
//     while (left1 < cards1.length || left2 < cards2.length) {
//         if (goal[answerIdx] === cards1[left1]) {
//             left1++;
//             answerIdx++;
//         } else if (goal[answerIdx] === cards2[left2]) {
//             left2++;
//             answerIdx++;
//         } else {
//             answer = "No"
//             break;
//         }
        
//     }
//     return answer;
}