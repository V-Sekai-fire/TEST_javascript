export default class Node extends godot.Node {
	
	constructor() {
		super();
	}
	
	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log('Hello World');
		console.log(godot.Time.get_time_string_from_system())
	}
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
		console.log(1.0 / delta)
	}
}
