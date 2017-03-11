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
  .directive('spot',function(){
    return{
     restrict: 'E',
      templateUrl: '/view3/spot.html'}
  
  })
  .directive('battleludo', function () {
    return {
      restrict: 'E',
      controllerAs: 'bat',
      templateUrl: '/view3/battle.html',
      bindToController: true,
      controller: function () {
        this.board = ["yf", "yf", "yf", "yf", "blank", "gbr", "rf", "yf", "bf", "gf", "rf", "ybl", "takeoff", "bf", "bf", "bf", "bf", "yf", "yf", "yf", "yf", "gbr", "gf", "rf", "yf", "bf", "gf", "rf", "yf", "ybl", "bf", "bf", "bf", "bf", "yf", "yf", "yf", "yf", "bf", "bf", "blank", "blank", "bf", "blank", "blank", "bf", "bf", "bf", "bf", "bf", "bf", "yf", "yf", "yf", "yf", "yf", "yf", "blank", "blank", "bf", "blank", "blank", "gf", "gf", "bf", "bf", "bf", "bf", "takeoff", "rbr", "yf", "bf", "gr", "rf", "blank", "blank", "bf", "blank", "blank", "rf", "ry", "bf", "gf", "rbl", "blank", "rbr", "rf", "yf", "bf", "gf", "gr", "blank", "blank", "bf", "blank", "blank", "ry", "yf", "bf", "gf", "rf", "rbl", "gf", "gf", "blank", "blank", "blank", "blank", "blank", "blank", "bf", "blank", "blank", "blank", "blank", "blank", "blank", "yf", "yf", "bf", "bf", "blank", "blank", "blank", "blank", "blank", "ybmid", "bf", "gbmid", "blank", "blank", "blank", "blank", "blank", "bf", "bf", "yf", "yf", "yf", "yf", "yf", "yf", "yf", "yf", "colorful", "gf", "gf", "gf", "gf", "gf", "gf", "gf", "gf", "rf", "rf", "blank", "blank", "blank", "blank", "blank", "rymid", "rf", "grmid", "blank", "blank", "blank", "blank", "blank", "rf", "rf", "gf", "gf", "blank", "blank", "blank", "blank", "blank", "blank", "rf", "blank", "blank", "blank", "blank", "blank", "blank", "yf", "yf", "btr", "bf", "yf", "rf", "gf", "gb", "blank", "blank", "rf", "blank", "blank", "yb", "yf", "rf", "gf", "bf", "btl", "blank", "btr", "yf", "rf", "gb", "bf", "blank", "blank", "rf", "blank", "blank", "bf", "yb", "rf", "gf", "btl", "takeoff", "rf", "rf", "rf", "rf", "yf", "yf", "blank", "blank", "rf", "blank", "blank", "gf", "gf", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "rf", "rf", "blank", "blank", "rf", "blank", "blank", "rf", "rf", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "gtr", "gf", "bf", "yf", "rf", "gf", "bf", "yf", "ytl", "gf", "gf", "gf", "gf", "rf", "rf", "rf", "rf", "takeoff", "gtr", "bf", "yf", "rf", "gf", "bf", "ytl", "blank", "gf", "gf", "gf", "gf"];
        this.border = [
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
        this.spot = [
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
        this.havespot = function (row, col) { return this.spot[row * 17 + col] != "none"; }
        this.road =
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
        this.positions = [
          "y num1", "emp", "y num1", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "b num1", "emp", "b num1", "emp"
          , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
          , "y num1", "emp", "y num1", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "b num1", "emp", "b num1", "emp"
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
          , "r num1", "emp", "r num1", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "g num1", "emp", "g num1", "emp"
          , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"
          , "r num1", "emp", "r num1", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "g num1", "emp", "g num1", "emp"
          , "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp", "emp"];
        this.basespot = { "y": [0, 2, 34, 36], "r": [221, 223, 255, 257], "b": [13, 15, 47, 49], "g": [234, 236, 268, 270] };
        this.nojump = [136, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151, 8, 42, 59, 76, 93, 110, 127, 161, 178, 195, 212, 229, 246, 263];
        this.finishline = [143, 145, 127, 161];
        this.flight = { 73: 79, 97: 199, 191: 89, 215: 209 };
        this.flightfuck = { 73: 76, 97: 148, 191: 140, 215: 212 };
        this.getempspot = function (color) {
          for (var i = 0; i < 4; i++) {
            if (this.positions[this.basespot[color][i]] == "emp") return this.basespot[color][i];
          }
          return -1;
        }
        this.returnjet = function (color) {
          this.positions[this.getempspot(color)] = color;
        }
        this.incforce = function (dest, color) {
          if (this.positions[dest] == "emp") this.positions[dest] = color + " num1";
          else this.positions[dest] += "1";
        }
        this.decforce = function (dest) {
          if (this.positions[dest].length <= 6) this.positions[dest] = "emp";
          else this.positions[dest] = this.positions[dest].substr(0, this.positions[dest].length - 1);
        }
        this.fuck = function (dest, color) {
          if (this.positions[dest] == "emp") return "peace";
          if (this.positions[dest].charAt(0) == color) return "draw";
          if (this.positions[dest].length > 6) return "lose";
          return "win";
        }

        this.log = "";
        this.focus=0;
        this.dice = Math.floor(Math.random() * 6) + 1;
        this.curturn = 0;
        this.turns = ["y", "b", "g", "r"];
        this.rollDice = function () { 
          this.dice = Math.floor(Math.random() * 6) + 1;
         };
        this.nextTurn = function () { this.curturn = (this.curturn + 1) % 4; };

        this.forwardjet = function (cur, rev, color) {
          if (color == "e") return cur;
          if (color == "y" && cur == 136) return 138;
          if (color == "r" && cur == 263) return 246;
          if (color == "g" && cur == 151) return 150;
          if (color == "b" && cur == 8) return 42;
          if (rev) return cur - this.road[cur];
          return cur + this.road[cur];
        }
        this.fly = function (cur, color) {
          var dest = this.flight[cur];
          if (dest === undefined) return "noflight";
          var fuckpoint = this.flightfuck[cur];
          var battlelog = false;
          switch (this.fuck(fuckpoint, color)) {
            case "lose": return "fucked";
            case "win": this.returnjet(this.positions[fuckpoint].charAt(0)); this.positions[fuckpoint] = "emp"; battlelog = true; break;
            default: break;
          }
          switch (this.fuck(dest, color)) {
            case "lose": return "fucked";
            case "win": this.returnjet(this.positions[dest].charAt(0)); this.positions[dest] = "emp"; return "battled";
            default: if (battlelog) return "battled"; else return "safe";
          }
        }

        this.trav = function (cur) {
          this.focus=cur;
          var color = this.positions[cur].charAt(0);
          var step=this.dice;
          var rev = false;
          if (this.positions[cur][2] == 'f') { this.log = "fin"; return; }
                    this.log="yeah~1";
          if (color != this.turns[this.curturn]) { this.log = "no"; return; }
                    this.log="yeah~2";
          if (this.getempspot(color) == -1 && step < 5) { this.log = "pity"; this.nextTurn(); this.rollDice(); return; }
                    this.log="yeah~3";
          if (this.basespot[color].indexOf(cur) != -1 && step < 5) { this.log = "try another one"; return; }
                    this.log="yeah~4";
          this.log="yeah~";
          this.nextTurn();
          this.rollDice();
          this.decforce(cur);
          if(this.basespot[color].indexOf(cur)!=-1)
          {
            cur=this.forwardjet(cur,rev,color);
            this.incforce(cur,color);
            return;
          }



          for (var i = 0; i < step; ++i) {  
            cur = this.forwardjet(cur, rev, color);
            if (this.finishline.indexOf(cur) != -1) rev = true;
          }
          this.log = cur.toString();
          //collide
          switch (this.fuck(cur, color)) {
            case "win": this.returnjet(this.positions[cur].charAt(0)); this.positions[cur] = color + " num1"; return;
            case "lose": this.returnjet(color); return;
            default: break;
          }

          if (this.board[cur] == color + 'f') {
            switch (this.fly(cur, color)) {
              case "fucked": this.returnjet(color); return;
              case "battled": this.incforce(this.flight[cur], color); return;
              case "safe": cur = this.flight[cur]; break;
              default: break;
            }
            if (this.nojump.indexOf(cur) == -1) {
              for (var i = 0; i < 4; ++i) { cur = this.forwardjet(cur, false, color); }
              switch (this.fuck(cur, color)) {
                case "win": this.returnjet(this.positions[cur].charAt(0)); this.positions[cur] = color + " num1"; return;
                case "lose": this.returnjet(color); return;
                default: break;
              }
            }
            switch (this.fly(cur, color)) {
              case "fucked": this.returnjet(color); return;
              case "battled": this.incforce(this.flight[cur], color); return;
              case "safe": cur = this.flight[cur]; break;
              default: break;
            }
          }
          if (this.finishline.indexOf(cur) != -1) { this.positions[this.getempspot(color)] = color + " fin"; return; }
          this.incforce(cur, color);
        }

      }

    };
   });