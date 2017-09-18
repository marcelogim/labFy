import { ref } from '../config/constants';


export function saveExames (codigo) {
  var exames = ref.child('exames');

  return  exames.child(codigo)
    .set({
      codigo: codigo
    })
    .then(() => codigo)
}
