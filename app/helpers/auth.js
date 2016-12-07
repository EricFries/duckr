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

export function checkIfAuthed (store) {
    // ignore firebase for now
    return store.getState().isAuthed
}

export function logout () {
    console.log('log out')
}
