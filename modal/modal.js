// 필요한 DOM 요소들을 가져옵니다.
const openModalBtn = document.getElementById('openModalBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');
const closeBtnInModal = document.querySelector('.btn-close');
const loginForm = document.getElementById('loginForm');

// '로그인' 버튼 클릭 시 모달 열기 - master
openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'master';
});

// 마스터 브랜치에서수정 - master
openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'master';
});

// '로그인' 버튼 클릭 시 모달 열기 - change_js_Event 브랜치변경
openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'line';
});

// 닫기 버튼 (x) 클릭 시 모달 닫기
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// 닫기 버튼 클릭 시 모달 닫기
closeBtnInModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// 모달 외부 클릭 시 모달 닫기
window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

// 전송 버튼 클릭 시 동작 (실제 서버 통신은 제외)
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('로그인 시도: ' + username);
        // 여기에 실제 서버로 데이터를 보내는 로직을 추가합니다.
        // 예를 들어 fetch() API를 사용하여 서버와 통신할 수 있습니다.
        // fetch('your-login-api', { method: 'POST', body: JSON.stringify({ username, password }) });

        // 로그인 성공 시 모달 닫기
        loginModal.style.display = 'none';

        //중복문장-깃테스트
        loginModal.style.display = 'none';
        
        // 폼 초기화
        loginForm.reset();
    } else {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
    }
});