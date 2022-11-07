import react, { useState ,useMemo } from "react";

export const MainContext = react.createContext({
    zIndexNote: 1,
    changezIndex: (e) => { },
    isAuthentication: false,
    onAuthentication: () => { }
})

const MainContextProvider = (props) => {
    const [highzIndexNote, setHighzIndexNote] = useState(1)
    const [isLogin, setLogin] = useState(false)


    const highzIndexNoteHandler = (index) => {
        setHighzIndexNote(index)
    }

    const onAuthenticationHandler =useMemo((username)=>{
        document.cookie = `username=${username}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
        setLogin(true)
    },[])

    return (
        <MainContext.Provider value={
            {
                zIndexNote: highzIndexNote,
                changezIndex: highzIndexNoteHandler,
                isAuthentication: isLogin ,
                onAuthentication : onAuthenticationHandler
            }
        }>
            {props.children}
        </MainContext.Provider>)
}

export default MainContextProvider 