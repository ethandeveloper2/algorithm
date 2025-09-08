function solution(name, yearning, photo) {
    var answer = [];
    const map = new Map()
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        const names = photo[i];
        let score = 0;
        names.forEach(name => {
            if (map.get(name)) score += map.get(name);
        })
        answer.push(score);
    }
    return answer;
}