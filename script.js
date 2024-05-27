document.addEventListener('DOMContentLoaded', () => {
  const inuButton = document.getElementById('inuButton');
  const outputDiv = document.getElementById('output');

  inuButton.addEventListener('click', () => {
      fetch('http://localhost:3000/web') // 서버에 요청
          .then(response => {
              if (!response.ok) {
                  throw new Error('서버 에러 발생');
              }
              return response.json(); // 응답을 json으로 변환
          })
          .then(data => {
              // 데이터를 [{ class: “web” }] 형태로 가져옴
              localStorage.setItem('webData', JSON.stringify(data)); // 데이터를 로컬스토리지에 저장
              displayData(data);
          })
          .catch(error => {
              console.error('fetch 에러 발생', error);
          });
  });

  function displayData(data) {
      outputDiv.innerHTML = ''; // 기존에 들어있던 데이터를 지움
      data.forEach(item => {
          const div = document.createElement('div'); // 데이터마다 div를 생성
          div.textContent = JSON.stringify(item); // div에 데이터를 넣음
          outputDiv.appendChild(div); // div를 outputDiv에 추가
      });
  }
});
