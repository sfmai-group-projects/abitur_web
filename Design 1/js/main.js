const second = document.getElementById('mssecond')
const third = document.getElementById('msthird')
const fourth = document.getElementById('msfourth')
const fifth = document.getElementById('msfifth')
const question = document.getElementById('question')
const answer = document.getElementById('answer')

const elems = document.querySelectorAll('.direction-of-preparation__article').forEach(
    article => {
      article.onmouseenter = function (e) {
        var psId = article.id.replace('d', 'ps')
        document.getElementById(psId).style.display = 'flex'
        document.getElementById(psId).style.animation = 'appearance 1s ease-in-out'
        if (article.id != 'dthird') {
          document.getElementById('msfirst').style.display = 'none'
          second.style.display =mptitle.style.display= third.style.display= fourth.style.display= fifth.style.display = 'flex'
          second.style.animation =mptitle.style.animation= third.style.animation= fourth.style.animation= fifth.style.animation = 'appearance 0.5s ease-in-out'
        }
         else {
          second.style.display = third.style.display= fifth.style.display = 'none';
          document.getElementById('msfirst').style.display =mptitle.style.display= fourth.style.display= fifth.style.display = 'flex'
          document.getElementById('msfirst').style.animation =mptitle.style.animation= fourth.style.animation= fifth.style.animation = 'appearance 0.5s ease-in-out'
        }
      }
      article.onmouseleave = function (e){
        var psId = article.id.replace('d', 'ps')
        document.getElementById(psId).style.animation = 'disappearance 0.5s ease-in-out'
        setTimeout(function() {document.getElementById(psId).style.display = 'none'}, 400)
      }
    }
 )

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    else {
      entry.target.classList.remove('show')
    }
  })
})
 const hiddenElements = document.querySelectorAll('.admission-stage')
 hiddenElements.forEach((el)=>observer.observe(el))

 const questions = document.querySelectorAll('.questions-answers__article').forEach(
  article => {
    article.onmouseenter = function (e) {
      var psId = article.id.replace('q', 'a')
      document.getElementById(psId).style.display = 'flex'
      document.getElementById(psId).style.animation = 'appearance 1s ease-in-out'
    }
  }
)










