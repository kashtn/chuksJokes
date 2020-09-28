
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top'
    });
  });


const showJoke = document.getElementById('showJoke')

const jokeBtn = document.querySelector('.jokeBtn')

const jokeContainer = document.querySelector('.joke')
jokeContainer.style.display = 'none'

async function show (){
  const jokeHbs = await fetch('/joke.hbs')
  const template = await jokeHbs.text()
  

  const hbs = await fetch('/joke')
  const text = await hbs.json()

  const render = Handlebars.compile(template)
  const result = render({joke: text.value})

  showJoke.innerHTML = result
}

jokeBtn.addEventListener('click', async (e) => {
  e.preventDefault
  jokeBtn.style.display = 'none'

  await show()
  jokeContainer.style.display = 'inline-block'
})

const next = document.getElementById('next')

next?.addEventListener('click', (e) => {
  e.preventDefault
  console.log(123);
  
  show()
})