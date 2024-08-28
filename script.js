const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ07FcHs1cY_3OZ_0gcv6NlK9gKJ4LxXEGvioBCwJWicFR7tuww-hE-b7YYnqxCK5G1w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You for joining the Waitlist."
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })