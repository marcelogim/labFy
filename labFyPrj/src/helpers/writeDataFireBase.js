import { ref } from '../config/constants'


export function saveExames (codigo) {
  var exames = ref.child('exames');
  var key = exames.child(codigo);
  return key.push('exames/${codigo}')
    .set({
      codigo: codigo
    })
    .then(() => codigo)
}
