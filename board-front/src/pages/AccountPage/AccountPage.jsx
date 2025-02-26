/**@jsxImportSource @emotion/react */
import * as s from './style';
import { useEffect, useState } from 'react';
import { useUserMeQuery } from '../../queries/userQuery';
import { api } from '../../configs/axiosConfig';

function AccountPage(props) {
    const loginUser = useUserMeQuery();
    const [nicknameValue, setNickNameValue] = useState("");

    useEffect(() => {
        setNickNameValue(loginUser?.data?.data.nickname)
    }, [loginUser.isFetched]);

    const handleProfileImgFile = async (e) => {
        console.log({element: e.target});
        const fileList = e.target.files;
        const file = fileList[0];

        const formData = new FormData();
        formData.append("file", file);

        await api.post("/api/user/profile/img", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });
        loginUser.refetch();
    }
    return (
        <div css={s.container}>
            <h2 css={s.title}>Account</h2>
            
            <div css={s.accountBox}>
                <label css={s.profileImgBox}>
                    <img src={`http://localhost:8080/image/user/profile/${loginUser?.data?.data.profileImg || "default.jpg"}`} alt="" />
                    <input type="file" onChange={handleProfileImgFile}/>
                </label>
                <div>
                    <h3 css={s.nicknameTitle}>Preferred nickname</h3>
                    <div>
                        <input css={s.textInput} type="text" value={nicknameValue}/>
                    </div>
                    <button css={s.saveButton}>save nickname</button>
                </div>
            </div>
            <h2 css={s.title}>Account Security</h2>
            <div>
                <div css={s.itemGroup}>
                    <div>
                        <h3 css={s.subTitle}>Email</h3>
                        <p css={s.subContent}>{loginUser?.data?.data.email}</p>
                    </div>
                    <button css={s.borderButton}>Change email</button>
                </div>
                <div css={s.itemGroup}>
                    <div>
                        <h3 css={s.subTitle}>password</h3>
                        <p css={s.subContent}>계정에 로그인할 영구 비밀번호를 설정합니다.</p>
                    </div>
                    <button css={s.borderButton}>Change password</button>
                </div>
            </div>
            
        </div>
    );
}

export default AccountPage;