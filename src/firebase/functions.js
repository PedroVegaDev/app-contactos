import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "./config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

export async function removeContact(id) {
  try {
    await deleteDoc(doc(db, "contacts", id));
    console.log("Documento elminado correctamente!");
  } catch (error) {
    console.error("Error al remover el documento: ", error);
  }
}

export async function createContact(data) {
  const { first_name, last_name, email, avatar } = data;

  if (avatar[0] === undefined) {
    await addDoc(collection(db, "contacts"), {
      first_name,
      last_name,
      email,
      avatar: "",
    });
    alert("Contacto Agregado!😎");
    return;
  }

  const storageRef = ref(storage, `photos/${avatar[0].name}`);
  const task = uploadBytesResumable(storageRef, avatar[0]);

  task.on(
    "state_changed",
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (percentage === 100) return alert("Contacto Agregado!😎");
    },
    (error) => {
      console.error(error.message);
    },
    async () => {
      const avatar = await getDownloadURL(task.snapshot.ref);
      await db.collection("contacts").add({
        first_name,
        last_name,
        email,
        avatar,
      });
    }
  );
}
