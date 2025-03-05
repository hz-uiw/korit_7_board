/**@jsxImportSource @emotion/react */
import Select from 'react-select';
import * as s from './style';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { emptyButton } from '../../styles/buttons';
import { GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import { useRecoilValue } from 'recoil';
import { mainSidebarIsOpenState } from '../../atoms/mainSidebar/mainSidebarAtom';

function BoardListPage(props) {
    const isSidebarOpen = useRecoilValue(mainSidebarIsOpenState);

    const orderSelectOptions = [
        {label: "최근 게시글", value: "recent"},
        {label: "오래된 게시글", value: "oldest"},
        {label: "조회수 많은 순", value: "viewsDesc"},
        {label: "조회수 적은 순", value: "viewsAsc"},
        {label: "좋아요 많은 순", value: "likesDecs"},
        {label: "좋아요 적은 순", value: "likesAsc"},
        ]

    return (
        <div css={s.container}>
            <div css={s.header}>
                <div css={s.title}>
                    <h2>전체 게시글</h2>
                </div>
                <div css={s.searchItems}>
                    <Select options={orderSelectOptions}
                        styles={{
                            control: (style) => ({
                                ...style,
                                width: "11rem",
                                minHeight: "3rem",
                            }),
                            dropdownIndicator: (style) => ({
                                ...style,
                                padding: "0.3rem",
                            })
                        }}
                    />
                    <div css={s.searchInputBox}>
                        <input type="text" />
                        <button css={emptyButton}><BiSearch/></button>
                    </div>
                </div>
            </div>
            <div css={s.main}>
                <ul css={s.boardListContainer}>
                    <li>
                        <div>No.</div>
                        <div>Title</div>
                        <div>Writer</div>
                        <div>Count</div>
                        <div>Date</div>
                    </li>
                    <li>
                        <div>1000</div>
                        <div>게시글 임시 제목입니다.</div>
                        <div>
                            <div css={s.boardWriter}>
                                <img src="" alt="" />
                            </div>
                            <span>nickname</span>
                        </div>
                        <div css={s.boardCounts}>
                            <span>
                                <GrView/>
                                <span>100000</span>
                            </span>
                            <span>
                                <FcLike />
                                <span>3000</span>
                            </span>
                            
                        </div>
                        <div>2025-03-05</div>
                    </li>
                </ul>
            </div>
            <div css={s.footer}>
                1, 2, 3, 4, 5
            </div>
        </div>
    );
}

export default BoardListPage;