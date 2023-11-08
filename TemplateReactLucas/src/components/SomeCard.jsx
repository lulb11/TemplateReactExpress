import { useTheContext } from "../context/Context";

function SomeCard() {
    const { state, setState } = useTheContext();
    return (
        <div>
            {state}
            <button onClick={() => setState(state + 1)}>Increment</button>
        </div>
    );
}
 export default SomeCard;