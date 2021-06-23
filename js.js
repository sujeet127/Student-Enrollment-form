function reset(){
  
  
document.querySelector('input').value="";
document.querySelector('#email ').value=null;
document.querySelector('#website ').value=null;
document.querySelector('#file ').value=null;

document.querySelector('#male ').checked=false;
document.querySelector('#female ').checked=false;

document.querySelector('#java').checked=false;
document.querySelector('#css ').checked=false;
document.querySelector('#html').checked=false;
document.getElementById('image').style.display="none";
}
function  send()
{ 
    var skills = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < skills.length; i++) {
      if (skills[i].checked) {
        txt = txt + skills[i].value + " ";
      }
    }
    
  

    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name=gender]:checked').value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var file = window.localStorage.getItem('image');
    
    
    
//    $('.skills').click(function(){
//     var text="";
//     $('.skills:checked').each(function(){
//         text+=$(this).val()+',';
//     });
//     text=text.substring(0,text.length-1);
//     $('#demo').val(text);


//   });

        

    
    var node=document.createElement('tr');
    var tabledata1=document.createElement('td');
    var tabledata2=document.createElement('td');

    var para1=document.createElement('h4');
    var para2=document.createElement('p');
    var para3=document.createElement('p');
    var para4=document.createElement('p');
    var para5=document.createElement('p');

    para1.innerText=name;
    para2.innerText=gender;
    para3.innerText=email;
    para4.innerText=website;
    para5.innerText=txt;
    
    
    tabledata1.append(para1);
    tabledata1.append(para2);
    tabledata1.append(para3);
    tabledata1.append(para4);
    tabledata1.append(para5);


    var img1=document.createElement('img');
    img1.setAttribute('width', "150px");
    img1.setAttribute('height', "150px");
    img1.setAttribute('class','image1');
    img1.setAttribute('src',file);
    // img1.innerText=file;
    tabledata2.append(img1);
    node.appendChild(tabledata1);
    node.appendChild(tabledata2);

    
    document.getElementById('tbodyId').appendChild(node);
    
 

   
}


