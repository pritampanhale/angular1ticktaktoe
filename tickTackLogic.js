var parentElement;
var app = angular.module('myApp', []);
app.controller('logicController', function ($scope) {
    var elementArry = new Array();
    $scope.inputArr = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    $scope.ininialVal = 'O';
    $scope.letsPlay = () => {
        $scope.playable = true;
    }
    $scope.resetGrid = () =>{
        if(parentElement){
            var nodes = parentElement.children();
            for(var i = 0 ;i<nodes.length ; i++ ){
                var node = nodes[i];
                if(node.type == "button"){
                    node.className = "button";
                }
            }
        }
    };

    $scope.addInput = (event, index) => {
        
        $scope.playable = true;
        if ($scope.ininialVal == 'O') {
            $scope.ininialVal = 'X';
        } else if ($scope.ininialVal == 'X') {
            $scope.ininialVal = 'O';
        }
        $scope.inputArr[index - 1] = $scope.ininialVal;
        $scope.win = checkWin($scope.inputArr, $scope.ininialVal);
        var element = angular.element(event.target);
        if(!parentElement){
            parentElement = element.parent();
        }
    }

});

function checkWin(arr, initval) {
    if(checkHorizontal(arr, 'X') || checkHorizontal(arr, 'O') ||
        checkVertical(arr, 'X') || checkVertical(arr, 'O') ||
        checkDigonal(arr, 'X') || checkDigonal(arr, 'O') ){
        //alert(initval + "  Wins !!!");
        return true;
    }else{
        return false;
    }
}

function checkHorizontal(arr, xory) {
    if (arr[0] == xory && arr[1] == xory && arr[2] == xory) {
        displayResultGrid(parentElement, [0,1,2]);
        return true;
    } else if (arr[3] == xory && arr[4] == xory && arr[5] == xory) {
        displayResultGrid(parentElement, [3,4,5]);
        return true;
    } else if (arr[6] == xory && arr[7] == xory && arr[8] == xory) {
        displayResultGrid(parentElement, [6,7,8]);
        return true;
    } else {
        return false;
    }
}

function checkVertical(arr, xory) {
    if (arr[0] == xory && arr[3] == xory && arr[6] == xory) {
        displayResultGrid(parentElement, [0,3,6]);
        return true;
    } else if (arr[1] == xory && arr[4] == xory && arr[7] == xory) {
        displayResultGrid(parentElement, [1,4,7]);
        return true;
    } else if (arr[2] == xory && arr[5] == xory && arr[8] == xory) {
        displayResultGrid(parentElement, [2,5,8]);
        return true;
    } else {
        return false;
    }
}

function checkDigonal(arr, xory) {
    if (arr[0] == xory && arr[4] == xory && arr[8] == xory) {
        displayResultGrid(parentElement, [1,4,8]);
        return true;
    } else if (arr[2] == xory && arr[4] == xory && arr[6] == xory) {
        displayResultGrid(parentElement, [2,4,6]);
        return true;
    } else {
        return false;
    }
}

function displayResultGrid(parentNode, positions){
    console.log(parentNode);
    var nodes = parentNode.children();
    for(var i = 0 ;i<nodes.length ; i++ ){
        var node = nodes[i];
        if(node.type == "button" && positions.includes(i)){
            node.className = "win-button";
        }
    }
        
}

function resetGrid(){
    if(parentElement){
        var nodes = parentElement.children();
        for(var i = 0 ;i<nodes.length ; i++ ){
            var node = nodes[i];
            if(node.type == "button"){
                node.className = "button";
            }
        }
    }
}
