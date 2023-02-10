# 원티드 프리온보딩 프론트엔드 2월 선발과제

# 프로젝트 실행방법

1. clone
2. npm i 명령어 실행
3. npm start 명령어 실행.

# 실행화면
## ⭐ 로그인, 회원가입 ⭐
- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현 ( email : @포함 / password : 8자리 이상)
- 유효성 통과가 안된다면 버튼에 disabled 
- 회원가입 후 /signin 페이지로 이동
- 로그인 후 로컬스토리지에 토큰 저장 후 /todo 페이지 이동


![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/124856203/218042107-2f4eadb1-9352-4def-8bea-3ebe6810f570.gif)



## ⭐ todo 리스트 ⭐
- 투두 리스트 목록 보기
- 투두 추가 기능


![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/124856203/218038894-2bc6343b-661b-45e2-8f13-5409af594d4b.gif)


#

- 투두 수정 버튼 클릭시 '제출','취소' 버튼 기능
- 제출시 입력한 투두 내용 수정, 취소시 입력한 투두 내용 초기화 후 수정 비활성화
- 투두 삭제 기능


![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/124856203/218039613-86c13800-6cea-4b8c-a2de-44a085fa333a.gif)


#
- 토큰 있을때 /signin, /signup 페이지 접근시 /todo페이지로 이동


![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/124856203/218043936-f6e7baf2-1700-4f6b-a96f-7c3e86f3885e.gif)

#
- 토큰 없을때 /todo 페이지 접근시 /signin페이지로 이동


![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/124856203/218070787-1db63e64-edc9-4187-8fa5-ae52dd9eecee.gif)



