function Libretto()
{
    this.renderVoto = function(voto){//voto--> grade che avevamo creato prima
    var li = document.createElement('li');
    var list = document.querySelector('#libretto');
    list.appendChild(li) //per avere il libretto nel DOM 
    li.innerHTML = voto.data + " " + voto.voto + " " + voto.materia;
    li.className = 'list-group-item';//per rendere la visualizzazione più carina-->per ogni voto aggiunto sarà la stessa codifica
  }
  
  if(localStorage.getItem('db')){
    this.array = JSON.parse(localStorage.getItem('db'));    
    for(var i=0;i<this.array.length;i++)
      {
        this.renderVoto(this.array[i]);
      }
  }else {
    this.array = [];
  }
  
  this.addVoto = function(materia,voto,data)
  {
    var grade = {
      materia:materia,
      voto:voto,
      data:data
    }
    //console.log(grade);
    this.array.push(grade);
    this.renderVoto(grade);
    this.saveVoto();
    
  }

  this.saveVoto = function(){//salvare in locale i dati di cui ho bisogno (fil json salvato dal browser accessibile da tutte le pagine web)
      localStorage.setItem('db',JSON.stringify(this.array));
  }
}

var libretto =new Libretto(); 

var button = document.querySelector('#save');
button.addEventListener('click', function(e){
  e.preventDefault();
  e.stopImmediatePropagation();
  var materia = document.querySelector('input[name=materia]').value;
  var voto = document.querySelector('input[name=voto]').value;
  var data = document.querySelector('input[name=data]').value;
  
  if(data === "")
    {
      data = new Date();
    }
  
  libretto.addVoto(materia, voto, data);
  $('#mymodal').modal('hide');
  
  
  
});
/*
libretto.addVoto('italiano',6, new Date());
libretto.addVoto('matematica',3, new Date());
*/



