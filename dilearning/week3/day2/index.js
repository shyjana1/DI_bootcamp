

document.getElementById("lib-button").addEventListener("click", function() {
    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value
    console.log(noun,adjective,person,verb,place);
    const story = document.getElementById('story')
    story.innerHTML = ''

    story.append(noun,adjective,person,verb,place)
  });