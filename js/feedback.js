const tableBody = document.getElementById('contact-us-data')
const back = document.getElementById('back')

back.addEventListener('click', (e) => {
  location.href = `http://localhost:5501/frontend/contact-us.html`
})

const url = 'http://localhost:5500/feedbacks'
fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((json) => {
    json.data.forEach((item, i) => {
      const tr = document.createElement('tr')
      tr.innerHTML = `<th scope="row">${i + 1}</th>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.type}</td>
                        <td>${item.message}</td>`
      tableBody.appendChild(tr)
    })
  })
  .catch((err) => console.log(err))
