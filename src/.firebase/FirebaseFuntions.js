import { db, storage } from './FirebaseConfig'

export function removeContact(id) {
  db.collection('contacts')
    .doc(id)
    .delete()
    .then(function () {
      console.log('Documento elminado correctamente!')
    })
    .catch(function (error) {
      console.error('Error al remover el documento: ', error)
    })
}

export function createContact(data) {
  const { first_name, last_name, email, avatar } = data

  if (avatar[0] === undefined) {
    db.collection('contacts').add({
      first_name,
      last_name,
      email,
      avatar: '',
    })
    alert('Contacto Agregado!😎')
    document.getElementById('formulario').reset()
    return
  }

  const storageRef = storage.ref(`photos/${avatar[0].name}`)
  const task = storageRef.put(avatar[0])

  document.getElementById('formulario').reset()

  task.on(
    'state_changed',
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      if (percentage === 100) return alert('Contacto Agregado!😎')
    },
    (error) => {
      console.error(error.message)
    },
    async () => {
      const avatar = await task.snapshot.ref.getDownloadURL()
      await db.collection('contacts').add({
        first_name,
        last_name,
        email,
        avatar,
      })
    }
  )
}
