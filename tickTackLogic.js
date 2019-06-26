var app = angular.module('myApp', []);
app.controller('logicController', function($scope) {
    $scope.inputArr = ['','','','','','','','',''];
    $scope.ininialVal = 'O';
    $scope.letsPlay = ()=>{
        $scope.playable = true;
    }
    
    $scope.addInput = (index)=>{
        $scope.playable = true;
        if($scope.ininialVal == 'O'){
            $scope.ininialVal = 'X';
        }else if($scope.ininialVal == 'X'){
            $scope.ininialVal = 'O';
        }
        $scope.inputArr[index-1] = $scope.ininialVal;
        $scope.win = checkWin($scope.inputArr);
        console.log($scope.inputArr);
        console.log($scope.win);
    }

});

function checkWin(arr){
    return (checkHorizontal(arr));
}

function checkHorizontal(arr){
    if(arr[0]==arr[1]==arr[2]=='X' || arr[0]==arr[1]==arr[2]=='O'){
        return true;
    }else if(arr[3]==arr[4]==arr[5]=='X' ||  arr[3]==arr[4]==arr[5]=='O'){
        return true;
    }else if(arr[6]==arr[7]==arr[8]=='X' || arr[6]==arr[7]==arr[8]=='O'){
        return true;
    }else{
        return false;
    }
}

function checkVertical(arr){
    if(arr[0]==arr[3]==arr[6]=='X' || arr[0]==arr[3]==arr[6]=='O'){
        return true;
    }else if(arr[1]==arr[4]==arr[7]=='X' || arr[1]==arr[4]==arr[7]=='O'){
        return true;
    }else if(arr[2]==arr[5]==arr[8]=='X' || arr[2]==arr[5]==arr[8]=='O'){
        return true;
    }else{
        return false;
    }
}

function checkDigonal(arr){
    if(arr[0]==arr[4]==arr[8]=='X' || arr[0]==arr[4]==arr[8]=='O'){
        return true;
    }else if(arr[2]==arr[4]==arr[6]=='X' || arr[2]==arr[4]==arr[6]=='O'){
        return true;
    }else{
        return false;
    }
}