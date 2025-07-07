import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = []
        let currentSquare = board.findPiece(this);

        //move vertically
        for(let row = 0; row < 8; row++){
            if(currentSquare.row!= row){
                moves.push(Square.at(row, currentSquare.col));
            }
        }

        //move horizontally
        for(let col = 0; col < 8; col++){
            if(currentSquare.col!= col){
                moves.push(Square.at(currentSquare.row, col));
            }
        }

        return moves;
    }
}
