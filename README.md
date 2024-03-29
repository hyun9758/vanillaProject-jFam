<img src="https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/2bdb91c6-4088-4605-946e-d61f434aaa61" width="10%" height="10%">

### 01. 프로젝트 개요
- 구현 시안 : 타잉 (티빙)
- 주요 특징 : ott사이트, 반응형 디자인, swiper.js와 pocketbase 사용
- 프로젝트 기간 : 2024.01.04(목)~2024.01.16(화)
- 프로젝트 멤버 : 정현수, 정서린, 정현주, 정예슬


### 02. 구현 요구사항
- 슬라이드가 필요한 ui에서는 **[swiper.js](https://swiperjs.com/)**를 사용해주세요.
    - 각 슬라이드를 데이터로 받아 동적으로 렌더링 되도록 만들어주세요.
    - 슬라이드의 `prev`, `next` 버튼도 구현해주세요.
    - 키보드 키로도 작동되도록 구현해주세요.
- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 사용하여 “시청 중인 컨텐츠”의 UI를 구성해주세요.
- 랜딩페이지 애니메이션을 구현해 주세요.
- “회원가입 기능”을 구현해주세요.
    - 최소한 이메일, 비밀번호 입력 필드(`input`), 제출 버튼(`button`)을 가지도록 구성해주세요.
- 이메일과 비밀번호의 유효성을 확인합니다.
    - 이메일 조건 : 최소 `@`, `.` 포함
    - 비밀번호 조건 : 특수문자 포함 최소 6자 - 최대 16자
    - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 구현해주세요.
- 회원가입을 통해 사용자(user)를 생성하고 관리합니다.
    - 데이터 통신을 통해 유저를 생성하고 관리해주세요
    - 유저의 회원을 탈퇴할 수 있는 기능을 구현해주세요
    - 로그인된 유저를 인식하여 UI를 다르게 랜더링해주세요
    - 로그인되지 않은 사용자면 회원가입 페이지로 리디렉션 시켜주세요
    - 회원가입시 중복된 유저가 있는지 체크해주세요
 
  ### 03. 구현 화면
  -  랜딩 페이지
![랜딩 페이지](https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/c4e598b4-fb22-433d-a874-61e219885e82)

  -  메인 페이지
![메인 페이지](https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/2e15a8b7-b699-4131-a698-e44e2b6054ca)

  -  회원가입
![회원가입](https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/e4815b5a-7363-4a4f-a547-6ed9135c5fcc)

  -  로그인
![로그인](https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/6d30714c-b0cb-44ae-be88-722d2c02dede)

  -  프로필
![프로필](https://github.com/FRONTENDSCHOOL8/JFAM/assets/148925429/5b0740f2-ae4f-4d8e-95e9-77a89139bb28)

