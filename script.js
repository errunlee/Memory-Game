let imgs = [
  {
    name: 'cows',
    image: 'images/cows.png'
  },
  {
    name: 'coww',
    image: 'images/coww.png'
  },
  {
    name: 'dhindo',
    image: 'images/dhindo.png'
  },
  {
    name: 'kid',
    image: 'images/kid.png'
  },
  {
    name: 'masu',
    image: 'images/masu.png'
  },
  {
    name: 'vat',
    image: 'images/vat.png'
  },  
  {
    name: 'cows',
    image: 'images/cows.png'
  },
  {
    name: 'coww',
    image: 'images/coww.png'
  },
  {
    name: 'dhindo',
    image: 'images/dhindo.png'
  },
  {
    name: 'kid',
    image: 'images/kid.png'
  },
  {
    name: 'masu',
    image: 'images/masu.png'
  },
  {
    name: 'vat',
    image: 'images/vat.png'
  }  
]

function all() {

  let score = document.querySelector('#score')
  s = 0
  move=5
  score.innerHTML = s
  moves.innerHTML=move;
  let cardsChosen = []
  let idArr = []
  imgs.sort(() => 0.5 - Math.random());
  console.log(imgs)
  for (let i = 0; i < imgs.length; i++) {
    let img = document.createElement('img')
    img.setAttribute('id', i)
    img.src = 'images/blank.png'
    document.querySelector('#container').appendChild(img)
  }

  let allImgs = document.querySelectorAll('img')
  function applyEventListener(){
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener('click', show)
  }
  }
applyEventListener();
  function show() {
    let id = this.id
    idArr.push(id);
    document.getElementById(id).removeEventListener('click', show)
    document.getElementById(id).src = imgs[id].image;
    cardsChosen.push(imgs[id].name)
    console.log(cardsChosen)
    if (cardsChosen.length == 2) {
      for (let i = 0; i < allImgs.length; i++) {
        allImgs[i].removeEventListener('click', show)
      }
      setTimeout(() => {
        if (cardsChosen[0] === cardsChosen[1]) {
          s++;
          score.textContent = s;
          if (s == 6) {
            setTimeout(final, 5000)
            container.innerHTML = 'Hurray you have completed the game!!!'
            container.classList.add('win')
            container.classList.add('lead')
          }
          document.getElementById(idArr[0]).src = 'images/white.png'
          document.getElementById(idArr[1]).src = 'images/white.png'
          document.getElementById(idArr[0]).removeEventListener('click', show);
          document.getElementById(idArr[1]).removeEventListener('click', show);
          cardsChosen = [];
          idArr = [];
         applyEventListener();
        }
        else {
          if(move!==1){
          move--;
          moves.innerHTML=move;
          }
          else{
            moves.innerHTML=0;
            setTimeout(()=>{
            alert('No moves left.');
            final();              
            },500)
          }
          document.getElementById(idArr[0]).src = 'images/blank.png'
          document.getElementById(idArr[1]).src = 'images/blank.png'
          applyEventListener();
          cardsChosen = []
          idArr = []
        }
      }, 1000)
    }
  }
}
all();
function final() {
  setTimeout(() => {
    document.getElementById('container').innerHTML = ''
    let c = confirm('do you want to play again?')
    if (c) {
      all();
    }
    else {
      container.classList.add('win')      
      container.classList.add('lead')      
      container.innerHTML = 'See you soon!!! :)'
    }
  })
}



