import { db } from './FirebaseConfig'

export function enableModeOffline() {
  db.enablePersistence().catch(function (err) {
    if (err.code == 'failed-precondition') {
      console.log(
        'Múltiples TABS abiertas, solo se puede habilitar la persistencia un TAB a la vez'
      )
    } else if (err.code == 'unimplemented') {
      console.log(
        'Este navegador no soporta todas las características que se requiere para habilitar la persistencia'
      )
    }
  })
  console.log('Persistencia habilitada')
}
