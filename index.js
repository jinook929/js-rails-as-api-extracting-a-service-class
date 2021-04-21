document.addEventListener("DOMContentLoaded", function () {

  const div = document.getElementById("test-div")

  console.log(div.dataset)

  console.log(div.dataset.firstName)
  console.log(div.dataset.lastName)

  div.dataset.test = "Hi"
  console.log(div.dataset.test)

  div.dataset.firstName = "Sally"
  console.log(div.dataset.firstName)

  delete div.dataset.active
  console.log(div.dataset.active)

  const buttons = document.querySelectorAll("[data-modal-id]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.dataset.modalId
      console.log(modalId)
      btnTextArr = []
      modalId.split("-").forEach(e => btnTextArr.push(e))
      console.log(btnTextArr)
      btnText = btnTextArr[0][0].toUpperCase() + btnTextArr[0].slice(1) + " " + btnTextArr[1]
      const modal = document.getElementById(modalId)
      if(button.textContent == `Open ${btnText}`) {
        button.textContent = `Hide ${btnText}`
      } else {
        button.textContent = `Open ${btnText}`
      }
      modal.classList.toggle("hidden")
      modal.classList.toggle("show")
    })
  })
});
