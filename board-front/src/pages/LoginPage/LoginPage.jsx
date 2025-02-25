/**@jsxImportSource @emotion/react */
import { Link, useSearchParams } from 'react-router-dom';
import * as s from './style';
import { SiGoogle, SiKakao, SiNaver } from "react-icons/si";
import ValidInput from '../../components/auth/ValidInput/ValidInput';
import { useState } from 'react';
import { useLoginMutation } from '../../mutations/authMutation';

function LoginPage(props) {
    const loginMutation = useLoginMutation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState({
        username: searchParams.get("username"),
        password: "",
    });
    
    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleLoginOnClick = async () => {
        try {
            const response = await loginMutation.mutateAsync(inputValue);
            console.log(response.data);
        } catch (error) {

        }
        
    }

    return (
        <div css={s.layout}>
            <div>
                <header>
                    <h1 css={s.title1}>Think it. Make it</h1>
                    <h1 css={s.title2}>Login to your account</h1>
                </header>
                <main>
                    <div css={s.oauth2Group}>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiGoogle /></div>
                                <span css={s.oauth2Text}>Continue with Google</span>
                            </button>
                        </div>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiNaver /></div>
                                <span css={s.oauth2Text}>Continue with Naver</span>
                            </button>
                        </div>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiKakao /></div>
                                <span css={s.oauth2Text}>Continue with Kakao</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div css={s.groupBox}>
                            <input css={s.textInput} type="text" placeholder='Enter your username...'
                                name="username"
                                value={inputValue.username}
                                onChange={handleInputOnChange}
                            />
                            
                        </div>
                        <div css={s.groupBox}>
                            <input css={s.textInput} type="password" placeholder='password...'
                                name="password"
                                value={inputValue.password}
                                onChange={handleInputOnChange}
                            />
                        </div>
                        <p css={s.accountMessage}>
                            계정이 없으시다면 지금 가입하세요. <Link to={"/auth/join"}>회원가입</Link>
                        </p>
                        <div css={s.groupBox}>
                            <button css={s.accountButton} onClick={handleLoginOnClick}>Login</button>
                        </div>
                    </div>
                    <div></div>
                </main>
                <footer>
                    <p css={s.footerAgreement}>
                        이메일을 사용하여 계정을 구분하고 다른 사용자들에게 게시글을 공유합니다.
                        계속 진행하려면 약관 및 개인정보 보호정책을 이해하고 동의한다는 것을 인정해야합니다.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default LoginPage;