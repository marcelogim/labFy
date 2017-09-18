import { ref } from '../config/constants';


export function saveExames (codigo, formDataInclExames) {
  var exames = ref.child('exames');

  return  exames.child(codigo)
    .set({
      formDataInclExames
    })
    .then(() => codigo)
}
