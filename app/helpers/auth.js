export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Eric Fries',
        avatar: 'https://avatars3.githubusercontent.com/u/9327473',
        uid: 'ericfries',
      })
    }, 2000)
  })
}
