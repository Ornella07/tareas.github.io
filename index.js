// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');


// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');
//funcion para setear la fecha,

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });//modificamos el text content. usando date.toLocalStrin le decimos que queremos el resultado en español. y el dia, en resultado numerico
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });//el dia de la semana con texto long, o sea se ve completo, 
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });//El mes le pasamos short, le pasamos una parte del texto del mes
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });//en año pasamos en numeros

};


//evento de agregar una nueva tarea
const addNewTask = event => {
    event.preventDefault();//con el preventDefault evitamos que el submit nos lleve a otra pagina
    const { value } = event.target.taskText;//del evento tomamos el value del taskText

    if(!value) return;//si el usuario no ingreso nada, y quiera agregar una, no haga nada;
    const task = document.createElement('div');//creamos un elemento de tipo div en task
    task.classList.add('task', 'roundBorder');//le creamos dos clases la clase task y round border
    task.addEventListener('click', changeTaskState)//le agregamos un nivel listener llamamos a la funcion changeTaskState cuando damos click
    task.textContent = value;// y dentro del elemento ponemos el texto que ingreso el usuario
    tasksContainer.prepend(task);//agregamos al taxtContainer prepend(lo agregamos al principio de la lista)
    event.target.reset();//por ultimo reseteamos la form aoara que quede vacio el input

};

//
const changeTaskState = event => {
    event.target.classList.toggle('done');//si no tiene la clase done se la eagregamos y si tiene se la sacamos
};

//order es la funcion que vamos a usar para ordenar las tareas
const order = () => {
    const done = [];//Por un lado tenemos las tareas hechas
    const toDo = [];//tareas sin ahcer
    tasksContainer.childNodes.forEach( el => {//ingresamos a los hijos de task conteiner, con EL podemos acceder a cada elemento
        el.classList.contains('done') ? done.push(el) : toDo.push(el)// pregunta si el elemento esta dan entonces le agregamos a done, si no tiene la clase done entonces va al array toDOo y lo agrega en toDo 
    })
    return [...toDo, ...done]; //devuelve un array primero del toDo y luego del done, para que las tareas por hacer queden primero
    
}
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))//llamamos a order y vamos a iterar el array cada elemento y lo agregamos uno por uno taskContainer-
}






//serDate() LLAma a la funcion
setDate();