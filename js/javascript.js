var input=document.getElementById("input"),
    addBut=document.getElementById("butAdd");
var mainList=document.getElementById("list");
var arrDelte=[],
    arrInput=[],
    arrSave=[],
    arrEdit=[],
    arrVal=[];

function save()
{
    arrVal= Array.from(document.querySelectorAll(".list .item input"));
    localStorage.setItem("data","");
    var items="";
    for(var i=0;i<arrVal.length;i++)
    {
        if(i!=arrVal.length-1)
            items+=arrVal[i].value+",";
        else
            items+=arrVal[i].value;
    }
    items.split(",");
    localStorage.setItem("data",items);
}
function load()
{
    if(localStorage.getItem("data"))
    {
        var it=localStorage.getItem("data").split(",");
        for(var i=0;i<it.length;i++)
        {
            var item=document.createElement('div'),
                inp=document.createElement('input'),
                icon1=document.createElement('i'),
                icon2=document.createElement('i'),
                icon3=document.createElement('i');
            item.classList.add('item');
            icon1.classList.add('fa');
            icon1.classList.add('fa-times');
            icon1.classList.add('del');
            icon2.classList.add('fa');
            icon2.classList.add('fa-check');
            icon2.classList.add('ok');
            icon2.classList.add('hide');
            icon3.classList.add('fa');
            icon3.classList.add('fa-pencil-square-o');
            icon3.classList.add('edit');
            inp.value=it[i];
            inp.setAttribute("disabled","on")
            item.appendChild(inp);
            item.appendChild(icon1);
            item.appendChild(icon2);
            item.appendChild(icon3);
            mainList.appendChild(item);
            arrDelte= Array.from(document.querySelectorAll(".list .item .del"));
            arrSave= Array.from(document.querySelectorAll(".list .item .ok"));
            arrInput= Array.from(document.querySelectorAll(".list .item"));
            arrEdit= Array.from(document.querySelectorAll(".list .item .edit"));
            input.value="";
            
        }
        editAndDel();
        
    }
    
}
window.onload=load;
function editAndDel()
{
    for(var i=0;i<arrDelte.length;i++)
    {  
        arrDelte[i].onclick=function()
        {
            mainList.removeChild(this.parentElement);
            save();
        }
    }
    
   for(var i=0;i<arrInput.length;i++)
    {  
        
            arrInput[i].ondblclick=function()
            {
                if(this.firstElementChild.hasAttribute("disabled"))
               {
                    this.firstElementChild.removeAttribute("disabled");
                    this.children[1].classList.toggle('hide');
                    this.children[2].classList.toggle('hide');
                    this.children[3].classList.toggle('hide');
                    for(var i=0;i<arrSave.length;i++)
                    {  
                        if(!arrSave[i].classList.contains('hide'))
                            arrSave[i].onclick=function()
                            {
                                console.log('gafas');
                                this.parentElement.firstElementChild.setAttribute("disabled","on")
                                this.parentElement.children[1].classList.toggle('hide');
                                this.parentElement.children[2].classList.toggle('hide');
                                this.parentElement.children[3].classList.toggle('hide');
                                save();
                            }
                    }
                    save();
                }
                
            }
        
        
    }


    for(var i=0;i<arrEdit.length;i++)
    {  
        
            arrEdit[i].onclick=function()
            {
                if(this.parentElement.children[0].hasAttribute("disabled"))
                {
                    this.parentElement.children[0].removeAttribute("disabled");
                    this.parentElement.children[1].classList.toggle('hide');
                    this.parentElement.children[2].classList.toggle('hide');
                    this.parentElement.children[3].classList.toggle('hide');
                    for(var i=0;i<arrSave.length;i++)
                    {  
                        if(!arrSave[i].classList.contains('hide'))
                            arrSave[i].onclick=function()
                            {
                                console.log('gafas');
                                this.parentElement.firstElementChild.setAttribute("disabled","on")
                                this.parentElement.children[1].classList.toggle('hide');
                                this.parentElement.children[2].classList.toggle('hide');
                                this.parentElement.children[3].classList.toggle('hide');
                                save();
                            }

                    }
                    save();
                }
                
                
            }
        
        
    }
    
}
function addNewItem()
{
    if(input.value!="")
    {
        
        var item=document.createElement('div'),
            inp=document.createElement('input'),
            icon1=document.createElement('i'),
            icon2=document.createElement('i'),
            icon3=document.createElement('i');
        item.classList.add('item');
        icon1.classList.add('fa');
        icon1.classList.add('fa-times');
        icon1.classList.add('del');
        icon2.classList.add('fa');
        icon2.classList.add('fa-check');
        icon2.classList.add('ok');
        icon2.classList.add('hide');
        icon3.classList.add('fa');
        icon3.classList.add('fa-pencil-square-o');
        icon3.classList.add('edit');
        inp.value=input.value;
        inp.setAttribute("disabled","on")
        item.appendChild(inp);
        item.appendChild(icon1);
        item.appendChild(icon2);
        item.appendChild(icon3);
        mainList.appendChild(item);
        arrDelte= Array.from(document.querySelectorAll(".list .item .del"));
        arrSave= Array.from(document.querySelectorAll(".list .item .ok"));
        arrInput= Array.from(document.querySelectorAll(".list .item"));
        arrEdit= Array.from(document.querySelectorAll(".list .item .edit"));
        input.value="";
        arrVal= Array.from(document.querySelectorAll(".list .item input"));
        save();
    }
    editAndDel();
    
}
addBut.onclick=addNewItem;

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addBut.click();
    }
})
