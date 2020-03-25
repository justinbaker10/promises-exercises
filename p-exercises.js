const urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  $.get(urls[0]).then(function (dogImage) {
      console.log("Data was fetched!", dogImage)
      return $.get(urls[1])
  }).then(function (dogImage) {
      console.log("Data was fetched!", dogImage)
      return $.get(urls[2])
  }).then(function (dogImage) {
    console.log("Data was fetched!", dogImage)
    return $.get(urls[3])
}).then(function (dogImage) {
    console.log("Data was fetched!", dogImage)
    return $.get(urls[4])
}).then(function (dogImage) {
    console.log("Data was fetched!", dogImage)
}).catch(function (err) {
    console.log("Error fetching data!")
})