import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = []
        let currentSquare = board.findPiece(this);
        let direction = 0;
        let OneSquareForward, TwoSquaresForward ;

        direction = this.player === Player.WHITE ? 1 : -1;
        OneSquareForward = Square.at(currentSquare.row + direction, currentSquare.col);
        moves.push(OneSquareForward);

        if(currentSquare.row === 1 || currentSquare.row === 6){
            direction = this.player === Player.WHITE ? 2 : -2;
            TwoSquaresForward =  Square.at(currentSquare.row + direction, currentSquare.col);
            moves.push(TwoSquaresForward)
        }
        return moves;
    }
}
