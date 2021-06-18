import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent  {

  currentPlayer: string = 'X';//Armazenar estado do jogador atual/inicial.
  winner:string = '';//Armazena o ganhador da partida.
  board:string[][]=[ //Posições do tabuleiro:
    ['', '', ''], //00 - 01 - 02
    ['', '', ''], //10 - 11 - 12
    ['', '', '']  //20 - 21 - 22
  ];

  processPlay(line: number,col:number){
    //console.log(`Jogada na linha: ${line}, coluna ${col} do jogador ${this.currentPlayer}`);
    if (this.board[line][col] == '' && this.winner == ''){
      this.board[line][col] = this.currentPlayer;
      //verificar vencedor
      if (this.checkWinner(this.currentPlayer)){
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer == 'X'){
        this.currentPlayer = 'O';
      }else{
        this.currentPlayer = 'X';
      }
    }
  }

  checkWinner(player: string): boolean{

   for (let i = 0; i < this.board.length; i++){
     if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
     }
   }

   for (let i = 0;i < this.board.length; i++){
     if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
       return true;
     }
   }
   //verifica as diagoais:
   if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
     return true;
   }

   if (this.board[2][0] == player && this.board[1][1] == player && this.board[0][2] == player) {
    return true;
  }
   

    return false;
  }


  reset(){
    this.currentPlayer = 'X';
    this.winner = '';
    this.board = [ 
       ['', '', ''],
       ['', '', ''],
       ['', '', '']
    ];

  }

  

}
