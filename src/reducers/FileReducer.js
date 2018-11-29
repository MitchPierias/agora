// Modules
import _ from 'lodash';
// Types
import {
	UPDATE_FILE,
	ADD_FILES,
	REMOVE_FILE,
	REMOVE_ALL_FILES,
	CONVERT_PROGRESS,
	CONVERT_COMPLETE
} from '../actions/types';
// Interface
interface FileProps {
	hash: string,
	label: string,
	name: string,
	path: string,
	directory: string,
	type: string,
	format: string,
	output: string,
	complete: boolean,
	progress: number
}
// Globals
const INITIAL_STATE = {
	"fnjasfnsjii": {
		hash:"fnjasfnsjii",
		label:"Movie Name",
		name:"test-moviename.mp4",
		path:"/User/",
		directory:"/User/",
		type:"movie",
		format:"mp4",
		output:"",
		complete:false,
		progress:0
	},
	"jngkasfnad": {
		hash:"jngkasfnad",
		label:"Super extra long movie name here that",
		name:"test-movie-name.mp4",
		path:"/User/fasgadfgadfgdfg/fgdagfdgad/gfdgdfgfd/gfda/test-movie-name.mp4",
		directory:"/User/",
		type:"movie",
		format:"mp4",
		output:"",
		complete:false,
		progress:23
	}
};
const KEY_ARGUMENT_ID = 'hash';

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_FILE:
			return { ...state, [action.payload[KEY_ARGUMENT_ID]]: action.payload };
		case ADD_FILES:
			return { ...state, ..._.mapKeys(action.payload, KEY_ARGUMENT_ID)};
		case REMOVE_FILE:
			return _.omit(state, action.payload[KEY_ARGUMENT_ID]);
		case REMOVE_ALL_FILES:
			return INITIAL_STATE;
		case CONVERT_PROGRESS:
			return { ...state, [action.payload[KEY_ARGUMENT_ID]]: action.payload };
		case CONVERT_COMPLETE:
			return { ...state, [action.payload[KEY_ARGUMENT_ID]]: { ...action.payload, complete:true } };
		default:
			return state;
	}
}