import React, {FC, memo, useState} from "react";


export const Login: FC = memo(() => {

    const [isLogin, setIsLogin] = useState(false)

    const toggleLogin = () => {setIsLogin(!isLogin)}

    const logginInput = () => {setIsLogin(false)}

    return (
        <div>
            <button onClick={toggleLogin}>login</button>
            {isLogin ?
                <div>
                    <form onSubmit={logginInput}>
                        <label>
                            Логин:
                            <input type="text" name="login"/>
                        </label>
                        <label>
                            Пароль:
                            <input type="text" name="password"/>
                        </label>
                        <input type="submit" value="Вход"/>
                    </form>
                </div>
                : ''}
        </div>
    )
})