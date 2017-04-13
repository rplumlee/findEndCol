var findEndCol = function(cols, selector, div){

    var nextDivs = [];
    var endCol;

    for( i = 0; i < (cols); i++ ){
        nextDiv = $(selector)[div.index(selector) + i];
        nextDivs.push(nextDiv);
    }

    for (var i = 0; i < nextDivs.length; i++) {

        var current = $(nextDivs[i]);
        var currentIndex = current.index(selector) + 1;

        if(!nextDivs[i]){
            endCol = $(nextDivs[i - 1]);
            break;
        }
        else if(currentIndex % cols === 0){
            endCol = current;
            break;
        }
    }

    return endCol;
};

