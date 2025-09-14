// 필요한 DOM 요소들을 가져옵니다.
const openModalBtn = document.getElementById('openModalBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');
const closeBtnInModal = document.querySelector('.btn-close');
const loginForm = document.getElementById('loginForm');

// '로그인' 버튼 클릭 시 모달 열기
openModalBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});