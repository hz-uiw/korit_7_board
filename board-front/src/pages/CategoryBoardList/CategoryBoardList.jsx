/**@jsxImportSource @emotion/react */
import { GrView } from 'react-icons/gr';
import * as s from './style';
import React, { useEffect, useRef } from 'react';
import { FcLike } from 'react-icons/fc';
import { useGetCategoryBoardList } from '../../queries/boardQuery';
import { useParams } from 'react-router-dom';

function CategoryBoardListPage(props) {
    const params = useParams();
    const categoryboardList = useGetCategoryBoardList(params.categoryName);
    const loadMoreRef = useRef(null);

    useEffect(() => {

        const observerCallback = (entries) => {

            const [entry] = entries;
            if (entry.isIntersecting) {
                categoryboardList.fetchNextPage();
            }
        }

        const observerOption = {
            threshold: 1.0
            
        }
        const observer =  new IntersectionObserver(observerCallback, observerOption);
        observer.observe(loadMoreRef.current);
    }, [])


    return (
        <div css={s.scrollLayout}>
            <div css={s.cardLayoutGroup}>
                <div css={s.cardLayout}>
                    <header>
                        <div css={s.headerLeft}>
                            <div css={s.profileImgBox}>
                                <img src="" alt="" />
                            </div>
                            <span>nickname</span>
                        </div>
                        <div css={s.boardCounts}>
                            <span>
                                <FcLike />
                                <span>{20}</span>
                            </span>
                            <span>
                                <GrView />
                                <span>{100}</span>
                            </span>
                        </div>
                    </header>
                    <main >
                        <h2 css={s.boardTitle}>게시글 제목입니다.</h2>
                    </main>
                </div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div>
                <div css={s.cardLayout}></div> 
                <div css={s.cardLayout}></div> 
                <div css={s.cardLayout}></div> 
                <div css={s.cardLayout}></div> 
                <div css={s.cardLayout}></div> 
            </div>
            <div ref={loadMoreRef}></div>
        </div>
    );
}

export default CategoryBoardListPage;