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

        const direction = this.player === Player.WHITE ? 1 : -1;

        let currentSquare = board.findPiece(this);

        let OneSquareForward = Square.at(currentSquare.row + direction, currentSquare.col);

        moves.push(OneSquareForward);

        return moves;
    }
}
