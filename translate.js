$(document).ready(function() {
	function ToDo(stuff){
		this.toDoItem = stuff;

		this.ar = 
		[
			{en: "hello", tran: "你好"},
			{en: "mouse", tran: "滑鼠"},
			{en: "notebook", tran: "筆電"},
			{en: "water", tran: "水"},
			{en: "drink", tran: "飲料"}
		];

		for (var item in this.ar){
			//console.log(this.ar[item].en);
			if(this.toDoItem === this.ar[item].en){
				this.toDoItem = this.ar[item].tran;
				console.log(this.ar[item].tran);
			}
		}
	}

	var ToDoViewModel = function(){
		this.toDoItems = ko.observableArray();

		this.addToDoItem = function(){
			this.toDoItems.push(new ToDo($('.txt').val()));
		}
	}

	ko.applyBindings(ToDoViewModel);
});