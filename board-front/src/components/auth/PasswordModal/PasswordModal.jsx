/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import { CgPassword } from 'react-icons/cg';
import { RiCloseCircleFill } from 'react-icons/ri';

function PasswordModal({setOpen}) {

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    }

    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgPassword /></div>
                <h2 css={s.headerTitle}>Set a password</h2>
                <p css={s.headerMessage}>비밀번호는 최소 8자 이상, 또는 16자 이하의 영문, 숫자 조합을 사용하세요.</p>
                <div>
                    <div css={s.inputGroup}>
                        <label>Enter a new password</label>
                        <input type="password" />
                    </div>
                    <div css={s.inputGroup}>
                        <label>Confirm your new password</label>
                        <input type="password" />
                    </div>
                    <button>Set a password</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordModal;