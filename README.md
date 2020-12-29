# OTT 파티

1. OTT 여러명이 시청할때 편하게 관리하기 위한 앱
2. 타겟 플랫폼
   * 왓챠
   * 넷플릭스
   * 디즈니플러스?
   * 쿠팡 플레이?
3. 필수 기능
   1. 푸시알람으로 문자 보내는 주기 알려주기
      1. 계좌번호를 입력하고
      2. 언제 납부하는지 기간도 입력
      3. 얼마를 나눠내야되는지 알려주기
   2. 초대코드를 통한 계모임 가입
   3. 공유 계정 ID, PW 등록
      * PW 암호화 할 것이라는 것 고객들에게 어필 필요
   4. 계모임원 휴대폰 번호로 파티 추가
      * 휴대폰 번호를 추가하면 가입 여부 확인하고 문자로 초대 코드 보내주기
   5. 연체자에겐 2달치 입금시키기 위한 + 버튼
4. 부가 기능
   1. 4명만의 채팅방
   2. 코드 공유는 카카오톡 링크로 
   3. 커뮤니티(like [4플릭스](https://www.4flix.co.kr/))
   4. 계원들 N월 입금 현황판



# 기술 스택

기본적인 템플릿?은

1. React Native
2. Firebase Firestore
3. Recoil



1. 푸시알람으로 문자 보내는 주기 알려주기
   * https://www.npmjs.com/package/react-native-sms
2. 휴대폰 연락처 가져오기
   1. https://github.com/morenoh149/react-native-contacts
3. Navigation은 Tab 기반으로 react-navigation v5 사용



# 화면 구성

1. 구독 현황(여러개 가능)
   1. 현재 계장 맡고있는 서비스들
   2. 서비스 추가
      1. 계원들 휴대폰 번호 입력
      2. plan 입력
      3. 요청 개월 수 입력
      4. 지금 보내기
   3. 서비스 상세
      1. 구독자 수정
      2. 지금 메시지 보내기(Stack)
         1. 휴대폰 번호 입력
         2. 얼마어치 요청할건지 개월 수 입력
         3. 메시지 주기 설정
   4. 계장 가입 화면
      1. ID, PW 입력
      2. 계장 정보 입력
   5. 계원 가입 화면
      1. 가입할 계모임의 정보 표시
      2. 계원 정보 입력
2. 내 정보
   1. 내 휴대폰 번호(필요 없긴 한데 유저 식별용)
   2. 주기 푸시 알림설정 켜기/끄기
   3. 계원들에게 보낸 문자 내역
   4. 다크모드(Option)


# 릴리즈 날짜

2021년 3월 1일(예시)



# 수익 구조(논의 중)

후보

[ ] 광고
[ ] 수익 없어도 됨
[ ] 