react todo list

- functionality
  - add new task
  - filter tasks into all active and done
  - delete tasks


- components
  - App
    - maintains the state
      - state contains todos, page
    - renders the addtask, nav and itemlist components
  - AddTaskForm
    - contains the form which we can submit to add new task.
  - Nav
    - nav for all, active and done todos
  - ItemList
    - todo item list
    - maps on the items received as prop and returns an item component.
  - Item
    - todo item
    - contains
      - checkbox
      - label
      - delete button
        - used to delete the todo item.