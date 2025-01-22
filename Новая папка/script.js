

document.getElementById('form-palitra').addEventListener('submit', function(event)
{
	event.preventDefault();

const nameInput = document.getElementById('name');
const typeInput = document.getElementById('type');
const codeInput = document.getElementById('code');

const nameError = document.getElementById('nameError');
const codeError = document.getElementById('codeError');

const name = nameInput.value.trim();
const type = typeInput.value.trim();
let code = codeInput.value.trim();

const colorList = document.getElementById('palitra');
let isValid = true;
let isUnique = true;
const children = colorList.children;

for (let i=0; i <children.length; i++)
{
	if(children[i].dataset.name.toLowerCase()=== name.toLowerCase())
	{
		isUnique = false;
	}
	else if(!isUnique)
	{
		nameError.textContent('нахвание должно быть уникальным')
		isValid = false;
	}
	else 
	{	
			nameError.style.display = 'none';
	}

}

let tName = /^[a-zA-Zа-яА-Я]+$/;

if(!tName.test(name))
{
	nameError.textContent = 'только буквы';
	nameError.style.display = 'block';
	isValid = false;
}
else 
{
	nameError.style.display = 'none';
}

let tRGB = /^(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])/;
console.log(tRGB.test('122'));
console.log(tRGB.test('999'));
let tRGBA = /^(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(\d{1.2}|1\d{2}|2[0-4]\d|25[0-5])\s*,\s*(0|0.\d{1,3}|1)$/;
let tHEX =  /^#[a-fA-F0-9]{6}$/;

if (type =='RGB' && !tRGB.test(codeError))
{
	codeError.textContent = 'от 0 до 255'
	codeError.style.display ='block';
	isValid = false;
}
else if(type =='RGBA' && !tRGBA.test(codeError))
{
	codeError.textContent = 'от 0 до 255'
	codeError.style.display ='block';
	isValid = false;
}
else if(type =='HEX' && !tRGBA.test(codeError))
{
	codeError.textContent = 'от 0 до 255'
	codeError.style.display ='block';
	isValid = false;
}
else
{
	nameError.style.display = 'none';
}

if(isValid)
{
	const div = document.createElement('div');
	div.dataset.name = name;
	div.classList.add('color-box');

	if(type == 'HEX')
	{
		div.style.backgroundColor = code;
	}
	else if(tRGB === 'RGB' || tRGBA === 'RGBA' )
	{
		div.style.backgroundColor = type.toLowerCase()+ '(${code})';
	}
	div.innerHTML = '${name}<br>${code}';
	colorList.appendChild(div);
	nameInput.value ='';
	codeInput.value ='';
}
})
