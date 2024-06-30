function onDragStart(event){
    event.dataTransfer.setData('text/plain',event.target.id);
    event.currentTarget.style.backgroundColor='#04eeff';
    event.currentTarget.style.color='#fe2da3';
}

function onDragOver(event)
{
    event.preventDefault();
}

function onDrop(event)
{
    const id=event.dataTransfer.getData('text');
    const draggableElement=document.getElementById(id);
    const droparea=event.target;
    droparea.appendChild(draggableElement);
    event.dataTransfer.clearData();
}


