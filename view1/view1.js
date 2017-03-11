'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])
.directive('rpBoard',function(){
  return{
    restrict:'E',
    scope: true,
    controllerAs:'bd',
    templateUrl:'/view1/rp_board.html',
    
    controller:function()
    {
      this.board=[[]];
      this.indicetraverser=[];
      this.boardsize=0;
      this.newval=1;
      this.countlog=0;
      this.cursor=[-1,-1];
      this.getBuilding=function(row,col)
      {
        if(this.board[row][col]!==0)return "rpBuilding";
        else return "rpnoBuilding";
      };
      this.getFieldClass=function(row,col){
        if(this.board[row][col]!==0)
          return "rpField Filled";
        else return "rpField Empty";
      };
      this.getBorderClass=function(row,col){
      
        var top=(row>0&&((this.board[row-1][col]===0)!==(this.board[row][col]===0)));
        var bot=(row<this.boardsize-1&&((this.board[row+1][col]===0)!==(this.board[row][col]===0)));
        var left=(col>0&&((this.board[row][col-1]===0)!==(this.board[row][col]===0)));
        var right=(col<this.boardsize-1&&((this.board[row][col+1]===0)!==(this.board[row][col]===0)));

        var tl=(row>0&&col>0&&(this.board[row-1][col-1]!==0));
        var tr=(row>0&&col<this.boardsize-1&&(this.board[row-1][col+1]!==0));
        var bl=(row<this.boardsize-1&&col>0&&(this.board[row+1][col-1]!==0));
        var br=(row<this.boardsize-1&&col<this.boardsize-1&&(this.board[row+1][col+1]!==0));

        var filled=(this.board[row][col]!==0);
        var re="rpBorder";
        re+=this.board[row][col]!==0?" Filled":" Empty";
        if(top&&left&&(filled||tl))re+=" tl";
        if(top&&right&&(filled||tr))re+=" tr";
        if(bot&&left&&(filled||bl))re+=" bl";
        if(bot&&right&&(filled||br))re+=" br";    
        return re;
      }
      this.getBackClass=function(row,col)
      {
          if(this.board[row][col]!==0)return "rpBack Filled";
          else return "rpBack Empty";
      }
      this.newBoard=function(bdsize){
        this.boardsize=bdsize;
        this.board=new Array(bdsize);
        this.indicetraverser=new Array(bdsize);

        for(var i=0;i<bdsize;i++){
                  this.board[i]=new Array(bdsize);
                  this.board[i].fill(0);
                  this.indicetraverser[i]=i;
        }
      }
      this.getNewVal=function(){
      this.newval=5-Math.floor(Math.log2(Math.floor((Math.random()*512)+1))/2);
      }
      this.matchVal=function(row,col,val){
        if(row<0||row>=this.boardsize||col<0||col>=this.boardsize||this.board[row][col]!==val)return 0;
        else return 1;
      }
      this.countAdj=function(row,col,val)
      {
        if(row<0||row>=this.boardsize||col<0||col>=this.boardsize||this.board[row][col]!==val)return 0;
        else return (1+this.matchVal(row-1,col,val)
                    +this.matchVal(row+1,col,val)
                    +this.matchVal(row,col-1,val)
                    +this.matchVal(row,col+1,val));
      }
      this.mergeVal=function(row,col,val)
      {
        if(row<0||row>=this.boardsize||col<0||col>=this.boardsize||this.board[row][col]!==val){;}
        else
        {
          this.board[row][col]=0;
          this.mergeVal(row-1,col,val);
          this.mergeVal(row+1,col,val);
          this.mergeVal(row,col-1,val);
          this.mergeVal(row,col+1,val);
        }
      }
      this.isMergable=function(row,col,val)
      {
        var countval=this.countAdj(row-1,col,val)
        +this.countAdj(row+1,col,val)
        +this.countAdj(row,col-1,val)
        +this.countAdj(row,col+1,val);
        if(countval>1)return true;
        else return false;
      }
      this.emplaceVal=function(row,col){
        if(this.board[row][col]===0&&this.newval!==0){
        var curval=this.newval;
        while(this.isMergable(row,col,curval)===true){
          this.board[row][col]=curval;
          this.mergeVal(row,col,curval);
          curval=curval+1;
        }
          this.board[row][col]=curval;
          this.getNewVal();
        }
        else if(this.board[row][col]!==0&&this.newval===0){
          this.board[row][col]=this.newval;
          this.getNewVal();
        }
      }
      this.click=function(row,col)
      {
        if(row===this.cursor[0]&&col===this.cursor[1]){this.emplaceVal(row,col);this.cursor=[-1,-1];}
        else if (this.board[row][col]===0)this.cursor=[row,col];
      }
    },
    bindToController: true
  }


})



;