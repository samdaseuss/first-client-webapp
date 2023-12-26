## XMLHttpRequest
- .open()
- .send()
- .response

 ** 참고 XMLHttpRequest MDN 문서 : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

## DOM API
1. `요소1.appendChild(요소2);` 요소2를 요소1 자식으로 붙이기
2. `요소.innerHTML = '';` 하위 내용 싹 지우기
3. `요소.innerHTML = '문자열';` 오버라이트, 1번과 비교해서 기억

## 그 외 도구들
- 코드 리펙토링 : `handeler` https://handlebarsjs.com/
- 아이콘 : `fontawesome`  https://fontawesome.com/

## 깃허브 어려운 점 해결
- 깃 체크아웃 하고 메인에 붙이는 방법
    - 깃 체크아웃 git checkout 8a063627cc77d2760bc233e597bc119d6a3b1eec
    - HEAD의 현재 위치는 8a06362 일 것 임
    - 현재 위치에서 커밋하고
    - 현재 위치를 main으로 전환 git checkout main
    - 현재 위치에 이전 커밋 정보를 머지 시킨다. git merge 8a063627
    - 원격저장소에 git push origin main로 올리기

## 포팅 과정
- js > ts로 전환