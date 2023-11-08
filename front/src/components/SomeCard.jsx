import { useTheContext } from "../context/Context";

function SomeCard() {
    const { state, setState, user } = useTheContext();
    console.log(user);
    return (
        <div>
            {state}
            <button onClick={() => setState(state + 1)}>Increment</button>
        </div>
    );
}
 export default SomeCard;