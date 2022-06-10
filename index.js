
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogDetailsHeader = document.createElement('h3')
dogDetailsHeader.textContent = 'Description:'
dogDetails.append(dogDetailsHeader)

let dogDescription = document.createElement('p')
dogDescription.textContent = `This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her, and
dislikes other animals.`

dogDetails.append(dogDescription)

let dogFeedTimes = document.createElement('h3')
dogFeedTimes.textContent = 'Feeding Times:'
dogDetails.append(dogFeedTimes)

let dogTimesList = document.createElement('ul')
dogDetails.append(dogTimesList)


let dogFeedTime1 = document.createElement('li')
let dogFeedTime2 = document.createElement('li')
let dogFeedTime3 = document.createElement('li')

dogFeedTime1.textContent = "9:00 am"
dogFeedTime2.textContent = "12:00 pm"
dogFeedTime3.textContent = "5:00 pm"

dogTimesList.append(dogFeedTime1)
dogTimesList.append(dogFeedTime2)
dogTimesList.append(dogFeedTime3)
