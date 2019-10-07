// Author: Vladislav Tereshkin

// Task 1

    function splitAndMerge(str, sp) {
    	var words_arr = str.split(' ');
    	var new_arr = [];

    	for (var i = 0; i < words_arr.length; i++) {
    		new_arr[i] = words_arr[i].split('').join(sp);
    	}

    	return new_arr.join(' ');
    }

// Task 2
    
    function convert(obj) {
    	var common_arr = [];

    	for (key in obj) {
    		var current_arr = [];

    		current_arr.push(key, obj[key]);
    		common_arr.push(current_arr);
    	}

    	return common_arr;
    }

// Task 3

    function toCamelCase(str) {
    	var words_arr = str.split('_').join(' ').split('-').join(' ').split(' ');
    	var new_arr = [];
    	var first_word_flag = 0;

    	for(var i = 0; i < words_arr.length; i++) {
    		if (words_arr[i] != '') {

    			if (first_word_flag == 0) {
    				new_arr[i] = words_arr[i];
    				first_word_flag = 1;
    				continue;
    			}

    			new_arr[i] = words_arr[i][0].toUpperCase() + words_arr[i].slice(1);
    		}
    	}

    	return new_arr.join('');
    }

// Task 4

    function reverseTheWords(str) {
    	var words_arr = str.split(' ');

    	for(var i = 0; i < words_arr.length; i++) {
    		words_arr[i] = words_arr[i].split('').reverse().join('');
    	}

    	return words_arr.join(' ');
    }

// Task 5

    function stringExpansion(str) {
    	var new_str = '';
    	var num_counter = 0;

    	for (var i=0; i < str.length; i++) {
            if ( isFinite(str[i]) ) { num_counter++; }

    		if ( isFinite(str[i]) && (!isFinite(str[i+1]) && str[i+1] != undefined ) ) {
    			new_str += str[i+1].repeat( str[i] );
    		}
    	}

    	if (num_counter == 0) { return str; }

    	return new_str;
    }

// Task 6

    function largest() {
    	var largest_num = arguments[0];

    	for(var i = 1; i < arguments.length; i++) {
    		if (arguments[i] > largest_num) {
    			largest_num = arguments[i];
    		}
    	}

    	return largest_num;
    }

    function smallest() {
    	var smallest_num = arguments[0];

    	for(var i = 1; i < arguments.length; i++) {
    		if (arguments[i] < smallest_num) {
    			smallest_num = arguments[i];
    		}
    	}

    	return smallest_num;
    }

// Task 7

    function transform(arr) {
    	var new_arr = [];

    	for(let i = 0; i < arr.length; i++) {
    		(function(x) {
    			return new_arr[x] = function() { return arr[x]; }
    		}(i));
    	}

    	return new_arr;
    }

	var baseArray = [10, 20, 30, 40, 50];
	var newArray = transform(baseArray);

// Task 8

    function sum() {
    	if ( arguments.length != 0) {
    		if ( arguments.length == 1 ) {
    			return arguments[0]; 
    		} else {
    			arguments[arguments.length - 2] += arguments[arguments.length - 1];
        		arguments.length--;
    			return sum.apply(null, arguments);
    		}
    	}
    }

// Task 9

    function countDown(steps) {
    	for(var i = 0; i < steps+1; i++) {
    		(function(x) {
    			setTimeout( function() { console.log(x); }, (steps - x)*1000);
    		}(i));
    	}

    }

// Task 10

    Function.prototype.myBind = function (context) {
        var that = this;
        return function () {
            return that.apply(context, arguments);
        }
    }

    function addPropToNumber(number) { return this.prop + number; }

	var bound = addPropToNumber.myBind({ prop: 9 });

// Performance of functions

    (function() {

        console.log('%c%s', 'color:green;', '~Task 1~');

        console.log( 'splitAndMerge("My name is John"," ") == "M y n a m e i s J o h n"');
        console.log( splitAndMerge("My name is John"," ") == "M y n a m e i s J o h n" );

        console.log( 'splitAndMerge("Hello World!",",") == "H,e,l,l,o W,o,r,l,d,!"');
        console.log( splitAndMerge("Hello World!",",") == "H,e,l,l,o W,o,r,l,d,!" );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 2~');

        console.log( 'convert( {name: "Jeremy", age: 24, role: "Software Engineer"} ) // [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]' );
        console.log( '%o', convert( {name: "Jeremy", age: 24, role: "Software Engineer"} ) );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 3~');

        console.log( 'toCamelCase("the-stealth-warrior") == "theStealthWarrior"' );
        console.log( toCamelCase("the-stealth-warrior") == "theStealthWarrior" );

        console.log( 'toCamelCase("The_Stealth_Warrior") == "TheStealthWarrior"' );
        console.log( toCamelCase("The_Stealth_Warrior") == "TheStealthWarrior" );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 4~');

        console.log( 'reverseTheWords(" A fun little challenge! ") == " A nuf elttil !egnellahc "' );
        console.log( reverseTheWords(" A fun little challenge! ") == " A nuf elttil !egnellahc " );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 5~');

        console.log( "stringExpansion('3D2a5d2f') == 'DDDaadddddff'" );
        console.log( stringExpansion('3D2a5d2f') == 'DDDaadddddff' );

        console.log( "stringExpansion('3d332f2a') == 'dddffaa'" );
        console.log( stringExpansion('3d332f2a') == 'dddffaa' );

        console.log( "stringExpansion('abcde') == 'abcde'" );
        console.log( stringExpansion('abcde') == 'abcde' );

        console.log( "stringExpansion('') == ''" );
        console.log( stringExpansion('') == '' );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 6~');

        console.log( "largest(2, 0.1, -5, 100, 3)" );
        console.log( largest(2, 0.1, -5, 100, 3) == 100 );

        console.log( "smallest(2, 0.1, -5, 100, 3)" );
        console.log( smallest(2, 0.1, -5, 100, 3) == -5 );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 7~');

        console.log( "newArray[3]() == 40" );
        console.log( newArray[3]() == 40 );

        console.log( "newArray[4]() == 50" );
        console.log( newArray[4]() == 50 );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 8~');

        console.log( "sum(1,3,5,7) == 16" );
        console.log( sum(1,3,5,7) == 16 );

        console.log('\n');

        console.log('%c%s', 'color:green;', '~Task 9~');

        console.log( "countDown(3)" );
        console.log( countDown(3) );

        setTimeout( function() {
        	console.log('\n');
        	console.log('%c%s', 'color:green;', '~Task 10~');

        	console.log( 'bound(1) == 10' );
        	console.log( bound(1) == 10 );

        }, 4000);

    }());