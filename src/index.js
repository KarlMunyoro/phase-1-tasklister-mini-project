document.addEventListener("DOMContentLoaded", (e) => {
  let input=document.querySelector("input[type='text']");
  let list = document.getElementById("tasks");
  let form = document.getElementById("create-task-form")

  const handlesubmission = function(){
    const text = document.createElement("li");
    text.textContent = input.value;
    list.append(text);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    handlesubmission();
  })
});


