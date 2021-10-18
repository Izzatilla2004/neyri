let countInput = document.querySelectorAll('.count-input1');
let addButton = document.querySelectorAll('.add1');
let subButton = document.querySelectorAll('.sub1');

for (let i = 0; i < countInput.length; i++) {
    const thisCountInput = countInput[i];
    const thisAddButton = addButton[i];
    const thisSubButton = subButton[i];
    let result = 1;
    thisAddButton.addEventListener('click', function () {
        if (result < 100) {
            result++;
            thisCountInput.value = result;   
        }
    })
    thisSubButton.addEventListener('click', function () {
        if (result > 1) {
            result--;
            thisCountInput.value = result;
        }
    })
}


let headerSearch = document.querySelector(".header-search");
    headerSearch.addEventListener('click', function () {
        headerSearch.classList.add("active")
    })
        
// $(document).ready(function() {

// 	/* This is basic - uses default settings */
	
// 	$("a#single_image").fancybox();
	
// 	/* Using custom settings */
	
// 	$("a#inline").fancybox({
// 		'hideOnContentClick': true
// 	});

// 	/* Apply fancybox to multiple items */
	
// 	$("a.group").fancybox({
// 		'transitionIn'	:	'elastic',
// 		'transitionOut'	:	'elastic',
// 		'speedIn'		:	600, 
// 		'speedOut'		:	200, 
// 		'overlayShow'	:	false
// 	});
	
// });

