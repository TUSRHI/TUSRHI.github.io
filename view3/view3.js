'use strict';

angular.module('myApp.view3', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }])

  .controller('View3Ctrl', [function () {

  }])
  .directive('spot', function () {
    return {
      restrict: 'E',
      templateUrl: '/view3/spot.html'
    }

  })
  .controller('battleludo', function ($scope, $timeout) {

    $scope.board = [
      "yf", "yf", "yf", "yf", "blank", "gbr", "rf", "yf", "bf", "gf", "rf", "ybl", "takeoff", "bf",
      "bf", "bf", "bf", "yf", "yf", "yf", "yf", "gbr", "gf", "rf", "yf", "bf", "gf", "rf", "yf", "ybl", "bf", "bf",
      "bf", "bf", "yf", "yf", "yf", "yf", "bf", "bf", "blank", "blank", "bf", "blank", "blank", "bf", "bf", "bf", "bf", "bf", "bf", "yf", "yf", "yf", "yf", "yf", "yf", "blank", "blank", "bf", "blank", "blank", "gf", "gf", "bf", "bf", "bf", "bf", "takeoff", "rbr", "yf", "bf", "gr", "rf", "blank", "blank", "bf", "blank", "blank", "rf", "ry", "bf", "gf", "rbl", "blank", "rbr", "rf", "yf", "bf", "gf", "gr", "blank", "blank", "bf", "blank", "blank", "ry", "yf", "bf", "gf", "rf", "rbl", "gf", "gf", "blank", "blank", "blank", "blank", "blank", "blank", "bf", "blank", "blank", "blank", "blank", "blank", "blank", "yf", "yf", "bf", "bf", "blank", "blank", "blank", "blank", "blank", "ybmid", "bf", "gbmid", "blank", "blank", "blank", "blank", "blank", "bf", "bf", "yf", "yf", "yf", "yf", "yf", "yf", "yf", "yf", "colorful", "gf", "gf", "gf", "gf", "gf", "gf", "gf", "gf", "rf", "rf", "blank", "blank", "blank", "blank", "blank", "rymid", "rf", "grmid", "blank", "blank", "blank", "blank", "blank", "rf", "rf", "gf", "gf", "blank", "blank", "blank", "blank", "blank", "blank", "rf", "blank", "blank", "blank", "blank", "blank", "blank", "yf", "yf", "btr", "bf", "yf", "rf", "gf", "gb", "blank", "blank", "rf", "blank", "blank", "yb", "yf", "rf", "gf", "bf", "btl", "blank", "btr", "yf", "rf", "gb", "bf", "blank", "blank", "rf", "blank", "blank", "bf", "yb", "rf", "gf", "btl", "takeoff", "rf", "rf", "rf", "rf", "yf", "yf", "blank", "blank", "rf", "blank", "blank", "gf", "gf", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "rf", "rf", "blank", "blank", "rf", "blank", "blank", "rf", "rf", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "gtr", "gf", "bf", "yf", "rf", "gf", "bf", "yf", "ytl", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "takeoff", "gtr", "bf", "yf", "rf", "gf", "bf", "ytl", "blank", "gf", "gf", "gf", "gf"];
    $scope.border = [
      "t l", "t", "t", "t r", "l", "r", "t l r", "t l r", "t l r", "t l r", "t l r", "t l", "t r", "t l", "t", "t", "t r",
      "l", "emp", "emp", "r", "b l", "b r", "b l r", "b l r", "l r", "b l r", "b l r", "b l", "b r", "l", "emp", "emp", "r",
      "l", "emp", "emp", "r", "t b l", "t b r", "t l", "t r", "l r", "t l", "t r", "t b l", "t b r", "l", "emp", "emp", "r",
      "b l", "b", "b", "b r", "t b l", "t b r", "l", "r", "l r", "l", "r", "t b l", "t b r", "b l", "b", "b", "b r",
      "t l", "t r", "t l r", "t l r", "t l", "t r", "l", "r", "l r", "l", "r", "t l", "t r", "t l r", "t l r", "t l", "t",
      "b l", "b r", "b l r", "b l r", "b l", "b r", "l", "r", "l r", "l", "r", "b l", "b r", "b l r", "b l r", "b l", "b",
      "t b l", "t b r", "t l", "t", "t", "t", "emp", "b r", "l r", "b l", "emp", "t", "t", "t", "t r", "t b l", "t b r",
      "t b l", "t b r", "b l", "b", "b", "b", "b r", "t l", "emp", "t r", "b l", "b", "b", "b", "b r", "t b l", "t b r",
      "t b l", "t b", "t b", "t b", "t b", "t b", "t b", "emp", "emp", "emp", "t b", "t b", "t b", "t b", "t b", "t b", "t b r",
      "t b l", "t b r", "t l", "t", "t", "t", "t r", "b l", "emp", "b r", "t l", "t", "t", "t", "t r", "t b l", "t b r",
      "t b l", "t b r", "b l", "b", "b", "b", "emp", "t r", "l r", "t l", "emp", "b", "b", "b", "b r", "t b l", "t b r",
      "t", "t r", "t l r", "t l r", "t l", "t r", "l", "r", "l r", "l", "r", "t l", "t r", "t l r", "t l r", "t l", "t r",
      "b", "b r", "b l r", "b l r", "b l", "b r", "l", "r", "l r", "l", "r", "b l", "b r", "b l r", "b l r", "b l", "b r",
      "t l", "t", "t", "t r", "t b l", "t b r", "l", "r", "l r", "l", "r", "t b l", "t b r", "t l", "t", "t", "t r",
      "l", "emp", "emp", "r", "t b l", "t b r", "b l", "b r", "l r", "b l", "b r", "t b l", "t b r", "l", "emp", "emp", "r",
      "l", "emp", "emp", "r", "t l", "t r", "t l r", "t l r", "l r", "t l r", "t l r", "t l", "t r", "l", "emp", "emp", "r",
      "b l", "b", "b", "b r", "b l", "b r", "b l r", "b l r", "b l r", "b l r", "b l r", "l", "r", "b l", "b", "b", "b r"];
    $scope.spot = [
      "diag", "none", "diag", "none", "none", "none", "vert", "vert", "vert", "vert", "vert", "none", "reg", "diag", "none", "diag", "none",
      "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none",
      "diag", "none", "diag", "none", "hor", "none", "none", "none", "reg", "none", "none", "hor", "none", "diag", "none", "diag", "none",
      "none", "none", "none", "none", "hor", "none", "none", "none", "reg", "none", "none", "hor", "none", "none", "none", "none", "none",
      "reg", "none", "vert", "vert", "none", "reg", "none", "none", "reg", "none", "none", "reg", "none", "vert", "vert", "none", "none",
      "none", "reg", "none", "none", "reg", "none", "none", "none", "reg", "none", "none", "none", "reg", "none", "none", "reg", "none",
      "hor", "none", "none", "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "none", "hor", "none",
      "hor", "none", "none", "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "none", "hor", "none",
      "hor", "none", "reg", "reg", "reg", "reg", "reg", "reg", "none", "reg", "reg", "reg", "reg", "reg", "reg", "hor", "none",
      "hor", "none", "none", "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "none", "hor", "none",
      "hor", "none", "none", "none", "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "none", "hor", "none",
      "none", "reg", "vert", "vert", "reg", "none", "none", "none", "reg", "none", "none", "none", "reg", "vert", "vert", "reg", "none",
      "none", "none", "none", "none", "none", "reg", "none", "none", "reg", "none", "none", "reg", "none", "none", "none", "none", "reg",
      "diag", "none", "diag", "none", "hor", "none", "none", "none", "reg", "none", "none", "hor", "none", "diag", "none", "diag", "none",
      "none", "none", "none", "none", "hor", "none", "none", "none", "reg", "none", "none", "hor", "none", "none", "none", "none", "none",
      "diag", "none", "diag", "none", "none", "reg", "vert", "vert", "vert", "vert", "vert", "reg", "none", "diag", "none", "diag", "none",
      "none", "none", "none", "none", "reg", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];
    $scope.havespot = function (row, col) { return $scope.spot[row * 17 + col] != "none"; }
    $scope.road =
      [68, 0, 66, 0, 0, 0, 1, 1, 1, 1, 18, 0, 16, -1, 0, -3, 0
        , 0, 0, 0, 0, 0, -16, 0, 0, 17, 0, 0, 17, 0, 0, 0, 0, 0
        , 34, 0, 32, 0, -16, 0, 0, 0, 17, 0, 0, 17, 0, -35, 0, -37, 0
        , 0, 0, 0, 0, -17, 0, 0, 0, 17, 0, 0, 17, 0, 0, 0, 0, 0
        , 18, 0, 1, 18, 0, -18, 0, 0, 17, 0, 0, 18, 0, 1, 18, 0, 0
        , 0, -16, 0, 0, -16, 0, 0, 0, 17, 0, 0, 0, -16, 0, 0, 17, 0
        , -16, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 17, 0
        , -17, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 17, 0
        , -17, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, 17, 0
        , -17, 0, 0, 0, 0, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, 17, 0
        , -17, 0, 0, 0, 0, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, 17, 0
        , 0, -18, -1, -1, -1, 0, 0, 0, -17, 0, 0, 0, 16, -1, -1, -1, 0
        , 0, 0, 0, 0, 0, -18, 0, 0, -17, 0, 0, 17, 0, 0, 0, 0, -18
        , 55, 0, 53, 0, -16, 0, 0, 0, -17, 0, 0, 17, 0, -14, 0, -16, 0
        , 0, 0, 0, 0, -17, 0, 0, 0, -17, 0, 0, 17, 0, 0, 0, 0, 0
        , 21, 0, 19, 0, 0, -18, -1, -1, -1, -1, -1, -1, 0, -48, 0, -50, 0
        , 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    $scope.positions = [];
    $scope.basespot = { "y": [0, 2, 34, 36], "r": [221, 223, 255, 257], "b": [13, 15, 47, 49], "g": [234, 236, 268, 270] };
    $scope.forceselect = { "y": true, "b": false, "g": false, "r": false };
    $scope.init = function () {

      $scope.positions = [
        "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
        , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"];
      var ok = false;

      for (var i = 0; i < 4; ++i) {
        var c = $scope.turns[i];
        if ($scope.forceselect[c]) {
          for (var j = 0; j < 4; ++j) {
            ok = true;
            $scope.positions[$scope.basespot[c][j]] = c + " num1";
          }
        }
      }
      $scope.curturn = 3;
      if (ok) { $scope.winner=true;$scope.nextTurn(); }
      return !ok;


    }













    $scope.nojump = [136, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151, 8, 42, 59, 76, 93, 110, 127, 161, 178, 195, 212, 229, 246, 263];
    $scope.finishline = [143, 145, 127, 161];
    $scope.secondflight = { 76: 79, 148: 199, 140: 89, 212: 209 };
    $scope.flightfuck = { 73: 76, 97: 148, 191: 140, 215: 212 };
    $scope.getempspot = function (color, mid = false) {
      if (mid) {
        for (var i = 3; i >= 0; i--) {
          if ($scope.positions[$scope.basespot[color][i]] == "emp") return $scope.basespot[color][i];
        }
      }
      for (var i = 0; i < 4; i++) {
        if ($scope.positions[$scope.basespot[color][i]] == "emp") return $scope.basespot[color][i];
      }
      return -1;
    }
    $scope.incforce = function (dest, color) {
      if ($scope.positions[dest] == "emp") $scope.positions[dest] = color + " num1";
      else $scope.positions[dest] += "1";
    }
    $scope.decforce = function (dest) {
      if ($scope.positions[dest].length <= 6) $scope.positions[dest] = "emp";
      else $scope.positions[dest] = $scope.positions[dest].substr(0, $scope.positions[dest].length - 1);
    }
    $scope.fuck = function (dest, color) {
      if ($scope.positions[dest] == "emp") return "peace";
      if ($scope.positions[dest].charAt(0) == color) return "draw";
      if ($scope.positions[dest].length > 6) return "lose";
      return "win";
    }

    $scope.log = "";
    $scope.majorroute = [];
    $scope.loser = {};
    $scope.travelagent = {};
    $scope.startpoint = -1;
    $scope.srccolor = "";
    $scope.logcolor = "";
    $scope.freeze = false;




    $scope.dice = 0;//Math.floor(Math.random() * 6) + 1;
    $scope.curturn = 0;
    $scope.turns = ["y", "b", "g", "r"];
    $scope.rollDice = function () {
      if($scope.rolled===true||$scope.freeze)return;
      $scope.dice = Math.floor(Math.random() * 6) + 1;
      
      if ($scope.getempspot($scope.turns[$scope.curturn]) == -1 && $scope.dice < 5) 
      {$scope.freeze=true;
        $timeout(function(){
         $scope.nextTurn();$scope.dice=0;$scope.rolled=false;$scope.freeze=false},1000);
         
      }
      else $scope.rolled=true;
    };
    $scope.nextTurn = function () { $scope.curturn = ($scope.curturn + 1) % 4; while (!$scope.forceselect[$scope.turns[$scope.curturn]]) $scope.curturn = ($scope.curturn + 1) % 4; };

    $scope.forwardjet = function (cur, rev, color) {
      if (color == "e") return cur;
      if (color == "y" && cur == 136) return 138;
      if (color == "r" && cur == 263) return 246;
      if (color == "g" && cur == 151) return 150;
      if (color == "b" && cur == 8) return 42;
      if (rev) return cur - $scope.road[cur];
      return cur + $scope.road[cur];
    }
    $scope.rd = 0; $scope.cd = 0;
    $scope.generateStyle = function (src, dest) {
      var rowdiff = Math.floor(dest / 17) - Math.floor(src / 17);
      var coldiff = dest % 17 - src % 17;
      $scope.rd = rowdiff;
      $scope.cd = coldiff;
      var basex = 0; var basey = 0;
      var t = 0; var l = 0;
      if (rowdiff > 0) t = rowdiff * 41;
      else if (rowdiff < 0) t = rowdiff * 41;
      if (coldiff > 0) l = coldiff * 41;
      else if (coldiff < 0) l = coldiff * 41;


      if ($scope.spot[dest] == "diag") { basex += 6; basey += 6; }
      if ($scope.spot[dest] == "reg") { basex -= 16, basey -= 16; }
      if ($scope.spot[dest] == "hor") { basex -= 16, basey += 8; }
      if ($scope.spot[dest] == "vert") { basex += 8, basey -= 16; }
      return {
        "top": (t + basex) + "px",
        "left": (l + basey) + "px"
      }
    }
    $scope.getStyle = function (src) {
      if ($scope.travelagent[src] !== undefined) return $scope.generateStyle(src, $scope.travelagent[src]);
      return {};
    }
    $scope.getflycolor = function (src) {
      if (src == $scope.startpoint) return $scope.srccolor;
      if ($scope.travelagent[src] !== undefined) return $scope.loser[src][1];
      return "";
    }
    $scope.isflying = function (src) { return $scope.travelagent[src] !== undefined; }
    $scope.getRoute = function (src, step, color) {
      $scope.majorroute = [], $scope.loser = {};
      $scope.majorroute.push(src);
      var cur = src, rev = false;

      for (var i = 0; i < step; ++i) {
        cur = $scope.forwardjet(cur, rev, color);
        if ($scope.finishline.indexOf(cur) != -1) rev = true;
        $scope.majorroute.push(cur);
      }

      $scope.log = "fucking1";
      switch ($scope.fuck(cur, color)) {
        case "lose": $scope.majorroute.push($scope.getempspot(color)); return;
        case "win": $scope.loser[cur] = [true, $scope.positions[cur].charAt(0)]; return;
        default: break;
      }
      var fliable = true, jumpable = true;
      $scope.log = color;
      if ($scope.board[cur].charAt(0) != color) return;
      $scope.log = "flying1";
      if ($scope.flightfuck[cur] !== undefined) {
        $scope.log = "canfly";
        fliable = false;
        cur = $scope.flightfuck[cur];
        switch ($scope.fuck(cur, color)) {
          case "lose": $scope.majorroute.push(cur); $scope.majorroute.push($scope.getempspot(color)); return;
          case "win": $scope.majorroute.push(cur); $scope.loser[cur] = [true, $scope.positions[cur].charAt(0)];
            cur = $scope.secondflight[cur]; $scope.majorroute.push(cur); break;
          default: cur = $scope.secondflight[cur]; $scope.majorroute.push(cur); break;
        }
        switch ($scope.fuck(cur, color)) {
          case "lose": $scope.majorroute.push($scope.getempspot(color)); return;
          case "win": $scope.loser[cur] = [false, $scope.positions[cur].charAt(0)]; jumpable = false; break;
          default: break;
        }
      }
      if (jumpable && $scope.nojump.indexOf(cur) == -1) {

        for (var i = 0; i < 4; i++) { cur = $scope.forwardjet(cur, rev, color); }

        $scope.majorroute.push(cur);
        switch ($scope.fuck(cur, color)) {
          case "lose": $scope.majorroute.push($scope.getempspot(color)); return;
          case "win": $scope.loser[cur] = [false, $scope.positions[cur].charAt(0)]; fliable = false; break;
          default: break;
        }
      }
      if (fliable && $scope.flightfuck[cur] !== undefined) {
        cur = $scope.flightfuck[cur];

        switch ($scope.fuck(cur, color)) {
          case "lose": $scope.majorroute.push(cur); $scope.majorroute.push($scope.getempspot(color)); return;
          case "win": $scope.majorroute.push(cur); $scope.loser[cur] = [true, $scope.positions[cur].charAt(0)];
            cur = $scope.secondflight[cur]; $scope.majorroute.push(cur); break;
          default: cur = $scope.secondflight[cur]; $scope.majorroute.push(cur); break;
        }
        switch ($scope.fuck(cur, color)) {
          case "lose": $scope.majorroute.push($scope.getempspot(color)); return;
          case "win": $scope.loser[cur] = [false, $scope.positions[cur].charAt(0)]; break;
          default: break;
        }
      }
      if ($scope.finishline.indexOf(cur) != -1)
        $scope.majorroute.push($scope.getempspot(color));
    }
    $scope.getWinner = function () {
      for (var i = 0; i < 4; i++) {
        var mark = true;
        for (var j = 0; j < 4; j++) {
          if ($scope.positions[$scope.basespot[$scope.turns[i]][j]] != "fin") { mark = false; break; }
        }
        if (mark) switch (i) {
          case 0: return "Yellow";
          case 1: return "Blue";
          case 2: return "Green";
          case 4: return "Red";
        }
      }
      return true;
    }
    $scope.winner = true;


    $scope.rolled=false;
    $scope.hasarrow=function(row,col){
      if(row==4&&col==8)return "right";
      if(row==8&&col==4)return "up";
      if(row==8&&col==12)return "down"
      if(row==12&&col==8)return "left";
      return 'none';
    }
    $scope.trav = function (src) {

      if ($scope.freeze||(!$scope.rolled)&&($scope.winner!==true)) return;
      var color = $scope.positions[src].charAt(0);
      $scope.srccolor = color;
      var issix=($scope.dice===6);
      $scope.startpoint = src;
      var step = $scope.dice;
      if (color != $scope.turns[$scope.curturn]) return;
      if ($scope.getempspot(color) == -1 && step < 5) { $scope.nextTurn();$scope.dice=0;$scope.rolled=false;return; }
      if ($scope.basespot[color].indexOf(src) != -1&&step<5) return;
      if ($scope.basespot[color].indexOf(src) != -1) step = 1;
      $scope.freeze = true;

      $scope.decforce(src);
      $scope.getRoute(src, step, color);
      var delay = 0;
      var frame = 500;
      var count = $scope.majorroute.length;
      for (var i = 0; i < count + 1; ++i) {
        $timeout(function () {
          if ($scope.majorroute.length > 0) {
            $scope.travelagent[src] = $scope.majorroute[0];
            var cur = $scope.majorroute[0];
            $scope.majorroute.shift();
            if ($scope.loser[cur] !== undefined) {
              $scope.travelagent[cur] = cur;
              $scope.decforce(cur);
              $timeout(function () {
                $scope.log = "lol";
                $scope.log = ($scope.getempspot($scope.loser[cur][1], $scope.loser[cur][0]))
                $scope.travelagent[cur] = $scope.getempspot($scope.loser[cur][1], $scope.loser[cur][0]);
                $timeout(function () {
                  $scope.incforce($scope.travelagent[cur], $scope.loser[cur][1]);
                  delete $scope.travelagent[cur.toString()];
                }, frame);
              }, frame);
            }
            if ($scope.majorroute.length == 0) {
              $timeout(function () {
                if ($scope.basespot[color].indexOf($scope.travelagent[src]) != -1) {
                  $scope.positions[$scope.travelagent[src]] = "fin";
                  $scope.winner = $scope.getWinner();
                }
                else { $scope.incforce($scope.travelagent[src], color); }
                delete $scope.travelagent[(src.toString())];
                if(!issix)$scope.nextTurn();
                $scope.rolled=false;
                $scope.freeze = false;
                $scope.dice=0;
              }, frame);
            }
          }
        }, delay)
        delay += frame;
      }
    }
  });