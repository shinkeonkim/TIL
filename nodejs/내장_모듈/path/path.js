const path = require('path');

const string =__filename;

console.log('path.sep:',path.sep); //경로의 구분자
console.log('path.delimiter:',path.delimiter); //환경 변수의 구분자
console.log('----------------------------------');
console.log('path.dirname():',path.dirname(string));//파일이 위치한 경로
console.log('path.extname():',path.extname(string));//파일의 확장자
console.log('path.dirname():',path.basename(string)); //파일 확장자
console.log('path.basename():',path.basename(string,path.extname(string))); //파일 이름 + 파일 확장자
console.log('----------------------------------');
console.log('path.parse():',path.parse(string));
// 파일 경로를 root,dir,base,ext,name으로 분리함.
console.log('path.format():',path.format({
    dir:'C:\\users\\kimshinkeon',
    name: 'path',
    ext:'.js',
}));
// path.parse()한 객체를 파일 경로로 합쳐줌
console.log('path.normalize()',path.normalize('C://users\\\kimshinkeon\\\path.js')); 
// \나 /를 여러번 사용했거나 혼용했을 때, 정상적인 경로로 변경해줌.
console.log('-----------------------------------');
console.log('path.isAbsolute()',path.isAbsolute('C:\\')); 
console.log('path.isAbsolute()',path.isAbsolute('./home'));
//파일의 경로가 절대 경로인지 상대경로인지 알려줌.
console.log('-----------------------------------');
console.log('path.relative()',path.relative('C:\\users\\kimshinkeon\\path.js','C:\\')); 
// 경로 두개를 넣어서 첫번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log('path.join():',path.join(__dirname,'..','..','/users','.','/kimshinkeon'));
// 여러 인자가 들어갔을 떄, 하나의 경로로 합쳐줌
console.log('path.resolve()',path.resolve(__dirname,'..','users','.','/kimshinkeon'));
// join과 비슷함.
// but, path.resolve는 / 를 만나면 앞의 경로를 무시함.
// path.join은 상대경로로 처리함.