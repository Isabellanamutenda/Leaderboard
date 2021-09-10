export default (arr) => {
  const parent = document.getElementById('scores');
  parent.innerHTML = '';
  arr.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `${element.user} : ${element.score}`;
    parent.appendChild(li);
  });
};