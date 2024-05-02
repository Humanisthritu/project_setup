import { useDispatch, useSelector } from "react-redux";
import { decNumber, decNumberVal, incNumber, incNumberVal } from "../actions";
import './inc_dec.css'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const IncDec = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  const state = useSelector((state:any) => state.changeNumber);
  const dispatch = useDispatch();
  console.log(state)


  const Increment = ()=>{
      dispatch(incNumber());
  }

  const Decrement = () => {
      dispatch(decNumber())
  }

return (
  <>
      <div className="main_div">
          <div className="center_div">
              <h1>{state}</h1>
              <div className="btn_div">
                  <button onClick={Increment}>Increment</button>
                  <button onClick={Decrement}>Decrement</button>
              </div>
              <div className="btn_div">
                  <button onClick={() => dispatch(incNumberVal(10))} style={{backgroundColor: colors.modeChange[800], color:colors.modeChange[400]}}>Increment by 10</button>
                  <button onClick={() => dispatch(decNumberVal(10))}>Decrement by 10</button>
              </div>
          </div>
      </div>
  </>
)
}

export default IncDec