# 오름 국어 모의고사 진단 시스템

[오름] 국어학원의 모의고사 오답 진단 + 시간 관리 진단 시스템.

## 구조

```
oreum-mocksys/
├── index.html          ← 학생용 진단 페이지
├── dashboard.html      ← 강사 대시보드 (비밀번호: oreum2025)
├── config.js           ← SCRIPT_URL · 비밀번호 설정
└── data/
    ├── mock-2025-05.json     (1회차 · 25년 5월 학평)
    ├── mock-2027-s2-01.json  (2회차 · 상상 시즌2-1)
    └── mock-2026-05.json     (3회차 · 26년 5월 학평)
```

## 배포

1. 이 저장소를 GitHub에 업로드
2. Settings → Pages → Branch: main / (root) → Save
3. 접속: `https://oreum1222.github.io/oreum-mocksys/`

## 새 회차 추가

1. `data/mock-{회차ID}.json` 파일 추가
2. `index.html`의 `EXAM_LIST` 배열에 한 줄 추가
3. 끝
