
// +^[a-zA-Zа-яА-Я]+$
//rgb(255,255, 255)
//^(?:d{1,3}){2}d{1,3}&/

//(d{1,3}\,\s?){2}d{1,3}
// /^\(? [0-9]|([1-9][0-9]{1})|((1[0-9][0-9]|(2[0-4][0-9])|[25[0-5]]))$/
// [0-9]?
// [1-9][0-9]
// [1-2][0-9]
// 1[0-9][0-9] | 2[0-4][0-9] | 25[0-5]
//rgba (255,255,255,1)
//hex #ffffff

document.elementById('form-palitra').addEventListener('submit', function(event){
	event.preventDefault();})