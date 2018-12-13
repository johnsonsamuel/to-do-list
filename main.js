//JavaScript

//storing the data
    var obj = {
    taskListArr : [],
    taskCompletedArr : []
    };
    
//user clicked add button
    var enter = document.getElementById("userInput");
    enter.addEventListener("keyup", 
    function(event)
    {
        event.preventDefault();
        if(event.keyCode==13)
        {
            document.getElementById('addTaskButton').click();
        }
    } );
    
    document.getElementById("addTaskButton").addEventListener('click', function(){
    var inputValue = document.getElementById("userInput").value;
    if(inputValue)
    {
     addTaskFunc(inputValue);
     document.getElementById("userInput").value ="";
     obj.taskListArr.push(inputValue);
     dataStorageUpdt();
    }
    
    function dataStorageUpdt()
    {
     console.log(obj);
    }
    
    //delete button onclick function
    function deleteTask()
    {
     var child = this.parentNode.parentNode;
     var parent = child.parentNode;
     parent.removeChild(child);
     var id= parent.id;
     var value = child.innerText;
     if (id == "taskList")
      {
       obj.taskListArr.splice(obj.taskListArr.indexOf(value), 1);
      }
     else 
      {
      obj.taskCompletedArr.splice(obj.taskCompletedArr.indexOf(value), 1);
      } 
     dataStorageUpdt();
    }
      
    //completed button onclick function
    function completeTask()
    {
      var butId=this.id;
      var child = this.parentNode.parentNode;
      var parent = child.parentNode;
      var ID = parent.id;
      var value = child.innerText;
      if (ID == "taskList")
      {
       // to move to completed
       obj.taskListArr.splice(obj.taskListArr.indexOf(value), 1);
       obj.taskCompletedArr.push(value);
       this.innerHTML="&#10227;";
      }
     else 
      {
       //to be sent to pending again
       obj.taskCompletedArr.splice(obj.taskCompletedArr.indexOf(value), 1);
       obj.taskListArr.push(value);
       this.innerHTML="&#10004";
      }
    
    dataStorageUpdt();
      var target = (ID=='taskList')?document.getElementById('taskListCompleted'):document.getElementById('taskList');
      parent.removeChild(child);
      target.insertBefore(child, target.childNodes[0]);
    }
    
    
    //edit button onclick function
    function editTask()
    {
    var parent = this.parentNode;
    var edited = prompt ("Enter the new title..");
    parent.firstChild.innerHTML=edited;
    }
    
    //add the task and button function
    function addTaskFunc(inputValue)
    {
     var task=document.createElement('li');
     var taskDiv=document.createElement('div');
     taskDiv.innerText=inputValue;
     taskDiv.classList.add('taskDivClass')
    
    
     var buttonsCont = document.createElement('div');
     buttonsCont.classList.add('buttonContClass');
   
     var completed = document.createElement('button');
     completed.classList.add('completedButton')
     
     var edit = document.createElement('button');
     edit.classList.add('editButton')
     
     var deleteIt = document.createElement('button');
     deleteIt.classList.add('deleteButton')
     
      deleteIt.innerHTML="&#10006";
      completed.innerHTML="&#10004" ;
      edit.innerHTML="&#9998";
     
     buttonsCont.appendChild(taskDiv);
     buttonsCont.appendChild(deleteIt);
     buttonsCont.appendChild(completed);
     buttonsCont.appendChild(edit);
     task.appendChild(buttonsCont);
    
     var list = document.getElementById("taskList");
     list.insertBefore(task,list.childNodes[0]);
     document.getElementById("userInput").focus();
        
     //eventlisteners for buttons
     deleteIt.addEventListener('click', deleteTask);
     completed.addEventListener('click', completeTask);
     edit.addEventListener('click', editTask);
    }
    });
