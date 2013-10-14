<script type="text/javascript">
		// (function () {

		//   alert('hello!');
		//   var shoe = new Task({ color: 'sparkly' });
		//   console.log('check it:', shoe.get('color'));

		// })();
	

		(function () {

		  

		  console.log(taskrb);

		  // Instantiate a new, empty collection of tasks
		  var tasks = new Tasks();

		  // Create a new list view for our collection.
		  // We tell it exactly where we want it to render (#task-list).
		  var taskListView = new TaskListView({
		    collection: tasks,
		    el: '#task-list'
		  });

		  // Add initial tasks AFTER we create our taskListView. This is needed so that the
		  // list view can listen for the collection's 'add' events.
		  tasks.add([
		    { name: 'create a todo list' },
		    { name: 'add a second task', complete: true },
		    { name: 'complete list' }
		  ]);

		  tasks.add( taskrb );

		  // Now we create a view to handle user input. This view allows the user to create new tasks.
		  // Because the input html is already on the page, we tell this view to just use it (as opposed
		  // to generating the html via an underscore template).
		  var inputView = new TaskInputView({
		    collection: tasks,
		    el: 'form.new-task'
		  });

		})();


	</script>