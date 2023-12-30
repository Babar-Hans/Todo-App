let todoList = [];
        displayItems();

        function addTodo() {
            console.log('running');
            let inputElement = document.querySelector('#todo-input');
            let todoItem = inputElement.value;
            todoList.push(todoItem);
            console.log(todoList);
            inputElement.value = '';
            displayItems();
        }

        function displayItems() {
            let containerElement = document.querySelector('.todo-container')
            let newHtml = '';

            for (let i = 0; i < todoList.length; i++) {
                newHtml += `
                <div>
                    <span>${todoList[i]}</span>
                    <button onclick="deleteItem(${i})">Delete</button>
                </div>
                `;
            }

            containerElement.innerHTML = newHtml;
           
        }
        

        function deleteItem(index) {
            todoList.splice(index, 1);
            displayItems();
        }

