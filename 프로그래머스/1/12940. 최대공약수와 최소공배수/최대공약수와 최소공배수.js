function solution(n, m) {
    /**
     * 유클리드 호제법:
     * 두 수 n, m이 공약수 G를 가질 때,
     * n = m * q + r 이라고 하면,
     * r = n - m * q = (a - bq) * G
     * 즉, r도 G로 나누어떨어진다.
     * → 따라서 GCD(n, m) = GCD(m, r)
     * → 나머지가 0이 될 때까지 반복하면 GCD를 구할 수 있다.
     *
     * 최소공배수(LCM):
     * LCM(n, m) = (n * m) / GCD(n, m)
     * 공통된 약수(GCD)가 중복되어 곱해졌기 때문에,
     * 이를 한 번 제거해서 최소공배수를 구한다.
    */
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = n * m / gcd(n, m);
    return [gcd(n, m), lcm];
}


// function solution(n, m) {
//     var answer = [];
//     let small
//     let big
    
//     if (n < m) {
//         small = n;
//         big = m
//     } else {
//         small = m;
//         big = n
//     }
    
//     // 최소 공약수 구하기
//     // n의 약수 : n부터 1까지 순회하면서, n을 나눴을 때, 나머지가 0인 숫자들.
//     // n의 약수 중 제일 큰 숫자부터 작은 숫자까지 순회하면서
//     // m을 나눴을 때, 나눠 떨어지면 가장 먼저 나눠 떨어지는 값이 최소 공약수
//     for (let i = small; i > 0; i--) {
//         if (small % i === 0) {
//             if (big % i === 0) {
//                 answer.push(i);
//                 break;
//             }
//         };
//     }
    
//     // 최소 공배수 구하기
//     // 더 큰 수를 작은 수로 나눴을 떄, 나눠 떨어지면, 더 큰수를 리턴
//     // 아니면 큰 수 * 작은 수를 리턴
//     for (let i = 1; i <= small; i++) {
//         if ((big * i) % small === 0) {
//             answer.push(big * i);
//             break;
//         }
//     }
    
//     return answer;
// }