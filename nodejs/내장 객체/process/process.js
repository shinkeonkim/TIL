console.log(process.version); //노드의 버전
console.log(process.arch); // 프로세서 아키텍트 버전
console.log(process.platform); // 운영체제 플랫폼 정보
console.log(process.pid); // 현재 프로세스 아이디 => 프로세스를 여러 개 가질때 구분할 수 있음.
console.log(process.uptime()); // 프로세스가 시작된 루 흐른 시간, 단위=초
console.log(process.execPath); //노드의 경로
console.log(process.cwd()); //현재 프로세스가 실행되는 위치
console.log(process.cpuUsage()); //현재 cpu 사용량