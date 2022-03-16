# learn-typescript

인프런의 [타입스크립트 입문 - 기초부터 실전까지](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner) 온라인 강의 리포지토리입니다.

[![typescript-beginner](https://joshua1988.github.io/images/posts/web/inflearn/typescript-beginner-kor.png)](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8?inst=f1ae9299&utm_source=blog&utm_medium=githubio&utm_campaign=captianpangyo&utm_term=banner)

## 개발 환경

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Git](https://git-scm.com/downloads)

💡 참고 사항 : 수업에서는 VSCode를 기준으로 설명합니다. 별도로 선호하시는 IDE가 있다면 그걸 쓰셔도 괜찮습니다 😄

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

## License & Copyright

**Copyright © 2020 Captain Pangyo**
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기

1. 타입스크립트의 기본 환경 구성

- [x] NPM 초기화
- [x] 타입스크립트 라이브러리 설치
- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
- [x] 자바스크립트 파일을 타입스크립트 파일로 변환
- [x] `tsc` 명령어로 타입스크립트 컴파일 하기

2. 명시적인 `any` 선언하기

- `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
- 가능한한 구체적인 타입으로 타입 정의

3. 프로젝트 환경 구성

- babel, eslint, prettier 등의 환경 설정

4. 외부 라이브러리 모듈화
