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
        let nextSquare;
        let nextRow;

        const directionsWhite = [
            {row: 1, col: 0},
            {row: 2, col: 0},
        ];

        const directionsBlack = [
            {row: -1, col: 0},
            {row: -2, col: 0},
        ];

        if(this.player === Player.WHITE){
            for(const direction of directionsWhite){
                if(currentSquare.row === 1 || currentSquare.row === 6){
                    let nextRow = currentSquare.row + direction.row;
                    let nextCol = currentSquare.col + direction.col;
                    nextSquare = Square.at(nextRow, nextCol);
                    let piece = board.getPiece(nextSquare);
                    if(nextSquare.isValidSquare(nextRow,nextCol)){
                        if(!piece){
                            moves.push(Square.at(nextRow,nextCol));
                            nextRow += direction.row ;
                            nextCol += direction.col;
                        }
                        else break;

                    }
                }
                else {
                    let nextRow = currentSquare.row + direction.row;
                    let nextCol = currentSquare.col + direction.col;
                    nextSquare = Square.at(nextRow, nextCol);
                    let piece = board.getPiece(nextSquare);
                    if(nextSquare.isValidSquare(nextRow,nextCol)){
                        if(!piece) {
                            moves.push(Square.at(nextRow, nextCol));
                            break;
                        }
                    }
                }
            }
        }
        if(this.player === Player.BLACK){
            for(const direction of directionsBlack){
                if(currentSquare.row === 1 || currentSquare.row === 6){
                    let nextRow = currentSquare.row + direction.row;
                    let nextCol = currentSquare.col + direction.col;
                    nextSquare = Square.at(nextRow, nextCol);
                    let piece = board.getPiece(nextSquare);
                    if(nextSquare.isValidSquare(nextRow,nextCol)){
                        if(!piece){
                            moves.push(Square.at(nextRow,nextCol));
                            nextRow += direction.row ;
                            nextCol += direction.col;
                        }
                        else break;
                    }
                }
                else {
                    let nextRow = currentSquare.row + direction.row;
                    let nextCol = currentSquare.col + direction.col;
                    nextSquare = Square.at(nextRow, nextCol);
                    let piece = board.getPiece(nextSquare);
                    if(nextSquare.isValidSquare(nextRow,nextCol)){
                        if(!piece){
                            moves.push(Square.at(nextRow,nextCol));
                            break;
                        }

                    }
                }
            }
        }


        // direction = this.player === Player.WHITE ? 1 : -1;
        //
        // nextSquare = Square.at(currentSquare.row + direction, currentSquare.col);
        //
        // if(nextSquare.isValidSquare(currentSquare.row + direction,currentSquare.col)){
        //     let piece = board.getPiece(nextSquare);
        //     console.log(piece);
        //     if(!piece){
        //         OneSquareForward = Square.at(currentSquare.row + direction, currentSquare.col);
        //         moves.push(OneSquareForward);
        //
        //         console.log(currentSquare)
        //         console.log(OneSquareForward);
        //
        //         console.log(piece);
        //
        //     }
        // }
        //
        //
        // if(currentSquare.row === 1 || currentSquare.row === 6){
        //     direction = this.player === Player.WHITE ? 2 : -2;
        //
        //     nextRow = currentSquare.row + direction;
        //     nextSquare = Square.at(nextRow, currentSquare.col);
        //
        //     if(nextSquare.isValidSquare(nextRow,currentSquare.col)){
        //         let piece = board.getPiece(nextSquare);
        //         if(!piece){
        //             TwoSquaresForward =  Square.at(currentSquare.row + direction, currentSquare.col);
        //             moves.push(TwoSquaresForward)
        //         }
        //     }
        // }
        console.log(moves);
        return moves;
    }
}
