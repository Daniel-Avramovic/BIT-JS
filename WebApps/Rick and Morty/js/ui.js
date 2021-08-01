const $responseResult = document.querySelector('#character');
export const showOnPage = (arr) => {
    arr.forEach(function (element) {
        const div = document.createElement('div');
        const div1 = document.createElement('div');
        div.setAttribute('class', 'col-xl-3 col-lg-4 col-md-6 mb-3');
        div1.addEventListener('click', () => {
          window.location.href = `characterPage.html?id=${element.id}`
        });
        const img = document.createElement('img');
        img.setAttribute('src', element.image);
        const p = document.createElement('p');
        p.textContent = element.name;
        const butt = document.createElement('button');
        butt.textContent = 'Like';
        butt.setAttribute('class', 'btn btn-primary btn-sm');
        butt.addEventListener('click', function(){
          butt.setAttribute('class', 'btn btn-success btn-sm');
        });
        div1.appendChild(img);
        div1.appendChild(p);
        div.appendChild(div1);
        div.appendChild(butt);
        $responseResult.appendChild(div);
      });
};
export const resetResult = () => {
    $responseResult.textContent = '';
}