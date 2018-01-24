notes = [];

function sectionUpdate(section) {
// percorrer cada item da lista de notas, criar o html de cada nota e colocar na variável
// criar uma variável que vai guardar o HTML de todas as notas que devem aparecer na tela
// colocar o html de todo mundo dentro da seção

var innerhtml = "";

for (index=0; index < notes.length; index++) {
    if (notes[index].editando) {
        //template input + textarea
        innerhtml += '<form class="note">'+
                    '<input class="note__title" type="text" name="title" value="'+notes[index].title+'" placeholder="Título"/>'+
                    '<textarea class="note__body" name="body" rows="5" placeholder="Criar uma nota...">'+notes[index].textarea+'</textarea>'+
                    '<button class="note__control" type="button" onclick="adicionarNota(this.form,this.form.parentElement,this.form.title,this.form.body,'+index+')">'+
                    'Concluído</button>'+
                '</form>';
    }
    else {
        innerhtml += '<form class="note" onclick="editarFormulario(this.parentElement,'+index+')">'+
                    '<button class="note__control" type="button" onClick="removerNota(this.form.parentElement,'+index+')">x</button>'+
                    '<h1 class="note__title">'+notes[index].title+'</h1>'+
                    '<p class="note__body)">'+notes[index].textarea+'</p>'+
                '</form>';     
    }
}

section.innerHTML = innerhtml;

}

function editarFormulario(section,index) {
// identificar qual a nota que está sendo editada e setar editando = true
if (index != null) {
notes[index].editando = true;
// atualiza tela
sectionUpdate(section);

}
}

function removerNota(section,index) {
//remover a nota do array
notes.splice(index,1);

//atualizar tela
sectionUpdate(section);
}

function adicionarNota(form,section,title,textarea,index) {
// verificiar se a nota está sendo editada
if (index != null) { // ou if (notes[index]))
    // identificar a nota sendo editada
     //trocar título e o texto dela
    notes[index].title = title.value;
    notes[index].textarea = textarea.value;
    notes[index].editando = false;
   
    //chamar atualiza seção
    sectionUpdate(section);

} else {
// criar um objeto nota
var note ={
    title: title.value,
    textarea: textarea.value,
};
  
// adicionar nota dentro da lista
notes.push(note);
console.log(notes);

// atualizar a seção de notas
sectionUpdate(section);

//limpar o formulário
form.reset();
}
}