import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = []
        let currentSquare = board.findPiece(this);
        let nextSquare;
        const directions = [
            {row: 1, col: 0}, //sus
            {row: -1, col: 0}, //jos
            {row: 0, col: -1}, //stanga
            {row: 0, col: 1}, //dreapta
            {row: 1, col: 1}, //sus-dreapta
            {row: 1, col: -1}, //sus-stanga
            {row: -1, col: 1}, // jos-dreapta
            {row: -1, col: -1}, //jos-stanga
        ];

        for(const direction of directions){
            let nextRow = currentSquare.row + direction.row;
            let nextCol = currentSquare.col + direction.col;

            nextSquare = Square.at(nextRow, nextCol);
            while(nextSquare.isValidSquare(nextRow,nextCol)){
                moves.push(Square.at(nextRow,nextCol));
                nextRow += direction.row ;
                nextCol += direction.col;
            }
        }

        return moves;

    }
}
