import { useMemo, useState } from "react"

const Home = () => {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState('true')
    const styleObj = {
        fontSize: 22,
        // color: "#4a54f1",
        textAlign: "center",
        // paddingTop: "100px",
    }
    const styleDiv = {
        width: '350px',
        height: '50px',
        backgroundColor: 'rgb(181 195 208)',
        textAlign: 'center',
        paddingTop: '30px',
        marginLeft: '40%'

    }
    const btnStyle = {
        backgroundColor: '#cbb5d5',
        padding: '7px',
        borderRadius: '110px',
        marginTop: '5px'
    }
    const addCountBtn = () => {
        setCount(count + 1)
    }
    const countNumber = (num) => {
        console.log("count Number Values!", num)
        for (let i = 0; i < 200000000; i++) { }
        return num
    }

    useMemo(() => {
        countNumber(count)
    }, [count])
    return (<>
        <div style={styleObj} ><h3>useMemo Hooks</h3>
            <ul>
                <p>The React useMemo Hook returns a memoized value.</p>
                <p>  The useMemo Hook only runs when one of its dependencies update.</p>
                <p>  This can improve performance.</p >
                <p>  The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function</p>
            </ul>
        </div>
        <div style={styleDiv}>number:- {count} <br />
            <button style={btnStyle} onClick={addCountBtn}>AddCount</button>
        </div>
        <div style={styleDiv}>
            <button style={btnStyle} onClick={() => setShow(!show)}>{show ? "You Clicked Me!" : "Please Click Me!"}</button>
        </div>
    </>)
}
export default Home