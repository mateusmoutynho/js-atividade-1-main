const original = document.querySelector('#original')
const caracteres = document.querySelector('#caracteres')
const efeito = document.querySelector('#efeito')
const mod = document.querySelector('#mod')


original.addEventListener('keyup', function() {
  caracteres.innerHTML = original.value.length

  if (efeito.value=="uppercase"){
  
    mod.value = original.value.toUpperCase();
}

else {
  
    mod.value = original.value.toLowerCase();
}

})




