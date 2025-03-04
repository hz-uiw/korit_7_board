package com.korit.board.boardback.mapper;

import com.korit.board.boardback.entity.BoardCategory;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardCategoryMapper {
    int insertBoardCategory(BoardCategory boardCategory);
    BoardCategory selectBoardCategoryByName(String boardCategoryName);
}