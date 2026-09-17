/**
 * 오름 국어 모의고사 진단 시스템 — 공통 설정
 * ──────────────────────────────────────────
 * 이 파일은 공개 사이트에 그대로 노출된다. 비밀번호를 여기에 쓰지 말 것.
 * 강사 대시보드 비밀번호는 Apps Script 프로젝트('오름 진단')의
 * 프로젝트 설정 > 스크립트 속성 > DASH_PASSWORD 에서만 관리한다(2026-09-18 보안 수정).
 */

window.OREUM_CONFIG = {

  // Google Apps Script 웹앱 URL (학생 제출용. 성적 조회는 서버가 비밀번호를 확인한 뒤에만 응답한다)
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbz_wJDjne4Y1Bok4GmK09aZqqUkgmW-m-OEyLGuMo7KiOJYYEIF3bEUIxkyXvxOxRui/exec"

};
